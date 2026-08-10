import { fetchAPI } from "@lib/api";

async function getCategorySlug(locale) {
  const data = await fetchAPI(`
    {
      categories (first: 50, where: { wpmlLanguage: ${JSON.stringify(String(locale))} }) {
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
