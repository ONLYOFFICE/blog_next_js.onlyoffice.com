import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import categoryTopics from "@components/utils/data/category-topics";
import getAllPosts from "@lib/requests/getAllPosts";
import getInThePressPosts from "@lib/requests/getInThePressPosts";
import getMainPageDate from "@lib/requests/getMainPageDate";
import getMainPostExcerpt from "@lib/requests/getMainPostExcerpt";

import Layout from "@components/layout";
import MainHead from "@components/screens/head/main";
import Header from "@components/screens/header";
import AdventAnnounce from "@components/screens/header/advent-announce";
import Footer from "@components/screens/footer";
import MainContent from "@components/screens/main-content";

const MainPage = ({ locale, mainPageDate, mainPostExcerpt, allPosts, productReleasesPosts, forDevelopersPosts, forBusinessPosts, forEducationPosts, inThePressPosts }) => {
  const { t } = useTranslation("common");
  const [stateMobile, setStateMobile] = useState(false);
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
      <AdventAnnounce t={t} locale={locale} stateMobile={stateMobile} />
      <Layout.PageHeader>
        <Header t={t} locale={locale} isMainPage={isMainPage} stateMobile={stateMobile} setStateMobile={setStateMobile} />
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
        <Footer t={t} locale={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => {
  const getCategoryKey = (locale, category) => categoryTopics[locale][category];
  const allPosts = await getAllPosts(locale, 15, null, "");
  const productReleasesPosts = await getAllPosts(locale, 3, null, getCategoryKey(locale, "productReleases"));
  const forDevelopersPosts = await getAllPosts(locale, 3, null, getCategoryKey(locale, "forDevelopers"));
  const forBusinessPosts = await getAllPosts(locale, 3, null, getCategoryKey(locale, "forBusiness"));
  const forEducationPosts = await getAllPosts(locale, 3, null, getCategoryKey(locale, "forEducation"));
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
