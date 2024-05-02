import { fetchAPI } from "@lib/fetchAPI";

async function getMainPageDate(locale) {
  const data = await fetchAPI(`
    {
      pages (where: { wpmlLanguage: "${locale}", name: "main" }) {
        edges {
          node {
            dateGmt
            modifiedGmt
          }
        }
      }
    }
  `);

  return data?.pages;
};

export default getMainPageDate;