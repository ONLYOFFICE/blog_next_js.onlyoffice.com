import { fetchAPI } from "@lib/api";

async function getCategoryPosts(locale, first, after, category) {
  const data = await fetchAPI(`
    {
      posts (first: ${first}, after: ${JSON.stringify(after ?? null)}, where: { wpmlLanguage: ${JSON.stringify(String(locale))}, categoryName: ${JSON.stringify(String(category))} }) {
        edges {
          node {
            id
            title
            date
            uri
            firstImgPost
            author {
              node {
                name
                slug
              }
            }
            featuredImage {
              node {
                sourceUrl(size: FULL_THUMBNAIL)
                link
              }
            }
            categories (where: {slug: ${JSON.stringify(String(category))}}) {
              nodes {
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

export default getCategoryPosts;