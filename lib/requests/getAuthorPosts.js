import { fetchAPI } from "@lib/api";

async function getAuthorPosts(locale, first, after, author) {
  const data = await fetchAPI(`
    {
      posts (first: ${first}, after: ${JSON.stringify(after ?? null)}, where: { wpmlLanguage: ${JSON.stringify(String(locale))}, authorName: ${JSON.stringify(String(author))} }) {
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

export default getAuthorPosts;