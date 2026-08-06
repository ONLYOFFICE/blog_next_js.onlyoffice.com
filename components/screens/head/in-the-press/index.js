import Head from "next/head";
import languages from "@config/languages.json";

const InThePressHead = ({ title, locale }) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog`;
  const inThePressUrl = `${baseUrl}${locale === "en" ? "" : `/${locale}`}/onlyoffice-in-the-press`;
  const language = languages.find(lang => lang.shortKey === locale);

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href={inThePressUrl} />
      <meta property="og:locale" content={language?.locale} />
      <meta property="og:site_name" content="ONLYOFFICE Blog" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={inThePressUrl} />
      <meta property="og:image" content="https://download.onlyoffice.com/assets/fb/fb_icon_325x325.jpg" />
      <meta property="og:image:secure_url" content="https://download.onlyoffice.com/assets/fb/fb_icon_325x325.jpg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content="https://download.onlyoffice.com/assets/fb/fb_icon_325x325.jpg" />

      {languages.map((lng) => {
        const { key, shortKey } = lng;
        return (
          <link key={key} rel="alternate" hrefLang={key} href={`${baseUrl}${shortKey === "en" ? "" : `/${shortKey}`}/onlyoffice-in-the-press`} />
        );
      })}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/onlyoffice-in-the-press`} />
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} sizes="192x192" />
      <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} />
    </Head>
  );
};

export default InThePressHead;