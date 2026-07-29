import { fetchAPI } from "@lib/api";

async function getPostsUri(locale) {
  const allEdges = [];
  let after = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const data = await fetchAPI(`
      {
        posts(first: 500, after: ${after ? `"${after}"` : null}, where: { wpmlLanguage: "${locale}" }) {
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