import { fetchAPI } from "@lib/api";

async function getAuthorSlug(locale) {
  const data = await fetchAPI(`
    {
      posts (first: 500, where: { wpmlLanguage: "${locale}" }) {
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
