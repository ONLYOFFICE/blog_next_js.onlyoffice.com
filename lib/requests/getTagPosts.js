import { fetchAPI } from "@lib/api";

async function getTagPosts(locale, first, after, tag) {
  const data = await fetchAPI(`
    {
      posts (first: ${first}, after: ${JSON.stringify(after ?? null)}, where: { wpmlLanguage: ${JSON.stringify(String(locale))}, tag: ${JSON.stringify(String(tag))} }) {
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
            tags(where: {slug: ${JSON.stringify(String(tag))}}) {
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

export default getTagPosts;