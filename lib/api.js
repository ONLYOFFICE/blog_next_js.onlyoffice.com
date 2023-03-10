const API_URL = "https://teamlab.info/blog/graphql";

async function fetchAPI(query = '', { variables } = {}) {
  const res = await fetch(API_URL, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
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
    query AllNews {
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

export async function getAllPostsWithUri(locale) {
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
        date
        title
        content
        uri
        slug
        commentCount
        viewCount
        discoursePermalink
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
              link
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
        idType: 'URI'
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

export async function getAuthorPostsSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000, where: { wpmlLanguage: "all" }) {
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

export async function getCategoryPostsSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000, where: { wpmlLanguage: "all" }) {
        edges {
          node {
            categories {
              nodes {
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