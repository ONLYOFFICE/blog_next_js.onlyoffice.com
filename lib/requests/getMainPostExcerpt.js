import { fetchAPI } from "@lib/fetchAPI";

async function getMainPostExcerpt(locale) {
  const data = await fetchAPI(`
    {
      posts (first: 1, where: { wpmlLanguage: "${locale}" }) {
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