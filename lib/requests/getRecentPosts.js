import { fetchAPI } from "@lib/api";

async function getRecentPosts(locale) {
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
          }
        }
      }
    }
  `);

  return data?.posts;
};

export default getRecentPosts;