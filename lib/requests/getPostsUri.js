import { fetchAPI } from "@lib/api";

async function getPostsUri(locale) {
  const allEdges = [];
  let after = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const data = await fetchAPI(`
      {
        posts(first: 500, after: ${JSON.stringify(after ?? null)}, where: { wpmlLanguage: ${JSON.stringify(String(locale))} }) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              uri
            }
          }
        }
      }
    `);

    if (!data?.posts) break;

    allEdges.push(...data.posts.edges);
    hasNextPage = data.posts.pageInfo.hasNextPage;
    after = data.posts.pageInfo.endCursor;
  }

  return { edges: allEdges };
}

export default getPostsUri;