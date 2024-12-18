import Head from "next/head";

const CategoryHead = ({ locale, title, categorySlug }) => {
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
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} sizes="192x192" />
      <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} />
    </Head>
  );
};

export default CategoryHead;