import { fetchAPI } from "@lib/api";
import { translatePostsList } from "@lib/translation";

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

  if (data?.posts?.edges) {
    data.posts.edges = await translatePostsList(data.posts.edges, locale);
  }

  return data?.posts;
};

export default getSearchResults;