import { fetchAPI } from "@lib/fetchAPI";

async function getRevalidatePost(locale, uri) {
  const data = await fetchAPI(`
    {
      posts (first: 1, where: { wpmlLanguage: "${locale}" }) {
        edges {
          node {
            id
          }
        }
      }
      post(id: "${uri}", idType: URI) {
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