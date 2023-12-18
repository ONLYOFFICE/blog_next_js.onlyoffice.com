import { getSearchResults } from "@lib/api";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  const { locale, searchQuery } = body;

  if (req.method === "POST") {
    const response = await getSearchResults(locale, 5, null, searchQuery);

    return res.json({ data: response });
  } else {
    return res.status(500).end();
  }
};