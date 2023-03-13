import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAuthorPostsSlug, getAuthorPosts } from '../../lib/api';

import Layout from "@components/layout";
import HeadSEO from "@components/screens/head-content";
import HeadingContent from "@components/screens/heading-content";
import AdventAnnounce from "@components/screens/heading-content/advent-announce";
import Footer from "@components/screens/footer-content";
import AuthorContent from "@components/screens/author-content";

const Author = ({ locale, posts }) => {
  const { t } = useTranslation("common");
  const isAuthorContent = true;

  const authorName = posts?.edges[0]?.node.author?.node.name || "";

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={`${authorName} | ${t("ONLYOFFICE Blog")}`}
          metaSiteNameOg={`${authorName}) | ${t("ONLYOFFICE Blog")}`}
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
        <AuthorContent t={t} currentLanguage={locale} posts={posts} isAuthorContent={isAuthorContent} authorName={authorName} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticPaths = async ({ locales }) => {
  const posts = await getAuthorPostsSlug();

  const paths = locales.map((locale) => (
    posts.edges.map(({node}) => ({
      params: {
        slug: node.author.node.slug
      }, 
      locale
    }))
  )).flat();

  return {
    paths,
    fallback: false,
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