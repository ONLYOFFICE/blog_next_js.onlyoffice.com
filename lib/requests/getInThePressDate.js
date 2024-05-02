import { fetchAPI } from "@lib/fetchAPI";

async function getInThePressDate(locale) {
  const data = await fetchAPI(`
    {
      pages (where: { wpmlLanguage: "${locale}", name: "onlyoffice-in-the-press" }) {
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

export default getInThePressDate;