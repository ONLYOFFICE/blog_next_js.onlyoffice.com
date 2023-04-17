import Head from "next/head";

const PostHeadSEO = ({ title, metaSiteName, metaDescription, currentLanguage, post, enPostLink, csPostLink, dePostLink, esPostLink, frPostLink, itPostLink, jaPostLink, ptPostLink, zhPostLink }) => {
  const image = post?.featuredImage?.node.mediaItemUrl === null ? "" : post?.featuredImage?.node.mediaItemUrl;
  
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
      <link rel="canonical" href={post?.link} />
      <meta property="og:locale" content={languagesKey} />
      <meta property="og:site_name" content={metaSiteName} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={post?.link} />
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
    
      {enPostLink.edges.length > 0 && <link rel="alternate" hrefLang="en-US" href={enPostLink.edges[0]?.node.link} />}
      {csPostLink.edges.length > 0 && <link rel="alternate" hrefLang="cs-CZ" href={csPostLink.edges[0]?.node.link} />}
      {dePostLink.edges.length > 0 && <link rel="alternate" hrefLang="de-DE" href={dePostLink.edges[0]?.node.link} />}
      {esPostLink.edges.length > 0 && <link rel="alternate" hrefLang="es-ES" href={esPostLink.edges[0]?.node.link} />}
      {frPostLink.edges.length > 0 && <link rel="alternate" hrefLang="fr-FR" href={frPostLink.edges[0]?.node.link} />}
      {itPostLink.edges.length > 0 && <link rel="alternate" hrefLang="it-IT" href={itPostLink.edges[0]?.node.link} />}
      {jaPostLink.edges.length > 0 && <link rel="alternate" hrefLang="ja-Jp" href={jaPostLink.edges[0]?.node.link} />}
      {ptPostLink.edges.length > 0 && <link rel="alternate" hrefLang="pt-BR" href={ptPostLink.edges[0]?.node.link} />}
      {zhPostLink.edges.length > 0 && <link rel="alternate" hrefLang="zh-CN" href={zhPostLink.edges[0]?.node.link} />}

      <meta name="google" content="nositelinkssearchbox" />
      <link rel="icon" href="https://www.onlyoffice.com/blog/wp-content/uploads/2021/05/favicon.ico" sizes="192x192" />
      <link rel="apple-touch-icon" href="https://www.onlyoffice.com/blog/wp-content/uploads/2021/05/favicon.ico" />
    </Head>
  );
};

export default PostHeadSEO;