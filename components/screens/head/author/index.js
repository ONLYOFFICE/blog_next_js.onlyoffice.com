import Head from "next/head";

const AuthorHead = ({ title, locale, authorSlug }) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_MAIN_SITE_BASE_DOMAIN}/blog`;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="noindex, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={`${baseUrl}/${locale === "en" ? "" : `${locale}/`}author/${authorSlug}`} />
      <meta name="google" content="nositelinkssearchbox" />
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} sizes="192x192" />
      <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} />
    </Head>
  );
};

export default AuthorHead;