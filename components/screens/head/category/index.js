import Head from "next/head";

const CategoryHead = ({ locale, title, categorySlug }) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog`;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="noindex, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={`${baseUrl}${locale === "en" ? "" : `/${locale}`}/category/${categorySlug}`} />
      <meta name="google" content="nositelinkssearchbox" />
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} sizes="192x192" />
      <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} />
    </Head>
  );
};

export default CategoryHead;