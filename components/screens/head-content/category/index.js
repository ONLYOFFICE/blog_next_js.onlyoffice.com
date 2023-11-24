import Head from "next/head";

const CategoryHeadSEO = ({ locale, title, categorySlug }) => {
  const baseUrl = "https://www.onlyoffice.com/blog/";

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="text/html; charset=UTF-8" />
      <meta name="robots" content="noindex, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={`${baseUrl}${locale === "en" ? "" : `${locale}/`}category/${categorySlug}`} />
      <link rel="next" href={`${baseUrl}${locale === "en" ? "" : `${locale}/`}category/${categorySlug}/page/2/`} />
      <meta name="google" content="nositelinkssearchbox" />
      <link rel="icon" href="https://static-blog.onlyoffice.com/images/favicon.ico" sizes="192x192" />
      <link rel="apple-touch-icon" href="https://static-blog.onlyoffice.com/images/favicon.ico" />
    </Head>
  );
};

export default CategoryHeadSEO;