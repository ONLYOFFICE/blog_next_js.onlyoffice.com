import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "@components/layout";
import ErrornHead from "@components/screens/head/error";
import Header from "@components/screens/header";
import AdventAnnounceBanner from "@components/screens/header/advent-announce-banner";
import Footer from "@components/screens/footer";
import ErrorContent from "@components/screens/404-content";

const Error404Page = ({ locale }) => {
  const { t } = useTranslation("common");
  const [stateMobile, setStateMobile] = useState(false);

  return (
    <Layout locale={locale}>
      <Layout.PageHead>
        <ErrornHead title={locale === "ar" ? `${t("ONLYOFFICE Blog")} – ${t("Page not found")}` : `${t("Page not found")} – ${t("ONLYOFFICE Blog")}`} />
      </Layout.PageHead>
      <AdventAnnounceBanner locale={locale} stateMobile={stateMobile} />
      <Layout.PageHeader>
        <Header t={t} locale={locale} stateMobile={stateMobile} setStateMobile={setStateMobile} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <ErrorContent t={t} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer locale={locale} />
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

export default Error404Page;