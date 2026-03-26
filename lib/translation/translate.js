import client from "./client";
import languages from "@config/languages.json";

const MODEL = "claude-haiku-4-5-20251001";
const MAX_TOKENS = 16000;

const FIELD_SEPARATOR = "---FIELD:";

function getLanguageName(locale) {
  const lang = languages.find((l) => l.shortKey === locale);
  return lang?.longKey || locale;
}

function buildPrompt(fields, languageName) {
  let fieldsText = "";
  for (const [key, value] of Object.entries(fields)) {
    if (value) {
      fieldsText += `${FIELD_SEPARATOR}${key}---\n${value}\n`;
    }
  }

  return `You are a professional translator for the ONLYOFFICE blog. Translate the following blog post fields from English to ${languageName}.

Rules:
- Preserve ALL HTML tags, attributes, links, and structure exactly as-is
- Do NOT translate: ONLYOFFICE, DocSpace, Docs, Workspace, product names, URLs, code blocks, email addresses
- Keep the same professional blog tone
- Translate naturally for the target audience, not word-by-word
- Each field is separated by ${FIELD_SEPARATOR}fieldname--- markers
- Return the translation with the SAME markers, preserving the exact field structure
- Return ONLY the translated fields with markers, no explanations or extra text

${fieldsText}`;
}

function parseResponse(responseText, fieldKeys) {
  const result = {};

  for (const key of fieldKeys) {
    const marker = `${FIELD_SEPARATOR}${key}---`;
    const startIdx = responseText.indexOf(marker);
    if (startIdx === -1) continue;

    const contentStart = startIdx + marker.length;
    let contentEnd = responseText.length;

    for (const otherKey of fieldKeys) {
      if (otherKey === key) continue;
      const otherMarker = `${FIELD_SEPARATOR}${otherKey}---`;
      const otherIdx = responseText.indexOf(otherMarker, contentStart);
      if (otherIdx !== -1 && otherIdx < contentEnd) {
        contentEnd = otherIdx;
      }
    }

    result[key] = responseText.slice(contentStart, contentEnd).trim();
  }

  return result;
}

export async function translateFields(fields, targetLocale) {
  const languageName = getLanguageName(targetLocale);
  const nonEmptyFields = Object.fromEntries(
    Object.entries(fields).filter(([, v]) => v)
  );

  if (Object.keys(nonEmptyFields).length === 0) return fields;

  const prompt = buildPrompt(nonEmptyFields, languageName);

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: MAX_TOKENS,
    messages: [{ role: "user", content: prompt }],
  });

  const responseText = response.content[0]?.text || "";
  const translated = parseResponse(responseText, Object.keys(nonEmptyFields));

  const result = { ...fields };
  for (const [key, value] of Object.entries(translated)) {
    if (value) result[key] = value;
  }

  return result;
}

export async function translateTitles(titles, targetLocale) {
  if (titles.length === 0) return [];

  const languageName = getLanguageName(targetLocale);

  let titlesText = "";
  titles.forEach((title, i) => {
    titlesText += `${FIELD_SEPARATOR}title_${i}---\n${title}\n`;
  });

  const prompt = `You are a professional translator for the ONLYOFFICE blog. Translate the following blog post titles from English to ${languageName}.

Rules:
- Do NOT translate: ONLYOFFICE, DocSpace, Docs, Workspace, product names
- Keep the same professional blog tone
- Translate naturally for the target audience
- Each title is separated by ${FIELD_SEPARATOR}title_N--- markers
- Return the translation with the SAME markers
- Return ONLY the translated titles with markers, no explanations

${titlesText}`;

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: MAX_TOKENS,
    messages: [{ role: "user", content: prompt }],
  });

  const responseText = response.content[0]?.text || "";
  const fieldKeys = titles.map((_, i) => `title_${i}`);
  const parsed = parseResponse(responseText, fieldKeys);

  return titles.map((original, i) => parsed[`title_${i}`] || original);
}
