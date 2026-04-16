import { algoliasearch } from "algoliasearch";
import OpenAI from "openai";

const algoliaClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_SEARCH_API_KEY
);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are a helpful assistant for the ONLYOFFICE blog.
Answer user questions using ONLY the information from the provided blog articles.
If the information is insufficient to answer the question, say so honestly.

When referencing an article, ALWAYS format it as a markdown link: [Article Title](url)
NEVER write the URL as plain text. NEVER write "URL:" followed by a URL.
Use EXACTLY the URLs provided — do not modify, complete, or add a domain to them.

Example format for listing articles:
1. [Article Title](/blog/2020/08/article-slug) — Date: August 13, 2020

Respond in the same language as the user's question.`;

const MAX_HITS = 8;
const MAX_CONTENT_LENGTH = 1500;
const MIN_QUERY_LENGTH = 3;
const MAX_QUERY_LENGTH = 500;

// Temporal keywords per language. If the query matches, we restrict
// Algolia search to a recent date range and sort results by date.
const TEMPORAL_PATTERNS = [
  // English
  /\b(recent|latest|new(est)?|this\s+(week|month|year)|last\s+(week|month|year|day)|today|yesterday|\d+\s+days?\s+ago)\b/i,
  // Russian
  /(недавн|последн|свеж|нов(ы|и)|за\s+(неделю|месяц|год|день)|сегодня|вчера|позавчера|за\s+\d+\s+дн)/i,
  // German
  /\b(neueste|letzte\s+(woche|monat|jahr|tage?)|kürzlich|heute|gestern)\b/i,
  // French
  /\b(récent|dernier|derni[èe]re\s+(semaine|mois|ann[ée]e|jour)|aujourd'hui|hier)\b/i,
  // Spanish
  /\b(reciente|[uú]ltim[ao]\s+(semana|mes|a[ñn]o|d[ií]a)|hoy|ayer)\b/i,
  // Italian
  /\b(ultim[oa]\s+(settimana|mese|anno|giorno)|oggi|ieri)\b/i,
];

function detectTemporalIntent(query) {
  return TEMPORAL_PATTERNS.some((re) => re.test(query));
}

// Filler words across supported languages that don't carry semantic weight
// on their own (verbs like "get/show", articles, generic nouns like "posts").
const FILLER_PATTERN = /\b(get|show|give|return|list|fetch|bring|display|find|me|my|the|a|an|of|with|any|some|all|please|posts?|articles?|blog|entries?|вытащи|дай|покажи|верни|найди|мне|все|несколько|статьи?|посты?|пост|blog|записи|статью|zeige|gib|mir|alle|bitte|beiträge?|artikel|montrer|donner|moi|tous|s'il\s+te\s+pla[îi]t|articles?|billets?|mostra|dammi|dimmi|tutti|articoli|post|muestra|dame|todos|art[íi]culos?)\b/gi;

function isPurelyTemporal(query) {
  let stripped = query.toLowerCase();
  // Strip temporal patterns
  for (const re of TEMPORAL_PATTERNS) {
    stripped = stripped.replace(re, " ");
  }
  // Strip filler words
  stripped = stripped.replace(FILLER_PATTERN, " ");
  // Keep only letters and digits, collapse whitespace
  stripped = stripped.replace(/[^\p{L}\d]+/gu, " ").trim();
  return stripped.length < 4;
}

function getTemporalCutoff(query) {
  const lower = query.toLowerCase();
  const now = Math.floor(Date.now() / 1000);
  const day = 86400;

  // "N days ago" / "за N дней"
  const daysMatch = lower.match(/(\d+)\s+(days?|дн|дней|tage|jours|d[ií]as|giorni)/);
  if (daysMatch) return now - parseInt(daysMatch[1], 10) * day;

  if (/today|сегодня|heute|aujourd'hui|hoy|oggi/.test(lower)) return now - day;
  if (/yesterday|вчера|gestern|hier|ayer|ieri/.test(lower)) return now - 2 * day;
  if (/week|неделю|woche|semaine|semana|settimana/.test(lower)) return now - 7 * day;
  if (/month|месяц|monat|mois|mes|mese/.test(lower)) return now - 30 * day;
  if (/year|год|jahr|ann[ée]e|a[ñn]o|anno/.test(lower)) return now - 365 * day;

  // Fallback for generic "recent" / "latest" / "new"
  return now - 90 * day;
}

const RATE_LIMITS = {
  perMinute: 5,
  perHour: 30,
};

const rateLimitStore = new Map();

function getClientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return req.headers["x-real-ip"]
    || req.socket?.remoteAddress
    || "unknown";
}

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip) || { minute: [], hour: [] };

  entry.minute = entry.minute.filter((t) => now - t < 60_000);
  entry.hour = entry.hour.filter((t) => now - t < 3_600_000);

  if (entry.minute.length >= RATE_LIMITS.perMinute) {
    const retryAfter = Math.ceil((60_000 - (now - entry.minute[0])) / 1000);
    return { allowed: false, retryAfter, limit: RATE_LIMITS.perMinute };
  }

  if (entry.hour.length >= RATE_LIMITS.perHour) {
    const retryAfter = Math.ceil((3_600_000 - (now - entry.hour[0])) / 1000);
    return { allowed: false, retryAfter, limit: RATE_LIMITS.perHour };
  }

  entry.minute.push(now);
  entry.hour.push(now);
  rateLimitStore.set(ip, entry);

  return {
    allowed: true,
    remaining: RATE_LIMITS.perMinute - entry.minute.length,
  };
}

