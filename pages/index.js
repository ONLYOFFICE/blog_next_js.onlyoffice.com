import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAllPosts, getProductReleasesPosts, getForDevelopersPosts, getForBusinessPosts, getForEducationPosts } from '../lib/api';

import Layout from "@components/layout";
import HeadSEO from "@components/screens/head-content";
import HeadingContent from "@components/screens/heading-content";
import AdventAnnounce from "@components/screens/heading-content/advent-announce";
import Footer from "@components/screens/footer-content";
import MainContent from "@components/screens/main-content";

const Index = ({ locale, allPosts, productReleasesPosts, forDevelopersPosts, forBusinessPosts, forEducationPosts }) => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={t("titleIndexPage")}
          metaSiteNameOg={t("metaSiteNameOg")}
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
        <MainContent t={t} 
          currentLanguage={locale} 
          allPosts={allPosts} 
          productReleasesPosts={productReleasesPosts} 
          forDevelopersPosts={forDevelopersPosts} 
          forBusinessPosts={forBusinessPosts} 
          forEducationPosts={forEducationPosts}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export default Index;

export const getStaticProps = async ({ locale }) => {
	const allPosts = await getAllPosts(locale);
  const productReleasesPosts = await getProductReleasesPosts(locale);
  const forDevelopersPosts = await getForDevelopersPosts(locale);
  const forBusinessPosts = await getForBusinessPosts(locale);
  const forEducationPosts = await getForEducationPosts(locale);

	return {
		props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      allPosts,
      productReleasesPosts,
      forDevelopersPosts,
      forBusinessPosts,
      forEducationPosts
    },
		revalidate: 10,
	}
}