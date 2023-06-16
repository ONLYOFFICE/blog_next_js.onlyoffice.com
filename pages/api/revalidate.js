import { getRevalidatePost } from "@lib/api";

export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const post = await getRevalidatePost(req.query.lang, req.query.path);

    await Promise.all(
      req.query.lang === "en" ? [
        res.revalidate(`/blog`),
        res.revalidate(`/blog/search`),
        res.revalidate(`/blog/onlyoffice-in-the-press`),
        res.revalidate(`/blog${req.query.path}`),
        post && res.revalidate(`/blog/author/${post.author.node.slug}`),
        post && post.categories.edges.map(node => res.revalidate(`/blog/category/${node.node.slug}`)),
        post && post.tags.edges?.map(node => res.revalidate(`/blog/tag/${node.node.slug}`)),
        req.query.category !== undefined && typeof req.query.category === "object" ? req.query.category.map(node => res.revalidate(`/blog/category/${node}`)) : res.revalidate(`/blog/category/${req.query.category}`),
        req.query.author !== undefined && typeof req.query.author === "object" ? req.query.author.map(node => res.revalidate(`/blog/author/${node}`)) : res.revalidate(`/blog/author/${req.query.author}`),
        req.query.tag !== undefined && typeof req.query.author === "object" ? req.query.tag.map(node => res.revalidate(`/blog/tag/${node}`)) : res.revalidate(`/blog/tag/${req.query.tag}`),
      ] : 
      req.query.lang === "fr" ? [
        res.revalidate(`/blog/fr`),
        res.revalidate(`/blog/fr/search`),
        res.revalidate(`/blog/fr/onlyoffice-in-the-press`),
        res.revalidate(`/blog/fr${req.query.path}`),
        post && res.revalidate(`/blog/fr/author/${post.author.node.slug}`),
        post && post.categories.edges.map(node => res.revalidate(`/blog/fr/category/${node.node.slug}`)),
        post && post.tags.edges?.map(node => res.revalidate(`/blog/fr/tag/${node.node.slug}`)),
        req.query.category !== undefined && typeof req.query.category === "object" ? req.query.category.map(node => res.revalidate(`/blog/fr/category/${node}`)) : res.revalidate(`/blog/fr/category/${req.query.category}`),
        req.query.author !== undefined && typeof req.query.author === "object" ? req.query.author.map(node => res.revalidate(`/blog/fr/author/${node}`)) : res.revalidate(`/blog/fr/author/${req.query.author}`),
        req.query.tag !== undefined && typeof req.query.author === "object" ? req.query.tag.map(node => res.revalidate(`/blog/fr/tag/${node}`)) : res.revalidate(`/blog/fr/tag/${req.query.tag}`),
      ] : 
      req.query.lang === "de" ? [
        res.revalidate(`/blog/de`),
        res.revalidate(`/blog/de/search`),
        res.revalidate(`/blog/de/onlyoffice-in-the-press`),
        res.revalidate(`/blog/de${req.query.path}`),
        post && res.revalidate(`/blog/de/author/${post.author.node.slug}`),
        post && post.categories.edges.map(node => res.revalidate(`/blog/de/category/${node.node.slug}`)),
        post && post.tags.edges?.map(node => res.revalidate(`/blog/de/tag/${node.node.slug}`)),
        req.query.category !== undefined && typeof req.query.category === "object" ? req.query.category.map(node => res.revalidate(`/blog/de/category/${node}`)) : res.revalidate(`/blog/de/category/${req.query.category}`),
        req.query.author !== undefined && typeof req.query.author === "object" ? req.query.author.map(node => res.revalidate(`/blog/de/author/${node}`)) : res.revalidate(`/blog/de/author/${req.query.author}`),
        req.query.tag !== undefined && typeof req.query.author === "object" ? req.query.tag.map(node => res.revalidate(`/blog/de/tag/${node}`)) : res.revalidate(`/blog/de/tag/${req.query.tag}`),
      ] : 
      req.query.lang === "es" ? [
        res.revalidate(`/blog/es`),
        res.revalidate(`/blog/es/search`),
        res.revalidate(`/blog/es/onlyoffice-in-the-press`),
        res.revalidate(`/blog/es${req.query.path}`),
        post && res.revalidate(`/blog/es/author/${post.author.node.slug}`),
        post && post.categories.edges.map(node => res.revalidate(`/blog/es/category/${node.node.slug}`)),
        post && post.tags.edges?.map(node => res.revalidate(`/blog/es/tag/${node.node.slug}`)),
        req.query.category !== undefined && typeof req.query.category === "object" ? req.query.category.map(node => res.revalidate(`/blog/es/category/${node}`)) : res.revalidate(`/blog/es/category/${req.query.category}`),
        req.query.author !== undefined && typeof req.query.author === "object" ? req.query.author.map(node => res.revalidate(`/blog/es/author/${node}`)) : res.revalidate(`/blog/es/author/${req.query.author}`),
        req.query.tag !== undefined && typeof req.query.author === "object" ? req.query.tag.map(node => res.revalidate(`/blog/es/tag/${node}`)) : res.revalidate(`/blog/es/tag/${req.query.tag}`),
      ] : 
      req.query.lang === "pt-br" ? [
        res.revalidate(`/blog/pt-br`),
        res.revalidate(`/blog/pt-br/search`),
        res.revalidate(`/blog/pt-br/onlyoffice-in-the-press`),
        res.revalidate(`/blog/pt-br${req.query.path}`),
        post && res.revalidate(`/blog/pt-br/author/${post.author.node.slug}`),
        post && post.categories.edges.map(node => res.revalidate(`/blog/pt-br/category/${node.node.slug}`)),
        post && post.tags.edges?.map(node => res.revalidate(`/blog/pt-br/tag/${node.node.slug}`)),
        req.query.category !== undefined && typeof req.query.category === "object" ? req.query.category.map(node => res.revalidate(`/blog/pt-br/category/${node}`)) : res.revalidate(`/blog/pt-br/category/${req.query.category}`),
        req.query.author !== undefined && typeof req.query.author === "object" ? req.query.author.map(node => res.revalidate(`/blog/pt-br/author/${node}`)) : res.revalidate(`/blog/pt-br/author/${req.query.author}`),
        req.query.tag !== undefined && typeof req.query.author === "object" ? req.query.tag.map(node => res.revalidate(`/blog/pt-br/tag/${node}`)) : res.revalidate(`/blog/pt-br/tag/${req.query.tag}`),
      ] : 
      req.query.lang === "it" ? [
        res.revalidate(`/blog/it`),
        res.revalidate(`/blog/it/search`),
        res.revalidate(`/blog/it/onlyoffice-in-the-press`),
        res.revalidate(`/blog/it${req.query.path}`),
        post && res.revalidate(`/blog/it/author/${post.author.node.slug}`),
        post && post.categories.edges.map(node => res.revalidate(`/blog/it/category/${node.node.slug}`)),
        post && post.tags.edges?.map(node => res.revalidate(`/blog/it/tag/${node.node.slug}`)),
        req.query.category !== undefined && typeof req.query.category === "object" ? req.query.category.map(node => res.revalidate(`/blog/it/category/${node}`)) : res.revalidate(`/blog/it/category/${req.query.category}`),
        req.query.author !== undefined && typeof req.query.author === "object" ? req.query.author.map(node => res.revalidate(`/blog/it/author/${node}`)) : res.revalidate(`/blog/it/author/${req.query.author}`),
        req.query.tag !== undefined && typeof req.query.author === "object" ? req.query.tag.map(node => res.revalidate(`/blog/it/tag/${node}`)) : res.revalidate(`/blog/it/tag/${req.query.tag}`),
      ] : 
      req.query.lang === "cs" ? [
        res.revalidate(`/blog/cs`),
        res.revalidate(`/blog/cs/search`),
        res.revalidate(`/blog/cs/onlyoffice-in-the-press`),
        res.revalidate(`/blog/cs${req.query.path}`),
        post && res.revalidate(`/blog/cs/author/${post.author.node.slug}`),
        post && post.categories.edges.map(node => res.revalidate(`/blog/cs/category/${node.node.slug}`)),
        post && post.tags.edges?.map(node => res.revalidate(`/blog/cs/tag/${node.node.slug}`)),
        req.query.category !== undefined && typeof req.query.category === "object" ? req.query.category.map(node => res.revalidate(`/blog/cs/category/${node}`)) : res.revalidate(`/blog/cs/category/${req.query.category}`),
        req.query.author !== undefined && typeof req.query.author === "object" ? req.query.author.map(node => res.revalidate(`/blog/cs/author/${node}`)) : res.revalidate(`/blog/cs/author/${req.query.author}`),
        req.query.tag !== undefined && typeof req.query.author === "object" ? req.query.tag.map(node => res.revalidate(`/blog/cs/tag/${node}`)) : res.revalidate(`/blog/cs/tag/${req.query.tag}`),
      ] : 
      req.query.lang === "ja" ? [
        res.revalidate(`/blog/ja`),
        res.revalidate(`/blog/ja/search`),
        res.revalidate(`/blog/ja/onlyoffice-in-the-press`),
        res.revalidate(`/blog/ja${req.query.path}`),
        post && res.revalidate(`/blog/ja/author/${post.author.node.slug}`),
        post && post.categories.edges.map(node => res.revalidate(`/blog/ja/category/${node.node.slug}`)),
        post && post.tags.edges?.map(node => res.revalidate(`/blog/ja/tag/${node.node.slug}`)),
        req.query.category !== undefined && typeof req.query.category === "object" ? req.query.category.map(node => res.revalidate(`/blog/ja/category/${node}`)) : res.revalidate(`/blog/ja/category/${req.query.category}`),
        req.query.author !== undefined && typeof req.query.author === "object" ? req.query.author.map(node => res.revalidate(`/blog/ja/author/${node}`)) : res.revalidate(`/blog/ja/author/${req.query.author}`),
        req.query.tag !== undefined && typeof req.query.author === "object" ? req.query.tag.map(node => res.revalidate(`/blog/ja/tag/${node}`)) : res.revalidate(`/blog/ja/tag/${req.query.tag}`),
      ] : 
      req.query.lang === "zh-hans" ? [
        res.revalidate(`/blog/zh-hans`),
        res.revalidate(`/blog/zh-hans/search`),
        res.revalidate(`/blog/zh-hans/onlyoffice-in-the-press`),
        res.revalidate(`/blog/zh-hans${req.query.path}`),
        post && res.revalidate(`/blog/zh-hans/author/${post.author.node.slug}`),
        post && post.categories.edges.map(node => res.revalidate(`/blog/zh-hans/category/${node.node.slug}`)),
        post && post.tags.edges?.map(node => res.revalidate(`/blog/zh-hans/tag/${node.node.slug}`)),
        req.query.category !== undefined && typeof req.query.category === "object" ? req.query.category.map(node => res.revalidate(`/blog/zh-hans/category/${node}`)) : res.revalidate(`/blog/zh-hans/category/${req.query.category}`),
        req.query.author !== undefined && typeof req.query.author === "object" ? req.query.author.map(node => res.revalidate(`/blog/zh-hans/author/${node}`)) : res.revalidate(`/blog/zh-hans/author/${req.query.author}`),
        req.query.tag !== undefined && typeof req.query.author === "object" ? req.query.tag.map(node => res.revalidate(`/blog/zh-hans/tag/${node}`)) : res.revalidate(`/blog/zh-hans/tag/${req.query.tag}`),
      ] : null
		);

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}