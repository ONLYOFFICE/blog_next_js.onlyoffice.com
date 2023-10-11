import Head from "next/head";
import languages from "@config/languages.json";

const AuthorHeadSEO = ({ title, currentLanguage, authorSlug }) => {
  const baseUrl = "https://www.onlyoffice.com/blog/";

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="text/html; charset=UTF-8" />
      <meta name="robots" content="noindex, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={`${baseUrl}${currentLanguage === "en" ? "" : `${currentLanguage}/`}author/${authorSlug}`} />
      <link rel="next" href={`${baseUrl}${currentLanguage === "en" ? "" : `${currentLanguage}/`}author/${authorSlug}/page/2/`} />
      {
        languages.map((lng) => {
          const { key, shortKey } = lng;
          return (
            <link key={key} rel="alternate" hrefLang={key} href={`${baseUrl}${shortKey === "en" ? "" : `${shortKey}/`}${`author/${authorSlug}`}`} />
          );
        })
      }
      <meta name="google" content="nositelinkssearchbox" />
      <link rel="icon" href="https://static-blog.onlyoffice.com/images/favicon.ico" sizes="192x192" />
      <link rel="apple-touch-icon" href="https://static-blog.onlyoffice.com/images/favicon.ico" />
    </Head>
  );
};

export default AuthorHeadSEO;