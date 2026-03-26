import { fetchAPI } from "@lib/api";
import { translatePostsList } from "@lib/translation";

async function getCategoryPosts(locale, first, after, category) {
  const data = await fetchAPI(`
    {
      posts (first: ${first}, after: ${after}, where: { wpmlLanguage: "${locale}", categoryName: "${category}" }) {
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
            categories (where: {slug: "${category}"}) {
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

  if (data?.posts?.edges) {
    data.posts.edges = await translatePostsList(data.posts.edges, locale);
  }

  return data?.posts;
};

export default getCategoryPosts;