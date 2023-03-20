const API_URL = "https:/teamlab.info/blog/graphql";

async function fetchAPI(query = "", { variables } = {}) {
  try {
    const res = await fetch(API_URL, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        query,
        variables,
      }),
    });
  
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getAllPosts(locale, first, after, category) {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: ${first}, after: ${after}, where: { categoryName: "${category}", wpmlLanguage: "${locale}" }) {
        edges {
          node {
            id
            title
            excerpt
            slug
            discoursePermalink
            uri
            firstImgPost
            featuredImage {
              node {
                sourceUrl
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
  `)

  return data?.posts
}

export async function getInThePressPosts(locale, first, after) {
  const data = await fetchAPI(`
    {
      news(first: ${first}, after: ${after} where: { wpmlLanguage: "${locale}", orderby: {order: DESC, field: TITLE} }) {
        edges {
          node {
            id
            title
            dateNews
            excerpt
            url
            shortUrl
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `)
  return data?.news
}

export async function getInThePressDate(locale) {
  const data = await fetchAPI(`
    {
      pages(where: {wpmlLanguage: "${locale}", name: "onlyoffice-in-the-press"}) {
        edges {
          node {
            dateGmt
            modifiedGmt
          }
        }
      }
    }
  `)
  return data?.pages
}

export async function getMainPageDate(locale) {
  const data = await fetchAPI(`
    {
      pages(where: {wpmlLanguage: "${locale}", name: "main-page"}) {
        edges {
          node {
            dateGmt
            modifiedGmt
          }
        }
      }
    }
  `)
  return data?.pages
}

export async function getPostPagelink(locale, id) {
  const data = await fetchAPI(`
    {
      posts(where: {wpmlLanguage: "${locale}", id: ${id}}) {
        edges {
          node {
            link
          }
        }
      }
    }
  `)
  return data?.posts
}

export async function getPostsUri(locale) {
  const data = await fetchAPI(`
    {
      posts(first: 10000, where: { wpmlLanguage: "${locale}" }) {
        edges {
          node {
            uri
          }
        }
      }
    }
  `)
  return data?.posts
}

export async function getPostAndMorePosts(locale, uri) {
  const data = await fetchAPI(`
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        date
        modifiedGmt
        title
        content
        excerpt
        uri
        link
        slug
        commentCount
        viewCount
        discoursePermalink
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
        comments(where: {order: ASC}) {
          edges {
            node {
              author {
                node {
                  avatar {
                    url
                  }
                  name
                }
              }
              id
              commentId
              content
              date
              databaseId
              parentDatabaseId
              parentId
            }
          }
        }
      }
      posts(first: 3, where: { wpmlLanguage: "${locale}" }) {
        edges {
          node {
            id
            title
            date
            uri
            firstImgPost
            featuredImage {
              node {
                sourceUrl
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
    `,
    {
      variables: {
        id: uri,
        idType: "URI"
      }
    }
  )

  return data
}

export async function getRecentPosts(locale) {
  const data = await fetchAPI(`
    {
      posts(first: 3, where: { wpmlLanguage: "${locale}" }) {
        edges {
          node {
            id
            title
            date
            uri
            firstImgPost
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `)

  return data?.posts
}

export async function getAuthorSlug(locale) {
  const data = await fetchAPI(`
    {
      posts(first: 10000, where: { wpmlLanguage: "${locale}" }) {
        edges {
          node {
            author {
              node {
                slug
              }
            }
          }
        }
      }
    }
  `)

  return data?.posts
}

export async function getAuthorPosts(locale, first, after, author) {
  const data = await fetchAPI(`
    {
      posts(first: ${first}, after: ${after} where: { wpmlLanguage: "${locale}", authorName: "${author}" }) {
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
                sourceUrl
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
  `)

  return data?.posts
}

export async function getCategorySlug() {
  const data = await fetchAPI(`
    {
      categories(first: 10000, where: { wpmlLanguage: "all" }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  return data?.categories
}

export async function getCategoryPosts(locale, first, after, category) {
  const data = await fetchAPI(`
    {
      posts(first: ${first}, after: ${after} where: { wpmlLanguage: "${locale}", categoryName: "${category}" }) {
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
                sourceUrl
                link
              }
            }
            categories(where: {slug: "${category}"}) {
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
  `)

  return data?.posts
}

export async function getTagSlug() {
  const data = await fetchAPI(`
    {
      tags(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  return data?.tags
}

export async function getTagPosts(locale, first, after, tag) {
  const data = await fetchAPI(`
    {
      posts(first: ${first}, after: ${after} where: { wpmlLanguage: "${locale}", tag: "${tag}" }) {
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
                sourceUrl
                link
              }
            }
            tags(where: {slug: "${tag}"}) {
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
  `)

  return data?.posts
}

export async function getSearchResults(locale, first, after, query) {
  const data = await fetchAPI(`
    {
      posts(first: ${first}, after: ${after} where: { wpmlLanguage: "${locale}", search: "${query}" }) {
        edges {
          node {
            id
            title
            date
            uri
            excerpt
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
  `)

  return data?.posts
}