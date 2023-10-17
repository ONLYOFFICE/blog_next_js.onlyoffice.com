import { getRevalidatePost } from "@lib/api";

export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  };

  const lang = req.query.lang;
  const path = req.query.path;
  const category = req.query.category;
  const author = req.query.author;
  const tag = req.query.tag;

  try {
    const post = await getRevalidatePost(lang, path);

    const commonPaths = [
      `/blog/${lang}`,
      `/blog/${lang}/search`,
      `/blog/${lang}/onlyoffice-in-the-press`,
      post && post.translations.map(node => `/blog/${node.href.split("/").slice(3).join("/").replace(/\/$/, "")}`),
      post && `/blog/${lang}/author/${post.author.node.slug}`,
      post && post.categories.edges.map(node => `/blog/${lang}/category/${node.node.slug}`),
      post && post.tags.edges?.map(node => `/blog/${lang}/tag/${node.node.slug}`),
      Array.isArray(category) ? category.map(node => `/blog/${lang}/category/${node}`) : `/blog/${lang}/category/${category}`,
      Array.isArray(author) ? author.map(node => `/blog/${lang}/author/${node}`) : `/blog/${lang}/author/${author}`,
      Array.isArray(tag) ? tag.map(node => `/blog/${lang}/tag/${node}`) : `/blog/${lang}/tag/${tag}`,
    ].flat();

    await Promise.all(commonPaths.map(path => res.revalidate(path)));

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  };
};