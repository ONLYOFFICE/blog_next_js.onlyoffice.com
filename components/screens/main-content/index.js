import StyledMainContent from "./styled-main-content";
import { useState, useEffect } from "react";
import Router from 'next/router';
import InternalLink from "@components/common/internal-link";
import Heading from "@components/common/heading";
import Card from "@components/screens/common/card";
import SearchArea from "@components/common/search-area";
import DownloadBlock from "@components/screens/common/download-block";
import Newsletter from "@components/screens/common/newsletter";
import CategoryTopics from "@components/screens/common/widgets/category-topics";
import InThePress from "@components/screens/common/widgets/in-the-press";
import Button from "@components/common/button";
import LoadMorePosts from "../common/load-more-posts";

const MainContent = ({ t, currentLanguage, allPosts, productReleasesPosts, forDevelopersPosts, forBusinessPosts, forEducationPosts, inThePressPosts, isMainContent }) => {
  const mainPost = true;
  const [searchQuery, setSearchQuery] = useState("");

  const posts = allPosts.edges;
  const [postList, setPostList] = useState([...posts.slice(0, 3)]);
  const [loadMore, setLoadMore] = useState(false);
  const [hasMore, setHasMore] = useState(posts.length > 3);

  const handleLoadMore = () => {
    setLoadMore(true);
  };

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = postList.length;
      const isMore = currentLength < posts.length;
      const nextResults = isMore ? posts.slice(currentLength, currentLength + 6) : [];
      setPostList([...postList, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]);

  useEffect(() => {
    const isMore = postList.length < posts.length;
    setHasMore(isMore);
  }, [postList]);

  const handleSearchFormSubmit = async (e) => {
    e.preventDefault();

    Router.push(`/search?s=${searchQuery}`);
    return null;
  };
  
  return (
    <StyledMainContent>
      <SearchArea 
        label={t("Search")} 
        currentLanguage={currentLanguage}
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        handleSearchFormSubmit={handleSearchFormSubmit}
      />

      <div className="main-block">
        <Card t={t} currentLanguage={currentLanguage} data={allPosts.edges[0]?.node} mainPost={mainPost} />

        <div className="main-sidebar">
          <CategoryTopics t={t} currentLanguage={currentLanguage} />
          {
            inThePressPosts.edges.length > 0 && 
            <InThePress t={t} inThePressPosts={inThePressPosts} currentLanguage={currentLanguage} />
          }
        </div>
      </div>

      <div className="wrapper-posts">
        {productReleasesPosts.edges.length > 0 &&
        <div className="category-wrapper">
          <div className="category-posts-top">
            <Heading className="category-posts-title" level={2}>{t("Product releases")}</Heading>
            <InternalLink className="view-all" href={`/category/${t("productReleasesLink")}`}>{t("View all posts")}</InternalLink>
          </div>
          <div className="category-posts">
            {productReleasesPosts.edges.map(({node}) => (
              <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
            ))}
          </div>
          <div className="category-more-posts">
            <InternalLink className="more-posts-btn" href={`/category/${t("productReleasesLink")}`}>{t("View all posts Product releases")}</InternalLink>
          </div>
        </div>}

        {forDevelopersPosts.edges.length > 0 && 
        <div className="category-wrapper">
          <div className="category-posts-top">
            <Heading className="category-posts-title" level={2}>{t("For developers")}</Heading>
            <InternalLink className="view-all" href={`/category/${t("forDevelopersLink")}`}>{t("View all posts")}</InternalLink>
          </div>
          <div className="category-posts">
            {forDevelopersPosts.edges.map(({node}) => (
              <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
            ))}
          </div>
          <div className="category-more-posts">
            <InternalLink className="more-posts-btn" href={`/category/${t("forDevelopersLink")}`}>{t("View all posts For developers")}</InternalLink>
          </div>
        </div>}

        <DownloadBlock t={t} />

        {forBusinessPosts.edges.length > 0 &&
        <div className="category-wrapper">
          <div className="category-posts-top">
            <Heading className="category-posts-title" level={2}>{t("For business")}</Heading>
            <InternalLink className="view-all" href={`/category/${t("forBusinessLink")}`}>{t("View all posts")}</InternalLink>
          </div>
          <div className="category-posts">
            {forBusinessPosts.edges.map(({node}) => (
              <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
            ))}
          </div>
          <div className="category-more-posts">
            <InternalLink className="more-posts-btn" href={`/category/${t("forBusinessLink")}`}>{t("View all posts For business")}</InternalLink>
          </div>
        </div>}

        {forEducationPosts.edges.length > 0 &&
        <div className="category-wrapper">
          <div className="category-posts-top">
            <Heading className="category-posts-title" level={2}>{t("For education")}</Heading>
            <InternalLink className="view-all" href={`/category/${t("forEducationLink")}`}>{t("View all posts")}</InternalLink>
          </div>
          <div className="category-posts">
            {forEducationPosts.edges.map(({node}) => (
              <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
            ))}
          </div>
          <div className="category-more-posts">
            <InternalLink className="more-posts-btn" href={`/category/${t("forEducationLink")}`}>{t("View all posts For education")}</InternalLink>
          </div>
        </div>}

        <Newsletter t={t} />

        <div className="category-posts">
          {postList?.map(({ node }) => {
            return <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
          })}

          {hasMore &&
            <Button className="category-posts-btn" typeButton="transparent" onClick={handleLoadMore} label={t("Load more")} />
          }
        </div>
      </div>
    </StyledMainContent>
  );
};

export default MainContent;
