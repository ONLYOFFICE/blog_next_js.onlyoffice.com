import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAllPosts, getInThePressPosts, getMainPageDate, getMainPostExcerpt } from "@lib/api";

import Layout from "@components/layout";
import MainHeadSEO from "@components/screens/head-content/main";
import HeadingContent from "@components/screens/heading-content";
import AdventAnnounce from "@components/screens/heading-content/advent-announce";
import Footer from "@components/screens/footer-content";
import MainContent from "@components/screens/main-content";

const Index = ({ locale, mainPageDate, mainPostExcerpt, allPosts, productReleasesPosts, forDevelopersPosts, forBusinessPosts, forEducationPosts, inThePressPosts }) => {
  const { t } = useTranslation("common");
  const [stateMobile, setStateMobile] = useState(false);
  const isMainContent = true;

  return (
    <Layout locale={locale}>
      <Layout.PageHead>
        <MainHeadSEO
          locale={locale}
          title={t("ONLYOFFICE Blog")}
          metaDescription={t("The official source of latest ONLYOFFICE news, tips, ideas, and promos.")}
          articlePublishedTime={mainPageDate?.edges[0]?.node?.dateGmt}
          articleModifiedTime={mainPageDate?.edges[0]?.node?.modifiedGmt}
        />
      </Layout.PageHead>
      <AdventAnnounce t={t} locale={locale} stateMobile={stateMobile} />
      <Layout.PageHeader>
        <HeadingContent t={t} locale={locale} isMainContent={isMainContent} stateMobile={stateMobile} setStateMobile={setStateMobile} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <MainContent
          t={t} 
          locale={locale} 
          mainPostExcerpt={mainPostExcerpt}
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
        <Footer t={t} locale={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => {
  const allPosts = await getAllPosts(locale, 60, null, "");
  const productReleasesPosts = await getAllPosts(locale, 3, null, "product-releases, veroeffentlichungen, mises-a-jour-des-produits-fr, lanzamientos-de-productos, lancamentos-de-produtos, rilascio-dei-prodotti, product-releases-ja, product-releases-zh-hans, product-releases-el, product-releases-hi, product-releases-ar, product-releases-sr");
  const forDevelopersPosts = await getAllPosts(locale, 3, null, "for-developers, entwicklung, pour-les-developpeurs-fr, para-desarrolladores, para-desenvolvedores, per-gli-sviluppatori, for-developers-ja, for-developers-zh-hans, for-developers-el, for-developers-hi, for-developers-ar, for-developers-sr");
  const forBusinessPosts = await getAllPosts(locale, 3, null, "for-business, business, pour-les-entreprises-fr, para-empresas, para-negocios, per-affari, pro-firmy, for-business-ja, for-business-zh-hans, for-business-el, for-business-hi, for-business-ar, for-business-sr");
  const forEducationPosts = await getAllPosts(locale, 3, null, "for-education, bildung, pour-education-fr, para-la-educacion, para-educacao, per-l-istruzione, for-education-ja, for-education-zh-hans, for-education-el, for-education-hi, for-education-ar, for-education-sr");
  const inThePressPosts = await getInThePressPosts(locale, 2, null);
  const mainPageDate = await getMainPageDate(locale === "el" || locale === "hi" || locale === "ar" || locale === "sr" ? "en" : locale);
  const mainPostExcerpt = await getMainPostExcerpt(locale);

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
      mainPageDate,
      mainPostExcerpt
    },
		revalidate:false,
	}
}

export default Index;
