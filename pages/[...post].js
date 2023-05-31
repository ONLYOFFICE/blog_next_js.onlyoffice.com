import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getPostsUri, getPostAndMorePosts, getPostPagelink } from "@lib/api";

import Layout from "@components/layout";
import PostHeadSEO from "@components/screens/head-content/post";
import HeadingContent from "@components/screens/heading-content";
import AdventAnnounce from "@components/screens/heading-content/advent-announce";
import Footer from "@components/screens/footer-content";
import PostContent from "@components/screens/post-content";

const Post = ({locale, post, posts, enPostLink, csPostLink, dePostLink, esPostLink, frPostLink, itPostLink, jaPostLink, ptPostLink, zhPostLink}) => {
  const { t } = useTranslation("common");
  const [stateMobile, setStateMobile] = useState(false);
  const isPostContent = true;

  return (
    <Layout>
      <Layout.PageHead>
        <PostHeadSEO
          title={`${post?.title} | ${t("ONLYOFFICE Blog")}`}
          metaSiteName={t("SiteName")}
          currentLanguage={locale}
          post={post}
          enPostLink={enPostLink}
          csPostLink={csPostLink}
          dePostLink={dePostLink}
          esPostLink={esPostLink}
          frPostLink={frPostLink}
          itPostLink={itPostLink}
          jaPostLink={jaPostLink}
          ptPostLink={ptPostLink}
          zhPostLink={zhPostLink}
        />
      </Layout.PageHead>
      <AdventAnnounce t={t} currentLanguage={locale}  stateMobile={stateMobile} />
      <Layout.PageHeader>
        <HeadingContent t={t} currentLanguage={locale} stateMobile={stateMobile} setStateMobile={setStateMobile} />
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
  const enPostLink = await getPostPagelink("", data?.post?.databaseId);
  const csPostLink = await getPostPagelink("cs", data?.post?.databaseId);
  const dePostLink = await getPostPagelink("de", data?.post?.databaseId);
  const esPostLink = await getPostPagelink("es", data?.post?.databaseId);
  const frPostLink = await getPostPagelink("fr", data?.post?.databaseId);
  const itPostLink = await getPostPagelink("it", data?.post?.databaseId);
  const jaPostLink = await getPostPagelink("ja", data?.post?.databaseId);
  const ptPostLink = await getPostPagelink("pt-br", data?.post?.databaseId);
  const zhPostLink = await getPostPagelink("zh-hans", data?.post?.databaseId);

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
      enPostLink: enPostLink?.edges?.length > 0 ? enPostLink : null,
      csPostLink: csPostLink?.edges?.length > 0 ? csPostLink : null,
      dePostLink: dePostLink?.edges?.length > 0 ? dePostLink : null,
      esPostLink: esPostLink?.edges?.length > 0 ? esPostLink : null,
      frPostLink: frPostLink?.edges?.length > 0 ? frPostLink : null,
      itPostLink: itPostLink?.edges?.length > 0 ? itPostLink : null,
      jaPostLink: jaPostLink?.edges?.length > 0 ? jaPostLink : null,
      ptPostLink: ptPostLink?.edges?.length > 0 ? ptPostLink : null,
      zhPostLink: zhPostLink?.edges?.length > 0 ? zhPostLink : null
    },
    revalidate: 10,
  }
}

export default Post;
