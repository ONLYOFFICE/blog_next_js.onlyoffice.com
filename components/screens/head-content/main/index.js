import Head from "next/head";
import languages from "@config/languages.json";

const MainHeadSEO = ({ title, metaSiteName, metaDescription, locale, articlePublishedTime, articleModifiedTime }) => {
  const baseUrl = "https://www.onlyoffice.com/blog/";
  const baseLocaleUrl = `https://www.onlyoffice.com/blog/${locale === "en" ? "" : locale}`;
  const image = "https://download.onlyoffice.com/assets/fb/fb_icon_325x325.jpg";
  const canonicalUrl = `${baseUrl}${locale === "en" ? "" : locale}`;

  const languagesKey = 
    locale === "fr" ? "fr_FR" : locale === "de" ? "de_DE" :
    locale === "es" ? "es_ES" : locale === "pt-br" ? "pt_BR" : 
    locale === "it" ? "it_IT" : locale === "cs" ? "cs_CZ" :
    locale === "ja" ? "ja_JP" : locale === "zh-hans" ? "zh_CN" : 
    locale === "el" ? "el_GR" : locale === "hi" ? "hi_IN" : 
    locale === "sr" ? "sr_RS" : "en_US";

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="text/html; charset=UTF-8" />

      <meta name="description" content={metaDescription} />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href={canonicalUrl.replace(/\/$/, "")} />
      <link rel="next" href={`${baseUrl}${locale === "en" ? "" : `${locale}/`}page/2/`} />
      <meta property="og:locale" content={languagesKey} />
      <meta property="og:site_name" content={metaSiteName} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={baseLocaleUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="article:published_time" content={`${articlePublishedTime}+00:00`} />
      <meta property="article:modified_time" content={`${articleModifiedTime}+00:00`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    
      {languages.map((lng) => {
        const { key, shortKey } = lng;
        return (
          <link key={key} rel="alternate" hrefLang={key} href={`${baseUrl}${shortKey === "en" ? "" : shortKey}`} />
        );
      })}
      <meta name="google" content="nositelinkssearchbox" />
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} sizes="192x192" />
      <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} />
    </Head>
  );
};

export default MainHeadSEO;