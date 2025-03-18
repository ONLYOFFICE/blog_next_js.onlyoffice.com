import Head from "next/head";
import { useRouter } from "next/router";
import HTMLReactParser from "html-react-parser";
import languages from "@config/languages.json";

const PostHead = ({ t, locale, post, postUri }) => {
  const router = useRouter();
  const baseUrl = "https://www.onlyoffice.com/blog";
  const image = post?.featuredImage?.node.mediaItemUrl === null ? "" : post?.featuredImage?.node.mediaItemUrl;
  const title = post.aioseoTitle ? post.aioseoTitle : locale === "ar" ? `${t("ONLYOFFICE Blog")} | ${post?.title}` : `${post?.title} | ${t("ONLYOFFICE Blog")}`;
  const metaDescription = post?.aioseoDescription ? post?.aioseoDescription : HTMLReactParser(post?.excerpt)[0]?.props?.children;
  const language = languages.find(lang => lang.shortKey === locale);

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="text/html; charset=UTF-8" />
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href={`${baseUrl}${post?.uri.replace(/\/$/, "")}`} />
      <meta property="og:locale" content={language?.locale} />
      <meta property="og:site_name" content="ONLYOFFICE Blog" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={`${baseUrl}${post?.uri}`} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      {post?.featuredImage?.node.mediaDetails?.width && (
        <meta property="og:image:width" content={post?.featuredImage?.node.mediaDetails?.width} />
      )}
      {post?.featuredImage?.node.mediaDetails?.height && (
        <meta property="og:image:height" content={post?.featuredImage?.node.mediaDetails?.height} />
      )}
      <meta property="article:published_time" content={`${post?.date}+00:00`} />
      <meta property="article:modified_time" content={`${post?.modifiedGmt}+00:00`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {locale === "en" && (
        <link rel="alternate" hrefLang="en-US" href={`${baseUrl}${router.asPath}`} />
      )}

      {languages.map(({ key, locale }) =>
        postUri[locale] ? (
          <link
            key={key}
            rel="alternate"
            hrefLang={key}
            href={`${baseUrl}/${postUri[locale].split("/").slice(3).join("/")}`}
          />
        ) : null
      )}

      {locale === "en" ? (
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${router.asPath}`} />
      ) : postUri.en_US && (
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/${postUri.en_US.split("/").slice(3).join("/")}`} />
      )}

      <meta name="google" content="nositelinkssearchbox" />
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} sizes="192x192" />
      <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_STATIC_URL}/images/favicon.ico`} />
    </Head>
  );
};

export default PostHead;