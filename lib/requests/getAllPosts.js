import { fetchAPI } from "@lib/api";
import { translatePostsList } from "@lib/translation";

async function getAllPosts(locale, first, after, category) {
  const data = await fetchAPI(`
    {
      posts (first: ${first}, after: ${after}, where: { categoryName: "${category}", wpmlLanguage: "${locale}" }) {
        edges {
          node {
            id
            title
            slug
            uri
            firstImgPost
            date
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
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `);

  if (data?.posts?.edges) {
    data.posts.edges = await translatePostsList(data.posts.edges, locale);
  }

  return data?.posts;
};

export default getAllPosts;