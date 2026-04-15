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

  const { query, locale } = typeof req.body === "string"
    ? JSON.parse(req.body)
    : req.body;

  if (!query || !query.trim()) {
    return res.status(400).json({ error: "Query is required" });
  }

  try {
    const filters = locale ? `language:${locale}` : "";

    const { hits } = await algoliaClient.searchSingleIndex({
      indexName: process.env.ALGOLIA_INDEX_NAME,
      searchParams: {
        query: query.trim(),
        hitsPerPage: MAX_HITS,
        filters,
        removeWordsIfNoResults: "allOptional",
        distinct: true,
        attributesToRetrieve: [
          "post_id",
          "post_title",
          "content",
          "permalink",
          "post_date_formatted",
          "post_author",
          "taxonomies",
        ],
      },
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
          content: `Based on the following blog articles, answer the user's question.\n\n${context}\n\nQuestion: ${query}`,
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
