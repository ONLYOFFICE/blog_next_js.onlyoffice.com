import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getPostsUri from "@lib/requests/getPostsUri";
import getPostAndMorePosts from "@lib/requests/getPostAndMorePosts";

import Layout from "@components/layout";
import PostHead from "@components/screens/head/post";
import Header from "@components/screens/header";
import AdventAnnounce from "@components/screens/advent-announce";
import Footer from "@components/screens/footer";
import PostContent from "@components/screens/post-content";
import languages from "@config/languages.json";

const PostPage = ({ locale, post, posts }) => {
  const { t } = useTranslation("common");
  const isPostPage = true;

  const [postUri, setPostUri] = useState(
    Object.fromEntries(languages.map(({ locale }) => [locale, ""]))
  );

  useEffect(() => {
    const translations = post?.translations || [];
    const uri = {};

    translations.forEach(({ locale, href }) => {
      const [, query] = href.split("?");
      const hasPParam = query?.split("&").some(param => param.startsWith("p="));

      if (!hasPParam) {
        uri[locale] = href;
      }
    });

    setPostUri(uri);
  }, [post]);

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
  const data = await getPostAndMorePosts(locale, params?.post.join("/"));

  if (!data?.post) {
    return {
      notFound: true
    };
  };

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      post: data?.post,
      posts: data?.posts
    },
    revalidate: false,
  }
}

export default PostPage;
