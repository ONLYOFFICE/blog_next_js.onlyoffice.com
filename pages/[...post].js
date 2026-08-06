import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getPostsUri from "@lib/requests/getPostsUri";
import getPostAndMorePosts from "@lib/requests/getPostAndMorePosts";
import isGarbagePath from "@lib/isGarbagePath";

import Layout from "@components/layout";
import PostHead from "@components/screens/head/post";
import Header from "@components/screens/header";
import AdventAnnounce from "@components/screens/advent-announce";
import Footer from "@components/screens/footer";
import PostContent from "@components/screens/post-content";
import languages from "@config/languages.json";

const PostPage = ({ locale, post, posts, postUri }) => {
  const { t } = useTranslation("common");
  const isPostPage = true;

  return (
    <Layout locale={locale}>
      <Layout.PageHead>
        <PostHead
          t={t}
          locale={locale}
          post={post}
          postUri={postUri}
        />
      </Layout.PageHead>
      <AdventAnnounce locale={locale} />
      <Layout.PageHeader>
        <Header t={t} locale={locale} postUri={postUri} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <PostContent t={t} locale={locale} post={post} posts={posts} isPostPage={isPostPage} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer locale={locale} postUri={postUri} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const enPostsSlug = await getPostsUri();
  const frPostsSlug = await getPostsUri("fr");
  const dePostsSlug = await getPostsUri("de");
  const esPostsSlug = await getPostsUri("es");
  const ptPostsSlug = await getPostsUri("pt-br");
  const itPostsSlug = await getPostsUri("it");
  const csPostsSlug = await getPostsUri("cs");
  const jaPostsSlug = await getPostsUri("ja");
  const zhPostsSlug = await getPostsUri("zh-hans");

  const enPosts = enPostsSlug?.edges?.map(({ node }) => ({
    params: { post: node.uri.split(/[/]/).splice(1, 3) },
    locale: "en"
  }));

  const frPosts = frPostsSlug?.edges?.map(({ node }) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "fr"
  }));

  const dePosts = dePostsSlug?.edges?.map(({ node }) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "de"
  }));

  const esPosts = esPostsSlug?.edges?.map(({ node }) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "es"
  }));

  const ptPosts = ptPostsSlug?.edges?.map(({ node }) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "pt-br"
  }));

  const itPosts = itPostsSlug?.edges?.map(({ node }) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "it"
  }));

  const csPosts = csPostsSlug?.edges?.map(({ node }) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "cs"
  }));

  const jaPosts = jaPostsSlug?.edges?.map(({ node }) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "ja"
  }));

  const zhPosts = zhPostsSlug?.edges?.map(({ node }) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "zh-hans"
  }));

  return {
    paths: [...enPosts, ...frPosts, ...dePosts, ...esPosts, ...ptPosts, ...itPosts, ...csPosts, ...jaPosts, ...zhPosts],
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ locale, params }) => {
  const uri = params?.post.join("/");

  // Short-circuit bot/garbage paths (.php probes, traversal, backslashes) to a
  // 404 before they reach WP GraphQL — see lib/isGarbagePath.js.
  if (isGarbagePath(uri)) {
    return {
      notFound: true
    };
  };

  const data = await getPostAndMorePosts(locale, uri);
  // Distinguish transport failure from a genuinely missing post:
  // fetchAPI returns undefined after exhausting retries. Silently returning
  // notFound here would publish a permanent 404 (revalidate: false) for a
  // post that exists. Throw instead: during build Next.js fails the page
  // loudly; at runtime (fallback: blocking) the request gets a 500 and the
  // page is retried on the next visit.
  if (data === undefined) {
    throw new Error(`GraphQL fetch failed for post "${locale}/${uri}"`);
  };

  if (!data?.post) {
    return {
      notFound: true
    };
  };

  const translations = data?.post?.translations || [];
  const postUri = Object.fromEntries(languages.map(({ locale }) => [locale, ""]));

  translations.forEach(({ locale, href }) => {
    const [, query] = href.split("?");
    const hasPParam = query?.split("&").some(param => param.startsWith("p="));

    if (!hasPParam) {
      postUri[locale] = href.split("/").slice(3).join("/").replace(/^\/+/, "").replace(/\/+$/, "");
    }
  });

  const currentLanguage = languages.find(lang => lang.shortKey === locale);

  if (currentLanguage && !postUri[currentLanguage.locale] && data?.post?.uri) {
    postUri[currentLanguage.locale] = data.post.uri.replace(/^\/+/, "").replace(/\/+$/, "");
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      post: data?.post,
      posts: data?.posts,
      postUri
    },
    revalidate: false,
  }
}

export default PostPage;
