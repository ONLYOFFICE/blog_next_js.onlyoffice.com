import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAuthorSlug, getAuthorPosts } from "@lib/api";

import Layout from "@components/layout";
import AuthorHeadSEO from "@components/screens/head-content/author";
import HeadingContent from "@components/screens/heading-content";
import Footer from "@components/screens/footer-content";
import AuthorContent from "@components/screens/author-content";

const Author = ({ locale, posts }) => {
  const { t } = useTranslation("common");
  const isAuthorContent = true;
  const authorName = posts?.edges[0]?.node.author?.node?.name;
  const authorSlug = posts?.edges[0]?.node.author?.node?.slug;

  return (
    <Layout>
      <Layout.PageHead>
        <AuthorHeadSEO
          currentLanguage={locale}
          title={`${authorName} | ${t("ONLYOFFICE Blog")}`}
          authorSlug={authorSlug}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} currentLanguage={locale} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <AuthorContent t={t} currentLanguage={locale} posts={posts} isAuthorContent={isAuthorContent} authorName={authorName} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const enAuthorSlug = await getAuthorSlug();
  const frAuthorSlug = await getAuthorSlug("fr");
  const deAuthorSlug = await getAuthorSlug("de");
  const esAuthorSlug = await getAuthorSlug("es");
  const ptAuthorSlug = await getAuthorSlug("pt-br");
  const itAuthorSlug = await getAuthorSlug("it");
  const csAuthorSlug = await getAuthorSlug("cs");
  const jaAuthorSlug = await getAuthorSlug("ja");
  const zhAuthorSlug = await getAuthorSlug("zh-hans");

  const enPosts = enAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "en"
  }));

  const frPosts = frAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "fr"
  }));

  const dePosts = deAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "de"
  }));

  const esPosts = esAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "es"
  }));

  const ptPosts = ptAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "pt-br"
  }));

  const itPosts = itAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "it"
  }));

  const csPosts = csAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "cs"
  }));

  const jaPosts = jaAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "ja"
  }));

  const zhPosts = zhAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "zh-hans"
  }));

  return {
    paths: [...enPosts, ...frPosts, ...dePosts, ...esPosts, ...ptPosts, ...itPosts, ...csPosts, ...jaPosts, ...zhPosts],
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ locale, params }) => {
  const posts = await getAuthorPosts(locale, 6, null, params?.slug);

  if (posts.edges.length === 0) {
    return {
      notFound: true
    };
  };

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      posts
    },
    revalidate: 1,
  }
}

export default Author;