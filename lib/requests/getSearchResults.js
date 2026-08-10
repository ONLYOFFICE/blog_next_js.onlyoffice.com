import { fetchAPI } from "@lib/api";

async function getSearchResults(locale, first, after, query) {
  const data = await fetchAPI(`
    {
      posts (first: ${first}, after: ${JSON.stringify(after ?? null)}, where: { wpmlLanguage: ${JSON.stringify(String(locale))}, search: ${JSON.stringify(String(query))} }) {
        edges {
          node {
            id
            title
            date
            uri
            aioseoDescription
            excerpt
            author {
              node {
                name
                slug
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `);

  return data?.posts;
};

export default getSearchResults;