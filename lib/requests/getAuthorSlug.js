import { fetchAPI } from "@lib/fetchAPI";

async function getAuthorSlug(locale) {
  const data = await fetchAPI(`
    {
      posts (first: 3, where: { wpmlLanguage: "${locale}" }) {
        edges {
          node {
            author {
              node {
                slug
              }
            }
          }
        }
      }
    }
  `);

  return data?.posts;
};

export default getAuthorSlug;