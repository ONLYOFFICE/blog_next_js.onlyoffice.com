import { useState } from "react";
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
  const [stateMobile, setStateMobile] = useState(false);
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
      <AdventAnnounce t={t} currentLanguage={locale} stateMobile={stateMobile} />
      <Layout.PageHeader>
        <HeadingContent t={t} currentLanguage={locale} stateMobile={stateMobile} setStateMobile={setStateMobile} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <CategoryContent t={t} currentLanguage={locale} posts={posts} isCategoryContent={isCategoryContent} categoryName={categoryName} categorySlug={categorySlug} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const enCategorySlug = await getCategorySlug();
  const frCategorySlug = await getCategorySlug("fr");
  const deCategorySlug = await getCategorySlug("de");
  const esCategorySlug = await getCategorySlug("es");
  const ptCategorySlug = await getCategorySlug("pt-br");
  const itCategorySlug = await getCategorySlug("it");
  const csCategorySlug = await getCategorySlug("cs");
  const jaCategorySlug = await getCategorySlug("ja");
  const zhCategorySlug = await getCategorySlug("zh-hans");

  const enPosts = enCategorySlug?.edges?.map(({node}) => ({
    params: { slug: node.slug },
    locale: "en"
  }));

  const frPosts = frCategorySlug?.edges?.map(({node}) => ({
    params: { slug: node.slug },
    locale: "fr"
  }));

  const dePosts = deCategorySlug?.edges?.map(({node}) => ({
    params: { slug: node.slug },
    locale: "de"
  }));

  const esPosts = esCategorySlug?.edges?.map(({node}) => ({
    params: { slug: node.slug },
    locale: "es"
  }));

  const ptPosts = ptCategorySlug?.edges?.map(({node}) => ({
    params: { slug: node.slug },
    locale: "pt-br"
  }));

  const itPosts = itCategorySlug?.edges?.map(({node}) => ({
    params: { slug: node.slug },
    locale: "it"
  }));

  const csPosts = csCategorySlug?.edges?.map(({node}) => ({
    params: { slug: node.slug },
    locale: "cs"
  }));

  const jaPosts = jaCategorySlug?.edges?.map(({node}) => ({
    params: { slug: node.slug },
    locale: "ja"
  }));

  const zhPosts = zhCategorySlug?.edges?.map(({node}) => ({
    params: { slug: node.slug },
    locale: "zh-hans"
  }));

  return {
    paths: [...enPosts, ...frPosts, ...dePosts, ...esPosts, ...ptPosts, ...itPosts, ...csPosts, ...jaPosts, ...zhPosts],
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ locale, params }) => {
  const posts = await getCategoryPosts(locale, 60, null, params?.slug);

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

export default Category;