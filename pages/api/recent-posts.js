import { getLastPosts } from "@lib/api";

export default async (req, res) => {
  const body = JSON.parse(req.body);
  const { locale } = body;

  if (req.method === "POST") {
    const response = await getLastPosts(locale);

    return res.json({ data: response });
  } else {
    return res.status(500).end();
  }
};