import { fetchAPI } from "@lib/api";

async function getAuthorPosts(locale, first, after, author) {
  const data = await fetchAPI(`
    {
      posts (first: ${first}, after: ${after}, where: { wpmlLanguage: "${locale}", authorName: "${author}" }) {
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