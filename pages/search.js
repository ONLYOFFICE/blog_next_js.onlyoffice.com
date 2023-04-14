import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getRecentPosts } from "@lib/api";
import { useRouter } from "next/router";

import Layout from "@components/layout";
import SearchHeadSEO from "@components/screens/head-content/search";
import HeadingContent from "@components/screens/heading-content";
import Footer from "@components/screens/footer-content";
import SearchContent from "@components/screens/search-content";

const Search = ({ locale, recentPosts }) => {
  const isSearchContent = true;
  const { t } = useTranslation("common");
  const router = useRouter();
  const routerQuery = router.query.s === undefined ? "" : router.query.s;

  return (
    <Layout>
      <Layout.PageHead>
        <SearchHeadSEO title={`${routerQuery} | ${t("ONLYOFFICE Blog")}`} />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeadingContent t={t} currentLanguage={locale} isSearchContent={isSearchContent} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <SearchContent t={t} currentLanguage={locale} recentPosts={recentPosts} isSearchContent={isSearchContent} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
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
		revalidate: 1,
	}
}

export default Search;