const API_URL = "https://teamlab.info/blog/graphql";

async function fetchAPI(query = '', { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
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

export async function getAllPosts(locale) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 100, where: { wpmlLanguage: "${locale}", orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            id
            title
            excerpt
            slug
            discoursePermalink
            link
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                uri
              }
            }
          }
        }
      }
    }
  `,
  )

  return data?.posts
}

export async function getProductReleasesPosts(locale) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 3, where: { categoryName: "product-releases", wpmlLanguage: "${locale}", orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            id
            title
            excerpt
            slug
            link
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                uri
              }
            }
          }
        }
      }
    }
  `,
  )

  return data?.posts
}

export async function getForDevelopersPosts(locale) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 3, where: { categoryName: "for-developers", wpmlLanguage: "${locale}", orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            id
            title
            excerpt
            slug
            link
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                uri
              }
            }
          }
        }
      }
    }
  `,
  )

  return data?.posts
}

export async function getForBusinessPosts(locale) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 3, where: { categoryName: "for-business", wpmlLanguage: "${locale}", orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            id
            title
            excerpt
            slug
            link
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                uri
              }
            }
          }
        }
      }
    }
  `,
  )

  return data?.posts
}

export async function getForEducationPosts(locale) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 3, where: { categoryName: "for-education", wpmlLanguage: "${locale}", orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            id
            title
            excerpt
            slug
            link
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                uri
              }
            }
          }
        }
      }
    }
  `,
  )

  return data?.posts
}

export async function getInThePressPosts(locale) {
  const data = await fetchAPI(
  `
    query AllNews {
      news(first: 5, where: { wpmlLanguage: "${locale}", orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            id
            link
            title
            date
          }
        }
      }
    }
  `,
  )

  return data?.news
}