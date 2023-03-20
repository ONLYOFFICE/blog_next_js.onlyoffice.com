import Head from "next/head";

const TagHeadSEO = ({ currentLanguage, title, tagSlug }) => {
  const baseUrl = "https://www.onlyoffice.com/blog/";

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="text/html; charset=UTF-8" />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href={`${baseUrl}${currentLanguage === "en" ? "" : `${currentLanguage}/`}tag/${tagSlug}/`} />
      <link rel="next" href={`${baseUrl}${currentLanguage === "en" ? "" : `${currentLanguage}/`}tag/${tagSlug}/page/2/`} />
      <meta name="google" content="nositelinkssearchbox" />
      <link rel="icon" href="https://www.onlyoffice.com/blog/wp-content/uploads/2021/05/favicon.ico" sizes="192x192" />
      <link rel="apple-touch-icon" href="https://www.onlyoffice.com/blog/wp-content/uploads/2021/05/favicon.ico" />
    </Head>
  );
};

export default TagHeadSEO;