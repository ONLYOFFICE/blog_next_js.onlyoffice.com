import { getRevalidatePost } from "@lib/api";

export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const post = await getRevalidatePost(req.query.lang, req.query.path);

    await Promise.all([
      req.query.lang === "en" ? res.revalidate(`/blog`) :
      req.query.lang === "fr" ? res.revalidate(`/blog/fr`) :
      req.query.lang === "de" ? res.revalidate(`/blog/de`) :
      req.query.lang === "es" ? res.revalidate(`/blog/es`) :
      req.query.lang === "pt-br" ? res.revalidate(`/blog/pt-br`) :
      req.query.lang === "it" ? res.revalidate(`/blog/it`) :
      req.query.lang === "cs" ? res.revalidate(`/blog/cs`) :
      req.query.lang === "ja" ? res.revalidate(`/blog/ja`) :
      req.query.lang === "zh-hans" ? res.revalidate(`/blog/zh-hans`) : null,

      req.query.lang === "en" ? res.revalidate(`/blog/search`) :
      req.query.lang === "fr" ? res.revalidate(`/blog/fr/search`) :
      req.query.lang === "de" ? res.revalidate(`/blog/de/search`) :
      req.query.lang === "es" ? res.revalidate(`/blog/es/search`) :
      req.query.lang === "pt-br" ? res.revalidate(`/blog/pt-br/search`) :
      req.query.lang === "it" ? res.revalidate(`/blog/it/search`) :
      req.query.lang === "cs" ? res.revalidate(`/blog/cs/search`) :
      req.query.lang === "ja" ? res.revalidate(`/blog/ja/search`) :
      req.query.lang === "zh-hans" ? res.revalidate(`/blog/zh-hans/search`) : null,

      req.query.lang === "en" ? res.revalidate(`/blog/onlyoffice-in-the-press`) :
      req.query.lang === "fr" ? res.revalidate(`/blog/fr/onlyoffice-in-the-press`) :
      req.query.lang === "de" ? res.revalidate(`/blog/de/onlyoffice-in-the-press`) :
      req.query.lang === "es" ? res.revalidate(`/blog/es/onlyoffice-in-the-press`) :
      req.query.lang === "pt-br" ? res.revalidate(`/blog/pt-br/onlyoffice-in-the-press`) :
      req.query.lang === "it" ? res.revalidate(`/blog/it/onlyoffice-in-the-press`) :
      req.query.lang === "cs" ? res.revalidate(`/blog/cs/onlyoffice-in-the-press`) :
      req.query.lang === "ja" ? res.revalidate(`/blog/ja/onlyoffice-in-the-press`) :
      req.query.lang === "zh-hans" ? res.revalidate(`/blog/zh-hans/onlyoffice-in-the-press`) : null,

      req.query.lang === "en" ? res.revalidate(`/blog${req.query.path}`) :
      req.query.lang === "fr" ? res.revalidate(`/blog/fr${req.query.path}`) :
      req.query.lang === "de" ? res.revalidate(`/blog/de${req.query.path}`) :
      req.query.lang === "es" ? res.revalidate(`/blog/es${req.query.path}`) :
      req.query.lang === "pt-br" ? res.revalidate(`/blog/pt-br${req.query.path}`) :
      req.query.lang === "it" ? res.revalidate(`/blog/it${req.query.path}`) :
      req.query.lang === "cs" ? res.revalidate(`/blog/cs${req.query.path}`) :
      req.query.lang === "ja" ? res.revalidate(`/blog/ja${req.query.path}`) :
      req.query.lang === "zh-hans" ? res.revalidate(`/blog/zh-hans${req.query.path}`) : null,
      
      req.query.lang === "en" ? res.revalidate(`/blog/author/${post.author.node.slug}`) :
      req.query.lang === "fr" ? res.revalidate(`/blog/fr/author/${post.author.node.slug}`) :
      req.query.lang === "de" ? res.revalidate(`/blog/de/author/${post.author.node.slug}`) :
      req.query.lang === "es" ? res.revalidate(`/blog/es/author/${post.author.node.slug}`) :
      req.query.lang === "pt-br" ? res.revalidate(`/blog/pt-br/author/${post.author.node.slug}`) :
      req.query.lang === "it" ? res.revalidate(`/blog/it/author/${post.author.node.slug}`) :
      req.query.lang === "cs" ? res.revalidate(`/blog/cs/author/${post.author.node.slug}`) :
      req.query.lang === "ja" ? res.revalidate(`/blog/ja/author/${post.author.node.slug}`) :
      req.query.lang === "zh-hans" ? res.revalidate(`/blog/zh-hans/author/${post.author.node.slug}`) : null,

      req.query.lang === "en" ? post.categories.edges.map(node => res.revalidate(`/blog/category/${node.node.slug}`)) :
      req.query.lang === "fr" ? post.categories.edges.map(node => res.revalidate(`/blog/fr/category/${node.node.slug}`)) :
      req.query.lang === "de" ? post.categories.edges.map(node => res.revalidate(`/blog/de/category/${node.node.slug}`)) :
      req.query.lang === "es" ? post.categories.edges.map(node => res.revalidate(`/blog/es/category/${node.node.slug}`)) :
      req.query.lang === "pt-br" ? post.categories.edges.map(node => res.revalidate(`/blog/pt-br/category/${node.node.slug}`)) :
      req.query.lang === "it" ? post.categories.edges.map(node => res.revalidate(`/blog/it/category/${node.node.slug}`)) :
      req.query.lang === "cs" ? post.categories.edges.map(node => res.revalidate(`/blog/cs/category/${node.node.slug}`)) :
      req.query.lang === "ja" ? post.categories.edges.map(node => res.revalidate(`/blog/ja/category/${node.node.slug}`)) :
      req.query.lang === "zh-hans" ? post.categories.edges.map(node => res.revalidate(`/blog/zh-hans/category/${node.node.slug}`)) : null,

      req.query.lang === "en" && post.tags.edges > 0 ? post.tags.edges?.map(node => res.revalidate(`/blog/tag/${node.node.slug}`)) :
      req.query.lang === "fr" && post.tags.edges > 0 ? post.tags.edges?.map(node => res.revalidate(`/blog/tag/${node.node.slug}`)) :
      req.query.lang === "de" && post.tags.edges > 0 ? post.tags.edges?.map(node => res.revalidate(`/blog/tag/${node.node.slug}`)) :
      req.query.lang === "es" && post.tags.edges > 0 ? post.tags.edges?.map(node => res.revalidate(`/blog/tag/${node.node.slug}`)) :
      req.query.lang === "pt-br" && post.tags.edges > 0 ? post.tags.edges?.map(node => res.revalidate(`/blog/tag/${node.node.slug}`)) :
      req.query.lang === "it" && post.tags.edges > 0 ? post.tags.edges?.map(node => res.revalidate(`/blog/tag/${node.node.slug}`)) :
      req.query.lang === "cs" && post.tags.edges > 0 ? post.tags.edges?.map(node => res.revalidate(`/blog/tag/${node.node.slug}`)) :
      req.query.lang === "ja" && post.tags.edges > 0 ? post.tags.edges?.map(node => res.revalidate(`/blog/tag/${node.node.slug}`)) :
      req.query.lang === "zh-hans" && post.tags.edges > 0 ? post.tags.edges?.map(node => res.revalidate(`/blog/tag/${node.node.slug}`)) : null,
		]);

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}