import { fetchAPI } from "@lib/api";

async function getTagSlug() {
  const data = await fetchAPI(`
    {                   
      tags (first: 1500) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  return data?.tags;
};

export default getTagSlug;