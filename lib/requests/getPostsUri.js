import { fetchAPI } from "@lib/api";

async function getPostsUri(locale) {
  const allEdges = [];
  let after = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const data = await fetchAPI(`
      query GetPostsUri($after: String, $locale: String!) {
        posts(first: 100, after: $after, where: { wpmlLanguage: $locale }) {
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
    `, {
      variables: { after, locale },
    });

    if (!data?.posts) break;

    allEdges.push(...data.posts.edges);
    hasNextPage = data.posts.pageInfo.hasNextPage;
    after = data.posts.pageInfo.endCursor;
  }

  return { edges: allEdges };
}

export default getPostsUri;