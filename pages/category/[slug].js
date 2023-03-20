import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCategorySlug, getCategoryPosts } from "@lib/api";

import Layout from "@components/layout";
import CategoryHeadSEO from "@components/screens/head-content/category";
import HeadingContent from "@components/screens/heading-content";
import AdventAnnounce from "@components/screens/heading-content/advent-announce";
import Footer from "@components/screens/footer-content";
import CategoryContent from "@components/screens/category-content";

const Category = ({ locale, posts }) => {
  const { t } = useTranslation("common");
  const isCategoryContent = true;
  const categoryName = posts?.edges[0]?.node.categories?.nodes[0]?.name;
  const categorySlug = posts?.edges[0]?.node.categories?.nodes[0]?.slug;

  return (
    <Layout>
      <Layout.PageHead>
        <CategoryHeadSEO
          currentLanguage={locale}
          title={`${categoryName} | ${t("ONLYOFFICE Blog")}`}
          categorySlug={categorySlug}
        />
      </Layout.PageHead>
      <AdventAnnounce t={t} currentLanguage={locale} />
      <Layout.PageHeader>
        <HeadingContent t={t} currentLanguage={locale} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <CategoryContent t={t} currentLanguage={locale} posts={posts} isCategoryContent={isCategoryContent} categoryName={categoryName} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticPaths = async ({ locales }) => {
  const categories = await getCategorySlug();

  const paths = locales.map((locale) => (
    categories?.edges?.map(({node}) => ({
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
  const posts = await getCategoryPosts(locale, 15, null, params?.slug);

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

export default Category;