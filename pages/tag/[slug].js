import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getTagSlug, getTagPosts } from "@lib/api";

import Layout from "@components/layout";
import TagHeadSEO from "@components/screens/head-content/tag";
import HeadingContent from "@components/screens/heading-content";
import AdventAnnounce from "@components/screens/heading-content/advent-announce";
import Footer from "@components/screens/footer-content";
import TagContent from "@components/screens/tag-content";

const Tag = ({ locale, posts }) => {
  const { t } = useTranslation("common");
  const [stateMobile, setStateMobile] = useState(false);
  const isTagContent = true;
  const tagName = posts?.edges[0]?.node.tags?.nodes[0]?.name;
  const tagSlug = posts?.edges[0]?.node.tags?.nodes[0]?.slug;

  return (
    <Layout>
      <Layout.PageHead>
        <TagHeadSEO
          currentLanguage={locale}
          title={`${tagName} | ${t("ONLYOFFICE Blog")}`}
          tagSlug={tagSlug}
        />
      </Layout.PageHead>
      <AdventAnnounce t={t} currentLanguage={locale} stateMobile={stateMobile} />
      <Layout.PageHeader>
        <HeadingContent t={t} currentLanguage={locale} stateMobile={stateMobile} setStateMobile={setStateMobile} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <TagContent t={t} currentLanguage={locale} posts={posts} isTagContent={isTagContent} tagName={tagName} tagSlug={tagSlug} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticPaths = async ({ locales }) => {
  const tags = await getTagSlug();

  const paths = locales.map((locale) => (
    tags?.edges.map(({node}) => ({
      params: {
        slug: node.slug
      }, 
      locale
    }))
  )).flat();

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ locale, params }) => {
  const posts = await getTagPosts(locale, 6, null, params?.slug);

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
    revalidate: 86400,
  }
}

export default Tag;