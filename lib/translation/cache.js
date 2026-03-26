import { createHash } from "crypto";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

const CACHE_DIR = path.join(process.cwd(), ".translation-cache");

export function getContentHash(fields) {
  const content = Object.values(fields).filter(Boolean).join("|||");
  return createHash("md5").update(content).digest("hex");
}

function getCachePath(locale, postId) {
  return path.join(CACHE_DIR, locale, `${postId}.json`);
}

export function getCached(postId, locale, contentHash) {
  const filePath = getCachePath(locale, postId);

  if (!existsSync(filePath)) return null;

  try {
    const data = JSON.parse(readFileSync(filePath, "utf-8"));
    if (data.contentHash === contentHash) {
      return data.fields;
    }
    return null;
  } catch {
    return null;
  }
}

export function setCached(postId, locale, contentHash, fields) {
  const filePath = getCachePath(locale, postId);
  const dir = path.dirname(filePath);

  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  const data = {
    contentHash,
    createdAt: new Date().toISOString(),
    fields,
  };

  writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}
