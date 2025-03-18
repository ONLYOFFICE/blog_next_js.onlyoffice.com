import Head from "next/head";
import languages from "@config/languages.json";

const InThePressHead = ({ title, locale, articlePublishedTime, articleModifiedTime }) => {
  const baseUrl = "https://www.onlyoffice.com/blog/";
  const inThePressUrl = `${baseUrl}${locale === "en" ? "" : `${locale}/`}onlyoffice-in-the-press`;
  const language = languages.find(lang => lang.shortKey === locale);

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href={inThePressUrl} />
      <meta property="og:locale" content={language?.locale} />
      <meta property="og:site_name" content="ONLYOFFICE Blog" />
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

export default InThePressHead;