import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getInThePressPosts, getInThePressDate, getRecentPosts } from "@lib/api";

import Layout from "@components/layout";
import InThePressHeadSEO from "@components/screens/head-content/in-the-press";
import HeadingContent from "@components/screens/heading-content";
import AdventAnnounce from "@components/screens/heading-content/advent-announce";
import Footer from "@components/screens/footer-content";
import InThePressContent from "@components/screens/in-the-press-content";

const InThePress = ({ locale, inThePressPosts, inThePressDate, recentPosts }) => {
  const { t } = useTranslation("common");
  const [stateMobile, setStateMobile] = useState(false);
  const isInThePressContent = true;

  return (
    <Layout>
      <Layout.PageHead>
        <InThePressHeadSEO 
          locale={locale}
          title={`${t("ONLYOFFICE IN THE PRESS")} | ${t("ONLYOFFICE Blog")}`}
          metaSiteName={t("SiteName")}
          articlePublishedTime={inThePressDate?.edges[0]?.node?.dateGmt}
          articleModifiedTime={inThePressDate?.edges[0]?.node?.modifiedGmt}
        />
      </Layout.PageHead>
      <AdventAnnounce t={t} locale={locale} stateMobile={stateMobile} />
      <Layout.PageHeader>
        <HeadingContent t={t} locale={locale} stateMobile={stateMobile} setStateMobile={setStateMobile} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <InThePressContent t={t} locale={locale} inThePressPosts={inThePressPosts} recentPosts={recentPosts} isInThePressContent={isInThePressContent} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} locale={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => {
  const inThePressPosts = await getInThePressPosts(locale, 60, null);
  const inThePressDate = await getInThePressDate(locale);
  const recentPosts = await getRecentPosts(locale);

	return {
		props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      inThePressPosts,
      inThePressDate,
      recentPosts
    },
		revalidate:false,
	}
}

export default InThePress;