import Head from "next/head";
import { useRouter } from "next/router";

const PostHeadSEO = ({ t, currentLanguage, post, postUri }) => {
  const router = useRouter();
  const baseUrl = "https://www.onlyoffice.com/blog";
  const image = post?.featuredImage?.node.mediaItemUrl === null ? "" : post?.featuredImage?.node.mediaItemUrl;
  const title = post.aioseoTitle !== "" ? post.aioseoTitle.replace("#separator_sa", "|").replace("#post_title", post?.title).replace("#site_title", t("ONLYOFFICE Blog")) : `${post?.title} | ${t("ONLYOFFICE Blog")}`;
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
      <meta property="og:site_name" content={t("SiteName")} />
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

      {
        currentLanguage === "en" &&
        <link rel="alternate" hrefLang="en-US" href={`${baseUrl}${router.asPath}`} />
      }

      {postUri.en_US && <link rel="alternate" hrefLang="en-US" href={`${baseUrl}${postUri.en_US.substring(postUri.en_US.indexOf("teamlab.info")).replace("teamlab.info", "")}`} />}
      {postUri.cs_CZ && <link rel="alternate" hrefLang="cs-CZ" href={`${baseUrl}${postUri.cs_CZ.substring(postUri.cs_CZ.indexOf("teamlab.info")).replace("teamlab.info", "")}`} />}
      {postUri.de_DE && <link rel="alternate" hrefLang="de-DE" href={`${baseUrl}${postUri.de_DE.substring(postUri.de_DE.indexOf("teamlab.info")).replace("teamlab.info", "")}`} />}
      {postUri.es_ES && <link rel="alternate" hrefLang="es-ES" href={`${baseUrl}${postUri.es_ES.substring(postUri.es_ES.indexOf("teamlab.info")).replace("teamlab.info", "")}`} />}
      {postUri.fr_FR && <link rel="alternate" hrefLang="fr-FR" href={`${baseUrl}${postUri.fr_FR.substring(postUri.fr_FR.indexOf("teamlab.info")).replace("teamlab.info", "")}`} />}
      {postUri.it_IT && <link rel="alternate" hrefLang="it-IT" href={`${baseUrl}${postUri.it_IT.substring(postUri.it_IT.indexOf("teamlab.info")).replace("teamlab.info", "")}`} />}
      {postUri.ja && <link rel="alternate" hrefLang="ja" href={`${baseUrl}${postUri.ja.substring(postUri.ja.indexOf("teamlab.info")).replace("teamlab.info", "")}`} />}
      {postUri.pt_BR && <link rel="alternate" hrefLang="pt-BR" href={`${baseUrl}${postUri.pt_BR.substring(postUri.pt_BR.indexOf("teamlab.info")).replace("teamlab.info", "")}`} />}
      {postUri.zh_CN && <link rel="alternate" hrefLang="zh-CN" href={`${baseUrl}${postUri.zh_CN.substring(postUri.zh_CN.indexOf("teamlab.info")).replace("teamlab.info", "")}`} />}

      {
        currentLanguage === "en" ?
          <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${router.asPath}`} />
        :
        postUri.en_US &&
          <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${postUri.en_US.substring(postUri.en_US.indexOf("teamlab.info")).replace("teamlab.info", "")}`} />
      }

      <meta name="google" content="nositelinkssearchbox" />
      <link rel="icon" href="https://static-blog.onlyoffice.com/images/favicon.ico" sizes="192x192" />
      <link rel="apple-touch-icon" href="https://static-blog.onlyoffice.com/images/favicon.ico" />
    </Head>
  );
};

export default PostHeadSEO;