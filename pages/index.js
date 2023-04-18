import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAllPosts, getInThePressPosts, getMainPageDate } from "@lib/api";

import Layout from "@components/layout";
import MainHeadSEO from "@components/screens/head-content/main";
import HeadingContent from "@components/screens/heading-content";
import AdventAnnounce from "@components/screens/heading-content/advent-announce";
import Footer from "@components/screens/footer-content";
import MainContent from "@components/screens/main-content";

const Index = ({ locale, mainPageDate, allPosts, productReleasesPosts, forDevelopersPosts, forBusinessPosts, forEducationPosts, inThePressPosts }) => {
  const { t } = useTranslation("common");
  const [stateMobile, setStateMobile] = useState(false);
  const isMainContent = true;

  return (
    <Layout>
      <Layout.PageHead>
        <MainHeadSEO
          currentLanguage={locale}
          title={t("ONLYOFFICE Blog")}
          metaSiteName={t("SiteName")}
          metaDescription={t("The official source of latest ONLYOFFICE news, tips, ideas, and promos.")}
          articlePublishedTime={mainPageDate?.edges[0]?.node?.dateGmt}
          articleModifiedTime={mainPageDate?.edges[0]?.node?.modifiedGmt}
        />
      </Layout.PageHead>
      <AdventAnnounce t={t} currentLanguage={locale} stateMobile={stateMobile} />
      <Layout.PageHeader>
        <HeadingContent t={t} currentLanguage={locale} isMainContent={isMainContent} stateMobile={stateMobile} setStateMobile={setStateMobile} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <MainContent
          t={t} 
          currentLanguage={locale} 
          allPosts={allPosts} 
          productReleasesPosts={productReleasesPosts} 
          forDevelopersPosts={forDevelopersPosts} 
          forBusinessPosts={forBusinessPosts} 
          forEducationPosts={forEducationPosts}
          inThePressPosts={inThePressPosts}
          isMainContent={isMainContent}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => {
  const allPosts = await getAllPosts(locale, 3, null, "");
  const productReleasesPosts = await getAllPosts(locale, 3, null, "product-releases, veroeffentlichungen, mises-a-jour-des-produits-fr, lanzamientos-de-productos, lancamentos-de-produtos, rilascio-dei-prodotti, product-releases-ja, product-releases-zh-hans");
  const forDevelopersPosts = await getAllPosts(locale, 3, null, "for-developers, entwicklung, pour-les-developpeurs-fr, para-desarrolladores, para-desenvolvedores, per-gli-sviluppatori, for-developers-ja, for-developers-zh-hans");
  const forBusinessPosts = await getAllPosts(locale, 3, null, "for-business, business, pour-les-entreprises-fr, para-empresas, para-negocios, per-affari, pro-firmy, for-business-ja, for-business-zh-hans");
  const forEducationPosts = await getAllPosts(locale, 3, null, "for-education, bildung, pour-education-fr, para-la-educacion, para-educacao, per-l-istruzione, for-education-ja, for-education-zh-hans");
  const inThePressPosts = await getInThePressPosts(locale, 5, null);
  const mainPageDate = await getMainPageDate(locale);

	return {
		props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      allPosts,
      productReleasesPosts,
      forDevelopersPosts,
      forBusinessPosts,
      forEducationPosts,
      inThePressPosts,
      mainPageDate
    },
		revalidate: 1,
	}
}

export default Index;