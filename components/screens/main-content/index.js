import { useState, useEffect } from "react";
import StyledMainContent from "./styled-main-content";
import InternalLink from "@components/common/internal-link";
import Card from "@components/screens/common/card";
import Heading from "@components/common/heading";
import CategoryTopics from "./widgets/category-topics";
import InThePress from "./widgets/in-the-press";
import DownloadBlock from "../common/download-block";
import SearchArea from "@components/common/search-area";
import Newsletter from "../common/newsletter";
import Button from "@components/common/button";

const MainContent = ({ t, currentLanguage, allPosts, productReleasesPosts, forDevelopersPosts, forBusinessPosts, forEducationPosts, inThePressPosts }) => {
  const lastPost = allPosts.edges[0]?.node;
  const mainPost = true;

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

  return (
    <StyledMainContent>
      <SearchArea t={t} label={t("Search")} />

      <div className="main-block">
        <Card t={t} currentLanguage={currentLanguage} data={lastPost} mainPost={mainPost} />

        <div className="main-sidebar">
          <CategoryTopics t={t} />
          <InThePress t={t} inThePressPosts={inThePressPosts} />
        </div>
      </div>

      <div className="wrapper-posts">
        <div className="category-wrapper">
          <div className="category-posts-top">
            <Heading className="category-posts-title" level={2}>{t("Product releases")}</Heading>
            <InternalLink className="view-all" href="#">{t("View all posts")}</InternalLink>
          </div>
          <div className="category-posts">
            {productReleasesPosts.edges.map(({ node }) => {
              return <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
            })}
          </div>
          <div className="category-more-posts">
            <InternalLink className="more-posts-btn" href="#">{t("View all posts Product releases")}</InternalLink>
          </div>
        </div>

        <div className="category-wrapper">
          <div className="category-posts-top">
            <Heading className="category-posts-title" level={2}>{t("For Developers")}</Heading>
            <InternalLink className="view-all" href="#">{t("View all posts")}</InternalLink>
          </div>
          <div className="category-posts">
            {forDevelopersPosts.edges.map(({ node }) => {
              return <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
            })}
          </div>
          <div className="category-more-posts">
            <InternalLink className="more-posts-btn" href="#">{t("View all posts For developers")}</InternalLink>
          </div>
        </div>

        <DownloadBlock t={t} />

        <div className="category-wrapper">
          <div className="category-posts-top">
            <Heading className="category-posts-title" level={2}>{t("For business")}</Heading>
            <InternalLink className="view-all" href="#">{t("View all posts")}</InternalLink>
          </div>
          <div className="category-posts">
            {forBusinessPosts.edges.map(({ node }) => {
              return <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
            })}
          </div>
          <div className="category-more-posts">
            <InternalLink className="more-posts-btn" href="#">{t("View all posts For business")}</InternalLink>
          </div>
        </div>

        <div className="category-wrapper">
          <div className="category-posts-top">
            <Heading className="category-posts-title" level={2}>{t("For education")}</Heading>
            <InternalLink className="view-all" href="#">{t("View all posts")}</InternalLink>
          </div>
          <div className="category-posts">
            {forEducationPosts.edges.map(({ node }) => {
              return <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
            })}
          </div>
          <div className="category-more-posts">
            <InternalLink className="more-posts-btn" href="#">{t("View all posts For education")}</InternalLink>
          </div>
        </div>

        <Newsletter t={t} />

        <div className="category-posts">
          {postList?.map(({ node }) => {
            return <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
          })}

          {hasMore &&
            <>
              <Button className="category-posts-btn" typeButton="transparent" onClick={handleLoadMore} label={t("Load more")} />
              <Button className="category-posts-mobile-btn" typeButton="transparent" onClick={handleLoadMore} label={t("View all posts")} />
            </>
          }
        </div>
      </div>
    </StyledMainContent>
  );
};

export default MainContent;
