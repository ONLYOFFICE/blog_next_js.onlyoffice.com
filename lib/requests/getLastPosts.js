import { fetchAPI } from "@lib/fetchAPI";

async function getLastPosts(locale) {
  const data = await fetchAPI(`
    {
      posts (first: 3, where: { wpmlLanguage: "${locale}" }) {
        edges {
          node {
            id
            title
            date
            uri
            firstImgPost
            featuredImage {
              node {
                sourceUrl(size: FULL_THUMBNAIL)
              }
            }
            author {
              node {
                name
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

export default getLastPosts;