import Head from "next/head";
import languages from "@config/languages.json";

const InThePressHeadSEO = ({ title, metaSiteName, locale, articlePublishedTime, articleModifiedTime }) => {
  const baseUrl = "https://www.onlyoffice.com/blog/";
  const inThePressUrl = `${baseUrl}${locale === "en" ? "" : `${locale}/`}onlyoffice-in-the-press`;
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
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} sizes="192x192" />
      <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} />
    </Head>
  );
};

export default InThePressHeadSEO;