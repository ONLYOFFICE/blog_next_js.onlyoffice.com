import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getInThePressPosts from "@lib/requests/getInThePressPosts";
import getInThePressDate from "@lib/requests/getInThePressDate";
import getRecentPosts from "@lib/requests/getRecentPosts";

import Layout from "@components/layout";
import InThePressHead from "@components/screens/head/in-the-press";
import Header from "@components/screens/header";
import AdventAnnounce from "@components/screens/header/advent-announce";
import Footer from "@components/screens/footer";
import InThePressContent from "@components/screens/in-the-press-content";

const InThePressPage = ({ locale, inThePressPosts, inThePressDate, recentPosts }) => {
  const { t } = useTranslation("common");
  const [stateMobile, setStateMobile] = useState(false);
  const isInThePressPage = true;

  return (
    <Layout locale={locale}>
      <Layout.PageHead>
        <InThePressHead 
          locale={locale}
          title={locale === "ar" ? `${t("ONLYOFFICE Blog")} | ${t("ONLYOFFICE IN THE PRESS")}` : `${t("ONLYOFFICE IN THE PRESS")} | ${t("ONLYOFFICE Blog")}`}
          articlePublishedTime={inThePressDate?.edges[0]?.node?.dateGmt}
          articleModifiedTime={inThePressDate?.edges[0]?.node?.modifiedGmt}
        />
      </Layout.PageHead>
      <AdventAnnounce t={t} locale={locale} stateMobile={stateMobile} />
      <Layout.PageHeader>
        <Header t={t} locale={locale} stateMobile={stateMobile} setStateMobile={setStateMobile} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <InThePressContent t={t} locale={locale} inThePressPosts={inThePressPosts} recentPosts={recentPosts} isInThePressPage={isInThePressPage} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} locale={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => {
  const inThePressPosts = await getInThePressPosts(locale, 15, null);
  const inThePressDate = await getInThePressDate(locale === "el" || locale === "hi" || locale === "ar" || locale === "sr" || locale === "hy" ? "en" : locale);
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

export default InThePressPage;