import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "@components/layout";
import ErrornHeadSEO from "@components/screens/head-content/error";
import HeadingContent from "@components/screens/heading-content";
import AdventAnnounce from "@components/screens/heading-content/advent-announce";
import Footer from "@components/screens/footer-content";
import ErrorContent from "@components/screens/404-content";

const Error = ({ locale }) => {
  const { t } = useTranslation("common");
  const isErrorContent = true;

  return (
    <Layout>
      <Layout.PageHead>
        <ErrornHeadSEO title={`${t("Page not found")} – ${t("ONLYOFFICE Blog")}`} />
      </Layout.PageHead>
      <AdventAnnounce t={t} currentLanguage={locale} />
      <Layout.PageHeader>
        <HeadingContent t={t} currentLanguage={locale} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <ErrorContent t={t} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} language={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
      ...(await serverSideTranslations(locale, "common")),
      locale
    }
	}
}

export default Error;