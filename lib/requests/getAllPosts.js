import { fetchAPI } from "@lib/fetchAPI";

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

  return data?.posts;
};

export default getAllPosts;