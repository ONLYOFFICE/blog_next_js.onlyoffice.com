import Head from "next/head";
import { useRouter } from "next/router";

const PostHeadSEO = ({ t, locale, post, postUri }) => {
  const router = useRouter();
  const baseUrl = "https://www.onlyoffice.com/blog";
  const image = post?.featuredImage?.node.mediaItemUrl === null ? "" : post?.featuredImage?.node.mediaItemUrl;
  const postAioseoTitle = post.aioseoTitle ? post.aioseoTitle.replace("#separator_sa", "|").replace("#post_title", post?.title).replace("#site_title", t("ONLYOFFICE Blog")) : "";
  const title = post.aioseoTitle ? 
    locale === "ar" ? `${postAioseoTitle.split(" | ")[1]} | ${postAioseoTitle.split(" | ")[0]}` : postAioseoTitle : 
    locale === "ar" ? `${t("ONLYOFFICE Blog")} | ${post?.title}` : `${post?.title} | ${t("ONLYOFFICE Blog")}`;
  const metaDescription = post?.aioseoDescription ? post?.aioseoDescription : "";

  const languagesKey = 
    locale === "fr" ? "fr_FR" : locale === "de" ? "de_DE" :
    locale === "es" ? "es_ES" : locale === "pt-br" ? "pt_BR" : 
    locale === "it" ? "it_IT" : locale === "cs" ? "cs_CZ" :
    locale === "ja" ? "ja_JP" : locale === "zh-hans" ? "zh_CN" : 
    locale === "el" ? "el_GR" : locale === "hi" ? "hi_IN" : 
    locale === "ar" ? "ar_AR" : locale === "sr" ? "sr_RS" : 
    locale === "hy" ? "hy_AM" :  "en_US";

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="text/html; charset=UTF-8" />
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href={`${baseUrl}${post?.uri.replace(/\/$/, "")}`} />
      <meta property="og:locale" content={languagesKey} />
      <meta property="og:site_name" content="ONLYOFFICE Blog" />
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
        locale === "en" &&
        <link rel="alternate" hrefLang="en-US" href={`${baseUrl}${router.asPath}`} />
      }

      {postUri.en_US && <link rel="alternate" hrefLang="en-US" href={`${baseUrl}/${postUri.en_US.split("/").slice(3).join("/")}`} />}
      {postUri.cs_CZ && <link rel="alternate" hrefLang="cs-CZ" href={`${baseUrl}/${postUri.cs_CZ.split("/").slice(3).join("/")}`} />}
      {postUri.de_DE && <link rel="alternate" hrefLang="de-DE" href={`${baseUrl}/${postUri.de_DE.split("/").slice(3).join("/")}`} />}
      {postUri.es_ES && <link rel="alternate" hrefLang="es-ES" href={`${baseUrl}/${postUri.es_ES.split("/").slice(3).join("/")}`} />}
      {postUri.fr_FR && <link rel="alternate" hrefLang="fr-FR" href={`${baseUrl}/${postUri.fr_FR.split("/").slice(3).join("/")}`} />}
      {postUri.it_IT && <link rel="alternate" hrefLang="it-IT" href={`${baseUrl}/${postUri.it_IT.split("/").slice(3).join("/")}`} />}
      {postUri.ja && <link rel="alternate" hrefLang="ja-JP" href={`${baseUrl}/${postUri.ja.split("/").slice(3).join("/")}`} />}
      {postUri.pt_BR && <link rel="alternate" hrefLang="pt-BR" href={`${baseUrl}/${postUri.pt_BR.split("/").slice(3).join("/")}`} />}
      {postUri.zh_CN && <link rel="alternate" hrefLang="zh-CN" href={`${baseUrl}/${postUri.zh_CN.split("/").slice(3).join("/")}`} />}

      {
        locale === "en" ?
          <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${router.asPath}`} />
        :
        postUri.en_US &&
          <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/${postUri.en_US.split("/").slice(3).join("/")}`} />
      }

      <meta name="google" content="nositelinkssearchbox" />
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} sizes="192x192" />
      <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} />
    </Head>
  );
};

export default PostHeadSEO;