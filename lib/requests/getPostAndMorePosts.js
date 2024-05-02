import { fetchAPI } from "@lib/api";

async function getPostAndMorePosts(locale, uri) {
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
      post(id: "${uri}", idType: URI) {
        databaseId
        outdated
        date
        modifiedGmt
        title
        content
        excerpt
        uri
        slug
        discoursePermalink
        aioseoTitle
        aioseoDescription
        featuredImage {
          node {
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
        author {
          node {
            name
            slug
          }
        }
        categories {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
        tags {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
        translations {
          href
          locale
        }
      }
    }
  `);

  return data;
};

export default getPostAndMorePosts;