import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getPostsUri, getPostAndMorePosts, getPostPageUri } from "@lib/api";

import Layout from "@components/layout";
import PostHeadSEO from "@components/screens/head-content/post";
import HeadingContent from "@components/screens/heading-content";
import AdventAnnounce from "@components/screens/heading-content/advent-announce";
import Footer from "@components/screens/footer-content";
import PostContent from "@components/screens/post-content";

const Post = ({ locale, post, posts, enPostUri, csPostUri, dePostUri, esPostUri, frPostUri, itPostUri, jaPostUri, ptPostUri, zhPostUri }) => {
  const { t } = useTranslation("common");
  const [stateMobile, setStateMobile] = useState(false);
  const alternatePostUri = { enPostUri, csPostUri, dePostUri, esPostUri, frPostUri, itPostUri, jaPostUri, ptPostUri, zhPostUri };
  const isPostContent = true;

  return (
    <Layout>
      <Layout.PageHead>
        <PostHeadSEO
          title={`${post?.title} | ${t("ONLYOFFICE Blog")}`}
          metaSiteName={t("SiteName")}
          currentLanguage={locale}
          post={post}
          alternatePostUri={alternatePostUri}
        />
      </Layout.PageHead>
      <AdventAnnounce t={t} currentLanguage={locale} stateMobile={stateMobile} />
      <Layout.PageHeader>
        <HeadingContent 
          t={t}
          currentLanguage={locale} 
          stateMobile={stateMobile} 
          setStateMobile={setStateMobile} 
          alternatePostUri={alternatePostUri} 
          isPostContent={isPostContent}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <PostContent t={t} currentLanguage={locale} post={post} posts={posts} isPostContent={isPostContent} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
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
  const data = await getPostAndMorePosts(locale, params?.post.join("/"));
  const enPostUri = await getPostPageUri("", data?.post?.databaseId);
  const csPostUri = await getPostPageUri("cs", data?.post?.databaseId);
  const dePostUri = await getPostPageUri("de", data?.post?.databaseId);
  const esPostUri = await getPostPageUri("es", data?.post?.databaseId);
  const frPostUri = await getPostPageUri("fr", data?.post?.databaseId);
  const itPostUri = await getPostPageUri("it", data?.post?.databaseId);
  const jaPostUri = await getPostPageUri("ja", data?.post?.databaseId);
  const ptPostUri = await getPostPageUri("pt-br", data?.post?.databaseId);
  const zhPostUri = await getPostPageUri("zh-hans", data?.post?.databaseId);

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
      posts: data?.posts,
      enPostUri: enPostUri?.edges?.length > 0 ? enPostUri : null,
      csPostUri: csPostUri?.edges?.length > 0 ? csPostUri : null,
      dePostUri: dePostUri?.edges?.length > 0 ? dePostUri : null,
      esPostUri: esPostUri?.edges?.length > 0 ? esPostUri : null,
      frPostUri: frPostUri?.edges?.length > 0 ? frPostUri : null,
      itPostUri: itPostUri?.edges?.length > 0 ? itPostUri : null,
      jaPostUri: jaPostUri?.edges?.length > 0 ? jaPostUri : null,
      ptPostUri: ptPostUri?.edges?.length > 0 ? ptPostUri : null,
      zhPostUri: zhPostUri?.edges?.length > 0 ? zhPostUri : null
    },
    revalidate:false,
  }
}

export default Post;
