import StyledMainContent from "./styled-main-content";
import { useState } from "react";
import Router from 'next/router';
import categoryTopics from "@components/utils/data/category-topics";
import InternalLink from "@components/common/internal-link";
import Heading from "@components/common/heading";
import Card from "@components/screens/common/card";
import SearchArea from "@components/common/search-area";
import DownloadBlock from "@components/screens/common/download-block";
import Newsletter from "@components/screens/common/newsletter";
import CategoryTopics from "@components/screens/common/widgets/category-topics";
import InThePress from "@components/screens/common/widgets/in-the-press";
import LoadMorePosts from "../common/load-more-posts";

const MainContent = ({ t, locale, mainPostExcerpt, allPosts, productReleasesPosts, forDevelopersPosts, forBusinessPosts, forEducationPosts, inThePressPosts, isMainContent }) => {
  const mainPost = true;
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchFormSubmit = async (e) => {
    e.preventDefault();

    Router.push(`/search?s=${searchQuery}`);
    return null;
  };
  
  return (
    <StyledMainContent>
      <SearchArea 
        label={t("Search")} 
        locale={locale}
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        handleSearchFormSubmit={handleSearchFormSubmit}
      />

      <div className="main-block">
        <Card t={t} locale={locale} data={allPosts.edges[0]?.node} mainPostExcerpt={mainPostExcerpt} mainPost={mainPost} />

        <div className="main-sidebar">
          <CategoryTopics t={t} locale={locale} />
          {
            inThePressPosts.edges.length > 0 && 
            <InThePress t={t} inThePressPosts={inThePressPosts} locale={locale} />
          }
        </div>
      </div>

      <div className="wrapper-posts">
        {productReleasesPosts.edges.length > 0 &&
        <div className="category-wrapper">
          <div className="category-posts-top">
            <Heading className="category-posts-title" level={2}>{t("Product releases")}</Heading>
            <InternalLink className="view-all" href={`/category/${categoryTopics[locale].productReleases}`}>{t("View all posts")}</InternalLink>
          </div>
          <div className="category-posts">
            {productReleasesPosts.edges.map(({node}) => (
              <Card key={node.id} t={t} locale={locale} data={node} />
            ))}
          </div>
          <div className="category-more-posts">
            <InternalLink className="more-posts-btn" href={`/category/${categoryTopics[locale].productReleases}`}>{t("View all posts Product releases")}</InternalLink>
          </div>
        </div>}

        {forDevelopersPosts.edges.length > 0 && 
        <div className="category-wrapper">
          <div className="category-posts-top">
            <Heading className="category-posts-title" level={2}>{t("For developers")}</Heading>
            <InternalLink className="view-all" href={`/category/${categoryTopics[locale].forDevelopers}`}>{t("View all posts")}</InternalLink>
          </div>
          <div className="category-posts">
            {forDevelopersPosts.edges.map(({node}) => (
              <Card key={node.id} t={t} locale={locale} data={node} />
            ))}
          </div>
          <div className="category-more-posts">
            <InternalLink className="more-posts-btn" href={`/category/${categoryTopics[locale].forDevelopers}`}>{t("View all posts For developers")}</InternalLink>
          </div>
        </div>}

        <DownloadBlock t={t} locale={locale} />

        {forBusinessPosts.edges.length > 0 &&
        <div className="category-wrapper">
          <div className="category-posts-top">
            <Heading className="category-posts-title" level={2}>{t("For business")}</Heading>
            <InternalLink className="view-all" href={`/category/${categoryTopics[locale].forBusiness}`}>{t("View all posts")}</InternalLink>
          </div>
          <div className="category-posts">
            {forBusinessPosts.edges.map(({node}) => (
              <Card key={node.id} t={t} locale={locale} data={node} />
            ))}
          </div>
          <div className="category-more-posts">
            <InternalLink className="more-posts-btn" href={`/category/${categoryTopics[locale].forBusiness}`}>{t("View all posts For business")}</InternalLink>
          </div>
        </div>}

        {forEducationPosts.edges.length > 0 &&
        <div className="category-wrapper">
          <div className="category-posts-top">
            <Heading className="category-posts-title" level={2}>{t("For education")}</Heading>
            <InternalLink className="view-all" href={`/category/${categoryTopics[locale].forEducation}`}>{t("View all posts")}</InternalLink>
          </div>
          <div className="category-posts">
            {forEducationPosts.edges.map(({node}) => (
              <Card key={node.id} t={t} locale={locale} data={node} />
            ))}
          </div>
          <div className="category-more-posts">
            <InternalLink className="more-posts-btn" href={`/category/${categoryTopics[locale].forEducation}`}>{t("View all posts For education")}</InternalLink>
          </div>
        </div>}

        <Newsletter t={t} locale={locale} />

        <div className="category-posts">
          <LoadMorePosts t={t} locale={locale} data={allPosts} isMainContent={isMainContent} />
        </div>
      </div>
    </StyledMainContent>
  );
};

export default MainContent;
