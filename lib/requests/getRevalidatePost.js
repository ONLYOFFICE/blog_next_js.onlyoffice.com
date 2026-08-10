import { fetchAPI } from "@lib/api";

async function getRevalidatePost(locale, uri) {
  const data = await fetchAPI(`
    {
      posts (first: 1, where: { wpmlLanguage: ${JSON.stringify(String(locale))} }) {
        edges {
          node {
            id
          }
        }
      }
      post(id: ${JSON.stringify(String(uri))}, idType: URI) {
        author {
          node {
            slug
          }
        }
        categories {
          edges {
            node {
              slug
            }
          }
        }
        tags {
          edges {
            node {
              slug
            }
          }
        }
        translations {
          href
        }
      }
    }
  `);

  return data?.post;
};

export default getRevalidatePost;