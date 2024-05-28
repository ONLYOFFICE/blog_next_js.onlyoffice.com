import { fetchAPI } from "@lib/api";

async function getRevalidateAuthor(author) {
  const data = await fetchAPI(`
    {
      posts(first: 1500, where: {authorName: "${author}"}) {
        edges {
          node {
            uri
          }
        }
      }
    }
  `);

  return data?.posts;
};

export default getRevalidateAuthor;