import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getRecentPosts from "@lib/requests/getRecentPosts";
import { useRouter } from "next/router";

import Layout from "@components/layout";
import SearchHeadSEO from "@components/screens/head-content/search";
import HeadingContent from "@components/screens/heading-content";
import AdventAnnounceBanner from "@components/screens/heading-content/advent-announce-banner";
import Footer from "@components/screens/footer-content";
import SearchContent from "@components/screens/search-content";

const Search = ({ locale, recentPosts }) => {
  const { t } = useTranslation("common");
  const [stateMobile, setStateMobile] = useState(false);
  const isSearchContent = true;

  const router = useRouter();
  const routerQuery = router.query.s === undefined ? "" : router.query.s;

  return (
    <Layout locale={locale}>
      <Layout.PageHead>
        <SearchHeadSEO title={locale === "ar" ? `${t("ONLYOFFICE Blog")} | ${routerQuery}` : `${routerQuery} | ${t("ONLYOFFICE Blog")}`} />
      </Layout.PageHead>
      <AdventAnnounceBanner locale={locale} stateMobile={stateMobile} />
      <Layout.PageHeader>
        <HeadingContent t={t} locale={locale} isSearchContent={isSearchContent} stateMobile={stateMobile} setStateMobile={setStateMobile} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SearchContent t={t} locale={locale} recentPosts={recentPosts} isSearchContent={isSearchContent} />
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

export default Search;