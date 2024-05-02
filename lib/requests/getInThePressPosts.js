import { fetchAPI } from "@lib/fetchAPI";

async function getInThePressPosts(locale, first, after) {
  const data = await fetchAPI(`
    {
      news (first: ${first}, after: ${after}, where: { wpmlLanguage: "${locale}", metaQuery: { metaArray: { type: NUMERIC, key: "dateNews" }}, orderby: { order: DESC, field: META }}) {
        edges {
          node {
            id
            title
            dateNews
            excerpt
            url
            shortUrl
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `);

  return data?.news;
};

export default getInThePressPosts;