import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getRecentPosts from "@lib/requests/getRecentPosts";
import { useRouter } from "next/router";

import Layout from "@components/layout";
import SearchHead from "@components/screens/head/search";
import Header from "@components/screens/header";
import AdventAnnounceBanner from "@components/screens/header/advent-announce-banner";
import Footer from "@components/screens/footer";
import SearchContent from "@components/screens/search-content";

const SearchPage = ({ locale, recentPosts }) => {
  const { t } = useTranslation("common");
  const [stateMobile, setStateMobile] = useState(false);
  const isSearchPage = true;

  const router = useRouter();
  const routerQuery = router.query.s === undefined ? "" : router.query.s;

  return (
    <Layout locale={locale}>
      <Layout.PageHead>
        <SearchHead title={locale === "ar" ? `${t("ONLYOFFICE Blog")} | ${routerQuery}` : `${routerQuery} | ${t("ONLYOFFICE Blog")}`} />
      </Layout.PageHead>
      <AdventAnnounceBanner locale={locale} stateMobile={stateMobile} />
      <Layout.PageHeader>
        <Header t={t} locale={locale} isSearchPage={isSearchPage} stateMobile={stateMobile} setStateMobile={setStateMobile} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SearchContent t={t} locale={locale} recentPosts={recentPosts} isSearchPage={isSearchPage} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer locale={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => {
  const recentPosts = await getRecentPosts(locale);

	return {
		props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      recentPosts
    },
		revalidate:false,
	}
}

export default SearchPage;