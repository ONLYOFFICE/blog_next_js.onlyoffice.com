import { useState } from "react";
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
  const [stateMobile, setStateMobile] = useState(false);

  return (
    <Layout locale={locale}>
      <Layout.PageHead>
        <ErrornHeadSEO title={locale === "ar" ? `${t("ONLYOFFICE Blog")} – ${t("Page not found")}` : `${t("Page not found")} – ${t("ONLYOFFICE Blog")}`} />
      </Layout.PageHead>
      <AdventAnnounce t={t} locale={locale} stateMobile={stateMobile} />
      <Layout.PageHeader>
        <HeadingContent t={t} locale={locale} stateMobile={stateMobile} setStateMobile={setStateMobile} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <ErrorContent t={t} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer t={t} locale={locale} />
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