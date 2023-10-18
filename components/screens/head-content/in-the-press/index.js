import Head from "next/head";
import languages from "@config/languages.json";

const InThePressHeadSEO = ({ title, metaSiteName, currentLanguage, articlePublishedTime, articleModifiedTime }) => {
  const baseUrl = "https://www.onlyoffice.com/blog/";
  const inThePressUrl = `${baseUrl}${currentLanguage === "en" ? "" : `${currentLanguage}/`}onlyoffice-in-the-press`;
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
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href={inThePressUrl} />
      <meta property="og:locale" content={languagesKey} />
      <meta property="og:site_name" content={metaSiteName} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={inThePressUrl} />
      <meta property="og:image" content="https://download.onlyoffice.com/assets/fb/fb_icon_325x325.jpg" />
      <meta property="og:image:secure_url" content="https://download.onlyoffice.com/assets/fb/fb_icon_325x325.jpg" />
      <meta property="article:published_time" content={`${articlePublishedTime}+00:00`} />
      <meta property="article:modified_time" content={`${articleModifiedTime}+00:00`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content="https://download.onlyoffice.com/assets/fb/fb_icon_325x325.jpg" />

      {languages.map((lng) => {
        const { key, shortKey } = lng;
        return (
          <link key={key} rel="alternate" hrefLang={key} href={`${baseUrl}${shortKey === "en" ? "" : `${shortKey}/`}onlyoffice-in-the-press/`} />
        );
      })}

      <meta name="google" content="nositelinkssearchbox" />
      <link rel="icon" href="https://static-blog.onlyoffice.com/images/favicon.ico" sizes="192x192" />
      <link rel="apple-touch-icon" href="https://static-blog.onlyoffice.com/images/favicon.ico" />
    </Head>
  );
};

export default InThePressHeadSEO;