import { fetchAPI } from "@lib/api";

async function getMainPostExcerpt(locale) {
  const data = await fetchAPI(`
    {
      posts (first: 1, where: { wpmlLanguage: ${JSON.stringify(String(locale))} }) {
        edges {
          node {
            moreTextExcerpt
          }
        }
      }
    }
  `);

  return data?.posts;
};

export default getMainPostExcerpt;