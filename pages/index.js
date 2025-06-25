import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAllPosts from "@lib/requests/getAllPosts";
import getInThePressPosts from "@lib/requests/getInThePressPosts";
import getMainPageDate from "@lib/requests/getMainPageDate";
import getMainPostExcerpt from "@lib/requests/getMainPostExcerpt";
import Layout from "@components/layout";
import MainHead from "@components/screens/head/main";
import Header from "@components/screens/header";
import AdventAnnounce from "@components/screens/advent-announce";
import Footer from "@components/screens/footer";
import MainContent from "@components/screens/main-content";

const MainPage = ({ locale, mainPageDate, mainPostExcerpt, allPosts, productReleasesPosts, forDevelopersPosts, forBusinessPosts, forEducationPosts, inThePressPosts }) => {
  const { t } = useTranslation("common");
  const isMainPage = true;

  return (
    <Layout locale={locale}>
      <Layout.PageHead>
        <MainHead
          locale={locale}
          title={t("ONLYOFFICE Blog")}
          metaDescription={t("The official source of latest ONLYOFFICE news, tips, ideas, and promos.")}
          articlePublishedTime={mainPageDate?.edges[0]?.node?.dateGmt}
          articleModifiedTime={mainPageDate?.edges[0]?.node?.modifiedGmt}
        />
      </Layout.PageHead>
      <AdventAnnounce locale={locale} />
      <Layout.PageHeader>
        <Header t={t} locale={locale} />
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
          isMainPage={isMainPage}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer locale={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => {
  const allPosts = await getAllPosts(locale, 60, null, "");
  const productReleasesPosts = await getAllPosts(locale, 3, null, "product-releases, veroeffentlichungen, mises-a-jour-des-produits-fr, lanzamientos-de-productos, lancamentos-de-produtos, rilascio-dei-prodotti, product-releases-ja, product-releases-zh-hans, product-releases-el, product-releases-hi, product-releases, product-releases-sr, product-releases-hy");
  const forDevelopersPosts = await getAllPosts(locale, 3, null, "for-developers, entwicklung, pour-les-developpeurs-fr, para-desarrolladores, para-desenvolvedores, per-gli-sviluppatori, for-developers-ja, for-developers-zh-hans, for-developers-el, for-developers-hi, for-developers, for-developers-sr, for-developers-hy");
  const forBusinessPosts = await getAllPosts(locale, 3, null, "for-business, business, pour-les-entreprises-fr, para-empresas, para-negocios, per-affari, pro-firmy, for-business-ja, for-business-zh-hans, for-business-el, for-business-hi, for-business, for-business-sr, for-business-hy");
  const forEducationPosts = await getAllPosts(locale, 3, null, "for-education, bildung, pour-education-fr, para-la-educacion, para-educacao, per-l-istruzione, for-education-ja, for-education-zh-hans, for-education-el, for-education-hi, for-education, for-education-sr, for-education-hy");
  const inThePressPosts = await getInThePressPosts(locale, 2, null);
  const mainPageDate = await getMainPageDate(locale === "el" || locale === "hi" || locale === "ar" || locale === "sr" || locale === "hy" ? "en" : locale);
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
      inThePressPosts: inThePressPosts ? inThePressPosts : null,
      mainPageDate,
      mainPostExcerpt
    },
		revalidate:false,
	}
}

export default MainPage;
