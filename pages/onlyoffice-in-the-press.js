import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getInThePressPosts, getRecentPosts } from '../lib/api';

import Layout from "@components/layout";
import HeadSEO from "@components/screens/head-content";
import HeadingContent from "@components/screens/heading-content";
import AdventAnnounce from "@components/screens/heading-content/advent-announce";
import Footer from "@components/screens/footer-content";
import InThePressContent from "@components/screens/in-the-press-content";

const InThePress = ({ locale, inThePressPosts, recentPosts }) => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Layout.PageHead>
        <HeadSEO
          title={`${t("ONLYOFFICE IN THE PRESS")} | ${t("ONLYOFFICE Blog")}`}
          metaSiteNameOg={`${t("ONLYOFFICE IN THE PRESS")} | ${t("ONLYOFFICE Blog")}`}
          metaDescription={t("titleIndexPage")}
          metaDescriptionOg={t("metaDescriptionOgIndexPage")}
          metaKeywords={t("metaKeywordsIndexPage")}
        />
      </Layout.PageHead>
      <AdventAnnounce t={t} currentLanguage={locale} />
      <Layout.PageHeader>
        <HeadingContent t={t} currentLanguage={locale} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <InThePressContent t={t} currentLanguage={locale} inThePressPosts={inThePressPosts} recentPosts={recentPosts} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => {
  const inThePressPosts = await getInThePressPosts(locale, 5, null);
  const recentPosts = await getRecentPosts(locale);

	return {
		props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      inThePressPosts,
      recentPosts
    },
		revalidate: 10,
	}
}

export default InThePress;