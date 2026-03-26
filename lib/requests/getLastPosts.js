import { fetchAPI } from "@lib/api";
import { translatePostsList } from "@lib/translation";

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

  if (data?.posts?.edges) {
    data.posts.edges = await translatePostsList(data.posts.edges, locale);
  }

  return data?.posts;
};

export default getLastPosts;