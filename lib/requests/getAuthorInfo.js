import { fetchAPI } from "@lib/api";

async function getAuthorInfo(locale, author) {
  const data = await fetchAPI(`
    {
      posts(where: {authorName: "${author}"}, first: 1) {
        edges {
          node {
            author {
              node {
                name
                slug
                avatar {
                  url
                }
              }
            }
            userSocialProfiles {
              facebookUrl
              twitterUrl
            }
            userBiographicalInfo {
              ${locale}
            }
          }
        }
      }
    }
  `);

  return data?.posts;
};

export default getAuthorInfo;