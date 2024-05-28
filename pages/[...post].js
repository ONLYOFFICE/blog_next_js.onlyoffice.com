import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getPostsUri from "@lib/requests/getPostsUri";
import getPostAndMorePosts from "@lib/requests/getPostAndMorePosts";

import Layout from "@components/layout";
import PostHeadSEO from "@components/screens/head-content/post";
import HeadingContent from "@components/screens/heading-content";
import AdventAnnounce from "@components/screens/heading-content/advent-announce";
import Footer from "@components/screens/footer-content";
import PostContent from "@components/screens/post-content";

const Post = ({ locale, post, posts }) => {
  const { t } = useTranslation("common");
  const [stateMobile, setStateMobile] = useState(false);
  const isPostContent = true;

  const [postUri, setPostUri] = useState({
    en_US: "",
    fr_FR: "",
    de_DE: "",
    es_ES: "",
    pt_BR: "",
    it_IT: "",
    cs_CZ: "",
    ja: "",
    zh_CN: "",
    el: "",
    hi: "",
    ar: "",
    sr_RS: "",
    hy: ""
  });

  useEffect(() => {
    const translations = post?.translations || [];
    const uri = {};

    translations.forEach(translation => {
      uri[translation.locale] = translation.href;
    });

    setPostUri(uri);
  }, [post]);

  return (
    <Layout locale={locale}>
      <Layout.PageHead>
        <PostHeadSEO
          t={t}
          locale={locale}
          post={post}
          postUri={postUri}
        />
      </Layout.PageHead>
      <AdventAnnounce t={t} locale={locale} stateMobile={stateMobile} />
      <Layout.PageHeader>
        <HeadingContent 
          t={t}
          locale={locale} 
          stateMobile={stateMobile} 
          setStateMobile={setStateMobile} 
          postUri={postUri}
          isPostContent={isPostContent}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <PostContent t={t} locale={locale} post={post} posts={posts} isPostContent={isPostContent} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} locale={locale} />
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

  const enPosts = enPostsSlug?.edges?.map(({node}) => ({
    params: { post: node.uri.split(/[/]/).splice(1, 3) },
    locale: "en"
  }));

  const frPosts = frPostsSlug?.edges?.map(({node}) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "fr"
  }));

  const dePosts = dePostsSlug?.edges?.map(({node}) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "de"
  }));

  const esPosts = esPostsSlug?.edges?.map(({node}) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "es"
  }));

  const ptPosts = ptPostsSlug?.edges?.map(({node}) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "pt-br"
  }));

  const itPosts = itPostsSlug?.edges?.map(({node}) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "it"
  }));

  const csPosts = csPostsSlug?.edges?.map(({node}) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "cs"
  }));

  const jaPosts = jaPostsSlug?.edges?.map(({node}) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "ja"
  }));

  const zhPosts = zhPostsSlug?.edges?.map(({node}) => ({
    params: { post: node.uri.split(/[/]/).splice(2, 3) },
    locale: "zh-hans"
  }));

  return {
    paths: [...enPosts, ...frPosts, ...dePosts, ...esPosts, ...ptPosts, ...itPosts, ...csPosts, ...jaPosts, ...zhPosts],
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ locale, params }) => {
  const data = await getPostAndMorePosts(locale, params?.post.join("/"), locale === "zh-hans" ? "zh" : locale === "pt-br" ? "pt" : locale);

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
    revalidate:false,
  }
}

export default Post;
