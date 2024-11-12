import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getAuthorSlug from "@lib/requests/getAuthorSlug";
import getAuthorPosts from "@lib/requests/getAuthorPosts";

import Layout from "@components/layout";
import AuthorHead from "@components/screens/head/author";
import Header from "@components/screens/header";
import AdventAnnounceBanner from "@components/screens/header/advent-announce-banner";
import Footer from "@components/screens/footer";
import AuthorContent from "@components/screens/author-content";

const AuthorPage = ({ locale, posts }) => {
  const { t } = useTranslation("common");
  const [stateMobile, setStateMobile] = useState(false);
  const isAuthorPage = true;
  const authorName = posts?.edges[0]?.node.author?.node?.name;
  const authorSlug = posts?.edges[0]?.node.author?.node?.slug;

  return (
    <Layout locale={locale}>
      <Layout.PageHead>
        <AuthorHead
          locale={locale}
          title={locale === "ar" ? `${t("ONLYOFFICE Blog")} | ${authorName}` : `${authorName} | ${t("ONLYOFFICE Blog")}`}
          authorSlug={authorSlug}
        />
      </Layout.PageHead>
      <AdventAnnounceBanner locale={locale} stateMobile={stateMobile} />
      <Layout.PageHeader>
        <Header t={t} locale={locale} stateMobile={stateMobile} setStateMobile={setStateMobile} />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <AuthorContent t={t} locale={locale} posts={posts} isAuthorPage={isAuthorPage} authorName={authorName} authorSlug={authorSlug} />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <Footer locale={locale} />
      </Layout.PageFooter>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const enAuthorSlug = await getAuthorSlug();
  const frAuthorSlug = await getAuthorSlug("fr");
  const deAuthorSlug = await getAuthorSlug("de");
  const esAuthorSlug = await getAuthorSlug("es");
  const ptAuthorSlug = await getAuthorSlug("pt-br");
  const itAuthorSlug = await getAuthorSlug("it");
  const csAuthorSlug = await getAuthorSlug("cs");
  const jaAuthorSlug = await getAuthorSlug("ja");
  const zhAuthorSlug = await getAuthorSlug("zh-hans");

  const enPosts = enAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "en"
  }));

  const frPosts = frAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "fr"
  }));

  const dePosts = deAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "de"
  }));

  const esPosts = esAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "es"
  }));

  const ptPosts = ptAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "pt-br"
  }));

  const itPosts = itAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "it"
  }));

  const csPosts = csAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "cs"
  }));

  const jaPosts = jaAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "ja"
  }));

  const zhPosts = zhAuthorSlug?.edges?.map(({node}) => ({
    params: { slug: node.author.node.slug },
    locale: "zh-hans"
  }));

  return {
    paths: [...enPosts, ...frPosts, ...dePosts, ...esPosts, ...ptPosts, ...itPosts, ...csPosts, ...jaPosts, ...zhPosts],
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ locale, params }) => {
  const posts = await getAuthorPosts(locale, 60, null, params?.slug);

  if (posts?.edges?.length === 0) {
    return {
      notFound: true
    };
  };

  return {
    props: {
      ...(await serverSideTranslations(locale, "common")),
      locale,
      posts: posts ? posts : null
    },
    revalidate:false,
  }
}

export default AuthorPage;