import { fetchAPI } from "@lib/fetchAPI";

async function getSearchResults(locale, first, after, query) {
  const data = await fetchAPI(`
    {
      posts (first: ${first}, after: ${after}, where: { wpmlLanguage: "${locale}", search: "${query}" }) {
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