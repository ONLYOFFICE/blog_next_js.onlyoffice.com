import { getCached, setCached, getContentHash } from "./cache";
import { translateFields, translateTitles } from "./translate";

const FULL_POST_FIELDS = ["title", "content", "excerpt", "aioseoTitle", "aioseoDescription"];
const LIST_POST_FIELDS = ["title"];

function hasWpTranslation(post, locale) {
  if (!post?.translations || !Array.isArray(post.translations)) return false;

  return post.translations.some((t) => {
    if (t.locale !== locale) return false;
    if (!t.href) return false;
    const [, query] = t.href.split("?");
    const hasPParam = query?.split("&").some((param) => param.startsWith("p="));
    return !hasPParam;
  });
}

function getPostId(post) {
  return post.databaseId || post.id || post.slug;
}

function pickFields(post, fieldNames) {
  const fields = {};
  for (const key of fieldNames) {
    if (post[key] !== undefined) {
      fields[key] = post[key];
    }
  }
  return fields;
}

export async function translatePost(post, locale) {
  if (!post || locale === "en") return post;
  if (hasWpTranslation(post, locale)) return post;

  const postId = getPostId(post);
  if (!postId) return post;

  const fields = pickFields(post, FULL_POST_FIELDS);
  if (Object.keys(fields).length === 0) return post;

  const contentHash = getContentHash(fields);

  try {
    const cached = getCached(postId, locale, contentHash);
    if (cached) {
      console.log(`[translation] cache hit: ${postId} (${locale})`);
      return { ...post, ...cached };
    }

    console.log(`[translation] translating post ${postId} to ${locale}...`);
    const translated = await translateFields(fields, locale);
    setCached(postId, locale, contentHash, translated);
    return { ...post, ...translated };
  } catch (error) {
    console.error(`[translation] error translating post ${postId}:`, error.message);
    return post;
  }
}

export async function translatePostsList(edges, locale) {
  if (!edges || edges.length === 0 || locale === "en") return edges;

  const postsToTranslate = [];
  const indexMap = [];

  edges.forEach((edge, i) => {
    const post = edge.node || edge;
    const postId = getPostId(post);
    if (!postId) return;

    const fields = pickFields(post, LIST_POST_FIELDS);
    if (!fields.title) return;

    const contentHash = getContentHash(fields);
    const cached = getCached(postId, locale, contentHash);

    if (cached) {
      const target = edge.node ? edge.node : edge;
      Object.assign(target, cached);
    } else {
      postsToTranslate.push({ index: i, postId, title: post.title, contentHash });
      indexMap.push(i);
    }
  });

  if (postsToTranslate.length === 0) return edges;

  try {
    console.log(`[translation] translating ${postsToTranslate.length} titles to ${locale}...`);
    const titles = postsToTranslate.map((p) => p.title);
    const translated = await translateTitles(titles, locale);

    translated.forEach((translatedTitle, i) => {
      const { index, postId, contentHash } = postsToTranslate[i];
      const edge = edges[index];
      const post = edge.node || edge;
      post.title = translatedTitle;
      setCached(postId, locale, contentHash, { title: translatedTitle });
    });
  } catch (error) {
    console.error(`[translation] error translating titles:`, error.message);
  }

  return edges;
}
