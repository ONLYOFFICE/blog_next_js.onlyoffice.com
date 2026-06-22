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
import categoryTopics from "@components/utils/data/category-topics";

const MainPage = ({ locale, mainPageDate, mainPostExcerpt, allPosts, OO16thAnniversaryPosts, productReleasesPosts, forDevelopersPosts, forBusinessPosts, forEducationPosts, inThePressPosts }) => {
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
          OO16thAnniversaryPosts={OO16thAnniversaryPosts}
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
  const topics = categoryTopics[locale] || categoryTopics["en"];
  const allPosts = await getAllPosts(locale, 60, null, "");
  const OO16thAnniversaryPosts = topics.OO16thAnniversary
    ? await getAllPosts(locale, 3, null, topics.OO16thAnniversary)
    : null;
  const productReleasesPosts = topics.productReleases
    ? await getAllPosts(locale, 3, null, topics.productReleases)
    : null;
  const forDevelopersPosts = topics.forDevelopers
    ? await getAllPosts(locale, 3, null, topics.forDevelopers)
    : null;
  const forBusinessPosts = topics.forBusiness
    ? await getAllPosts(locale, 3, null, topics.forBusiness)
    : null;
  const forEducationPosts = topics.forEducation
    ? await getAllPosts(locale, 3, null, topics.forEducation)
    : null;
  const inThePressPosts = await getInThePressPosts(locale, 2, null);
  const mainPageDate = await getMainPageDate(locale === "el" || locale === "hi" || locale === "ar" || locale === "sr" || locale === "hy" ? "en" : locale);
  const mainPostExcerpt = await getMainPostExcerpt(locale);

	return {
		props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      allPosts,
      OO16thAnniversaryPosts,
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
