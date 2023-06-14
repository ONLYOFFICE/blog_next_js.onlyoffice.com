import Head from "next/head";

const PostHeadSEO = ({ title, metaSiteName, currentLanguage, post, enPostLink, csPostLink, dePostLink, esPostLink, frPostLink, itPostLink, jaPostLink, ptPostLink, zhPostLink }) => {
  const baseUrl = "https://www.onlyoffice.com/blog";
  const image = post?.featuredImage?.node.mediaItemUrl === null ? "" : post?.featuredImage?.node.mediaItemUrl;
  const metaDescription = post?.aioseoDescription ? post?.aioseoDescription : "";
  
  const languagesKey = 
    currentLanguage === "fr" ? "fr_FR" : currentLanguage === "de" ? "de_DE" :
    currentLanguage === "es" ? "es_ES" : currentLanguage === "pt-br" ? "pt_BR" : 
    currentLanguage === "it" ? "it_IT" : currentLanguage === "cs" ? "cs_CZ" :
    currentLanguage === "ja" ? "ja_JP" : currentLanguage === "zh-hans" ? "zh_CN" : "en_US";

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="text/html; charset=UTF-8" />
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href={`${baseUrl}${post?.uri}`} />
      <meta property="og:locale" content={languagesKey} />
      <meta property="og:site_name" content={metaSiteName} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={`${baseUrl}${post?.uri}`} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      {
        post?.featuredImage?.node.mediaDetails?.width &&
        <meta property="og:image:width" content={post?.featuredImage?.node.mediaDetails?.width} />
      }
      {
        post?.featuredImage?.node.mediaDetails?.height &&
        <meta property="og:image:height" content={post?.featuredImage?.node.mediaDetails?.height} />
      }
      <meta property="article:published_time" content={`${post?.date}+00:00`} />
      <meta property="article:modified_time" content={`${post?.modifiedGmt}+00:00`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {enPostLink && <link rel="alternate" hrefLang="en-US" href={`${baseUrl}${enPostLink.edges[0].node.uri}`} />}
      {csPostLink && <link rel="alternate" hrefLang="cs-CZ" href={`${baseUrl}${csPostLink.edges[0].node.uri}`} />}
      {dePostLink && <link rel="alternate" hrefLang="de-DE" href={`${baseUrl}${dePostLink.edges[0].node.uri}`} />}
      {esPostLink && <link rel="alternate" hrefLang="es-ES" href={`${baseUrl}${esPostLink.edges[0].node.uri}`} />}
      {frPostLink && <link rel="alternate" hrefLang="fr-FR" href={`${baseUrl}${frPostLink.edges[0].node.uri}`} />}
      {itPostLink && <link rel="alternate" hrefLang="it-IT" href={`${baseUrl}${itPostLink.edges[0].node.uri}`} />}
      {jaPostLink && <link rel="alternate" hrefLang="ja-Jp" href={`${baseUrl}${jaPostLink.edges[0].node.uri}`} />}
      {ptPostLink && <link rel="alternate" hrefLang="pt-BR" href={`${baseUrl}${ptPostLink.edges[0].node.uri}`} />}
      {zhPostLink && <link rel="alternate" hrefLang="zh-CN" href={`${baseUrl}${zhPostLink.edges[0].node.uri}`} />}

      <meta name="google" content="nositelinkssearchbox" />
      <link rel="icon" href="https://static-blog.onlyoffice.com/images/favicon.ico" sizes="192x192" />
      <link rel="apple-touch-icon" href="https://static-blog.onlyoffice.com/images/favicon.ico" />
    </Head>
  );
};

export default PostHeadSEO;