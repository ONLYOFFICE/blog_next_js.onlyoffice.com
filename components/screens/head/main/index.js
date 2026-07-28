import Head from "next/head";
import languages from "@config/languages.json";

const MainHead = ({ title, metaDescription, locale }) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_MAIN_SITE_BASE_DOMAIN}/blog`;
  const baseLocaleUrl = `${baseUrl}${locale === "en" ? "" : `/${locale}`}`;
  const image = "https://download.onlyoffice.com/assets/fb/fb_icon_325x325.jpg";
  const language = languages.find(lang => lang.shortKey === locale);

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href={baseLocaleUrl} />
      <meta property="og:locale" content={language?.locale} />
      <meta property="og:site_name" content="ONLYOFFICE Blog" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={baseLocaleUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {languages.map((lng) => {
        const { key, shortKey } = lng;
        return (
          <link key={key} rel="alternate" hrefLang={key} href={`${baseUrl}${shortKey === "en" ? "" : `/${shortKey}`}`} />
        );
      })}
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} sizes="192x192" />
      <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} />
    </Head>
  );
};

export default MainHead;