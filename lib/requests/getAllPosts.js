import { fetchAPI } from "@lib/api";

async function getAllPosts(locale, first, after, category) {
  const data = await fetchAPI(`
    {
      posts (first: ${first}, after: ${JSON.stringify(after ?? null)}, where: { categoryName: ${JSON.stringify(String(category))}, wpmlLanguage: ${JSON.stringify(String(locale))} }) {
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