import { fetchAPI } from "@lib/api";

async function getCategorySlug(locale) {
  const data = await fetchAPI(`
    {
      categories (first: 3, where: { wpmlLanguage: "${locale}" }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  return data?.categories;
};

export default getCategorySlug;