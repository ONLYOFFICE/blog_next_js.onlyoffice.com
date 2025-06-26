import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getTagSlug from "@lib/requests/getTagSlug";
import getTagPosts from "@lib/requests/getTagPosts";

import Layout from "@components/layout";
import TagHead from "@components/screens/head/tag";
import Header from "@components/screens/header";
import AdventAnnounce from "@components/screens/advent-announce";
import Footer from "@components/screens/footer";
import TagContent from "@components/screens/tag-content";

const TagPage = ({ locale, posts }) => {
  const { t } = useTranslation("common");
  const isTagPage = true;
  const tagName = posts?.edges[0]?.node.tags?.nodes[0]?.name;
  const tagSlug = posts?.edges[0]?.node.tags?.nodes[0]?.slug;

  return (
    <Layout locale={locale}>
      <Layout.PageHead>
        <TagHead
          locale={locale}
          title={locale === "ar" ? `${t("ONLYOFFICE Blog")} | ${tagName}` : `${tagName} | ${t("ONLYOFFICE Blog")}`}
          tagSlug={tagSlug}
        />
      </Layout.PageHead>
      <AdventAnnounce locale={locale} />
      <Layout.PageHeader>
        <Header t={t} locale={locale} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <TagContent t={t} locale={locale} posts={posts} isTagPage={isTagPage} tagName={tagName} tagSlug={tagSlug} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer locale={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticPaths = async ({ locales }) => {
  const tags = await getTagSlug();

  const paths = locales.map((locale) => (
    tags?.edges?.map(({node}) => ({
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
  const posts = await getTagPosts(locale, 60, null, params?.slug);

  if (posts?.edges?.length === 0) {
    return {
      notFound: true
    };
  };

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      posts: posts ? posts : null
    },
    revalidate:false,
  }
}

export default TagPage;