// Periodic cleanup of stale entries (every 5 minutes)
if (typeof globalThis.__aiSearchCleanup === "undefined") {
  globalThis.__aiSearchCleanup = setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of rateLimitStore) {
      if (entry.hour.every((t) => now - t > 3_600_000)) {
        rateLimitStore.delete(ip);
      }
    }
  }, 5 * 60 * 1000);
}

function transformPermalink(permalink, locale) {
  try {
    const url = new URL(permalink);
    const match = url.pathname.match(/(\/\d{4}\/\d{2}\/.+?)\/?$/);
    if (match) {
      const langPrefix = locale && locale !== "en" ? `/${locale}` : "";
      return `/blog${langPrefix}${match[1]}`;
    }
    return permalink;
  } catch {
    return permalink;
  }
}

function buildContext(hits, locale) {
  return hits.map((hit, i) => {
    const content = (hit.content || "").slice(0, MAX_CONTENT_LENGTH);
    const title = hit.post_title || "";
    const url = transformPermalink(hit.permalink || "", locale);
    const date = hit.post_date_formatted || "";
    const author = hit.post_author?.display_name || "";

    return `[Article ${i + 1}]
Title: ${title}
URL: ${url}
Date: ${date}
Author: ${author}
Content: ${content}`;
  }).join("\n\n");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Rate limiting
  const ip = getClientIp(req);
  const rateCheck = checkRateLimit(ip);

  if (!rateCheck.allowed) {
    res.setHeader("X-RateLimit-Limit", rateCheck.limit);
    res.setHeader("X-RateLimit-Remaining", 0);
    res.setHeader("Retry-After", rateCheck.retryAfter);
    return res.status(429).json({
      error: "Too many requests",
      retryAfter: rateCheck.retryAfter,
    });
  }

  res.setHeader("X-RateLimit-Limit", RATE_LIMITS.perMinute);
  res.setHeader("X-RateLimit-Remaining", rateCheck.remaining);

  const { query, locale } = typeof req.body === "string"
    ? JSON.parse(req.body)
    : req.body;

  // Query validation
  const trimmedQuery = (query || "").trim();

  if (trimmedQuery.length < MIN_QUERY_LENGTH) {
    return res.status(400).json({
      error: "Query too short",
      reason: "tooShort",
      minLength: MIN_QUERY_LENGTH,
    });
  }

  if (trimmedQuery.length > MAX_QUERY_LENGTH) {
    return res.status(400).json({
      error: "Query too long",
      reason: "tooLong",
      maxLength: MAX_QUERY_LENGTH,
    });
  }

  try {
    const isTemporal = detectTemporalIntent(trimmedQuery);
    const pureTemporal = isTemporal && isPurelyTemporal(trimmedQuery);

    const filterParts = [];
    if (locale) filterParts.push(`language:${locale}`);
    if (isTemporal) {
      const cutoff = getTemporalCutoff(trimmedQuery);
      filterParts.push(`post_date >= ${cutoff}`);
    }
    const filters = filterParts.join(" AND ");

    // For purely temporal queries (e.g. "show me recent posts"), send an empty
    // query and rely on the date filter + default customRanking (post_date desc).
    const algoliaQuery = pureTemporal ? "" : trimmedQuery;

    const { hits } = await algoliaClient.searchSingleIndex({
      indexName: process.env.ALGOLIA_INDEX_NAME,
      searchParams: {
        query: algoliaQuery,
        hitsPerPage: MAX_HITS,
        filters,
        removeWordsIfNoResults: "allOptional",
        distinct: true,
        attributesToRetrieve: [
          "post_id",
          "post_title",
          "content",
          "permalink",
          "post_date",
          "post_date_formatted",
          "post_author",
          "taxonomies",
        ],
      },
    });

    // Sort by date descending for temporal queries
    if (isTemporal) {
      hits.sort((a, b) => (b.post_date || 0) - (a.post_date || 0));
    }

    console.log("[ai-search]", {
      query: trimmedQuery,
      algoliaQuery,
      locale,
      filters,
      isTemporal,
      pureTemporal,
      hitsCount: hits.length,
      firstHit: hits[0]?.post_title,
    });

    if (hits.length === 0) {
      return res.status(200).json({
        answer: null,
        empty: true,
        sources: [],
      });
    }

    const context = buildContext(hits, locale);
    const sources = hits.map((hit) => ({
      title: hit.post_title,
      url: transformPermalink(hit.permalink || "", locale),
      date: hit.post_date_formatted,
    }));

    // Set up SSE streaming
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Send sources first
    res.write(`data: ${JSON.stringify({ type: "sources", sources })}\n\n`);

    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `Based on the following blog articles, answer the user's question.\n\n${context}\n\nQuestion: ${trimmedQuery}`,
        },
      ],
      temperature: 0.3,
      max_tokens: 1024,
    });

    for await (const chunk of stream) {
      const text = chunk.choices[0]?.delta?.content;
      if (text) {
        res.write(`data: ${JSON.stringify({ type: "text", text })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ type: "done" })}\n\n`);
    res.end();
  } catch (error) {
    console.error("AI search error:", error);

    if (!res.headersSent) {
      return res.status(500).json({ error: "Internal server error" });
    }

    res.write(`data: ${JSON.stringify({ type: "error", error: "An error occurred" })}\n\n`);
    res.end();
  }
}
