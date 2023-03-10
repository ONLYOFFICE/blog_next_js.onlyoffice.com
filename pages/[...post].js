import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAllPostsWithUri, getPostAndMorePosts } from '../lib/api';

import Layout from "@components/layout";
import HeadSEO from "@components/screens/head-content";
import HeadingContent from "@components/screens/heading-content";
import AdventAnnounce from "@components/screens/heading-content/advent-announce";
import Footer from "@components/screens/footer-content";
import PostContent from "@components/screens/post-content";

const Post = ({locale, post, posts}) => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={`${post.title} | ${t("ONLYOFFICE Blog")}`}
          metaSiteNameOg={`${post.title} | ${t("ONLYOFFICE Blog")}`}
          metaDescription={t("titleIndexPage")}
          metaDescriptionOg={t("metaDescriptionOgIndexPage")}
          metaKeywords={t("metaKeywordsIndexPage")}
        />
      </Layout.PageHead>
      <AdventAnnounce t={t} currentLanguage={locale} />
      <Layout.PageHeader>
        <HeadingContent t={t} currentLanguage={locale} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <PostContent t={t} currentLanguage={locale} post={post} posts={posts} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticPaths = async ({ locales }) => {
  const posts = await getAllPostsWithUri("all");
  const postsEnLocale = await getAllPostsWithUri();

  const languages = ["/fr/", "/de/", "/es/", "/pt-br/", "/it/", "/cs/", "/ja/", "/zh-hans/"]

  const postsWihoutEnLocale = posts.edges.filter(({node}) => languages.some(el => node.uri.includes(el)));

  const uriWithoutEnLocale = locales.map((locale) => {
    return postsWihoutEnLocale.map(({node}) => {
      return {
        params: {
          post: node.uri.split(/[/]/).splice(2, 3)
        }, 
        locale
      }
    });
  }).flat();

  const uriEnLocale = postsEnLocale.edges.map(({node}) => ({
    params: {
      post: node.uri.split(/[/]/).splice(1, 3)
    },
    locale: "en"
  }));

  return {
    paths: [...uriWithoutEnLocale, ...uriEnLocale],
    fallback: false,
  }
}

export const getStaticProps = async ({ locale, params }) => {
  const data = await getPostAndMorePosts(locale, params?.post.join("/"));

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      post: data.post,
      posts: data.posts
    },
    revalidate: 10,
  }
}

export default Post;