import { fetchAPI } from "@lib/api";

async function getPostsUri(locale) {
  const data = await fetchAPI(`
    {
      posts (first: 3, where: { wpmlLanguage: "${locale}" }) {
        edges {
          node {
            uri
          }
        }
      }
    }
  `);

  return data?.posts;
};

export default getPostsUri;