import StyledLoadMorePosts from "./styled-load-more-posts";
import { useState, useEffect } from "react";
import Card from "@components/screens/common/card";
import Button from "@components/common/button";
import InThePressPost from "@components/screens/in-the-press-content/in-the-press-post";
import SearchPost from "@components/screens/search-content/search-post";

const LoadMorePosts = ({ t, locale, data, isCategoryContent, isInThePressContent, isAuthorContent, isTagContent, searchQueryString, isSearchContent, isMainContent, authorSlug, tagSlug, categorySlug, ...rest }) => {
  const dataEdges = isCategoryContent ? data.edges.slice(15) : isInThePressContent ? data.edges.slice(5) : data.edges;
  const dataSliceLength = isCategoryContent || isInThePressContent ? 0 : isAuthorContent || isTagContent ? 6 : isSearchContent ? 5 : 3;

  const [postList, setPostList] = useState(dataEdges.slice(0, dataSliceLength));
  const [hasMore, setHasMore] = useState(data.edges.length > 3);
  const [isLoading, setIsLoading] = useState(false);
  const [postsData, setPostsData] = useState(data?.edges ?? []);
  const [pageInfo, setPageInfo] = useState(data?.pageInfo);
  const {endCursor, hasNextPage} = pageInfo || {};

  useEffect(() => {
    const isMore = postList.length < dataEdges.length;

    setHasMore(isMore);
  }, [postList]);

  useEffect(() => {
    setPostList(dataEdges.slice(0, dataSliceLength));
    setPostsData(data?.edges);
    setPageInfo(data?.pageInfo);
  }, [data?.edges]);

  const handleLoadMore = async () => {
    const currentLength = postList.length;
    const isMore = currentLength < dataEdges.length;
    const nextResultsLength = isInThePressContent ? 5 : isSearchContent ? 5 : 6;
    const nextResults = isMore ? dataEdges.slice(currentLength, currentLength + nextResultsLength) : [];
    setIsLoading(true);

    if (isMainContent || isCategoryContent || isAuthorContent || isTagContent) {
      const imageLoadPromises = nextResults.map(async (post) => {
        const templateImage = new Image();
        templateImage.src = post.node?.featuredImage?.node.sourceUrl ? post.node?.featuredImage?.node.sourceUrl : post.node?.firstImgPost;
        const templateImageLoaded = new Promise((resolve) => {
            templateImage.onload = () => resolve(true);
            templateImage.onerror = () => resolve(false);
        });
  
        return templateImageLoaded;
      });
  
      await Promise.all(imageLoadPromises);
    }

    setPostList([...postList, ...nextResults]);
    setIsLoading(false);
  };

  const setPosts = async (data) => {
    if (!data || ! data?.edges || ! data?.pageInfo) {
      return;
    }

    if (isMainContent || isCategoryContent || isAuthorContent || isTagContent) {
      const imageLoadPromises = data?.edges.map(async (post) => {
        const templateImage = new Image();
        templateImage.src = post.node?.featuredImage?.node.sourceUrl ? post.node?.featuredImage?.node.sourceUrl : post.node?.firstImgPost;
        const templateImageLoaded = new Promise((resolve) => {
            templateImage.onload = () => resolve(true);
            templateImage.onerror = () => resolve(false);
        });

        return templateImageLoaded;
      });

      await Promise.all(imageLoadPromises);
    }

    setPostsData(postsData.concat(data?.edges));
    setPageInfo({...data?.pageInfo});
    setIsLoading(false);
  };

  const loadMoreItems = async (endCursor = null) => {
    setIsLoading(true);

    const data = await fetch("/blog/api/load-more-posts", {
      method: "POST",
      body: JSON.stringify({
        isInThePressContent,
        isSearchContent,
        isAuthorContent,
        isTagContent,
        isCategoryContent,
        locale,
        endCursor,
        data: searchQueryString || authorSlug || tagSlug || categorySlug
      })
    });

    const response = await data.json();
    const loadPosts = response.data;

    setPosts(loadPosts ?? []);
  };

  return (
    <>
    {
      isCategoryContent ?
        postList?.map(({node}) => (
          <Card key={node.id} t={t} locale={locale} data={node} />
        ))
      :
      isInThePressContent ?
        postList?.map(({node}) => (
          <InThePressPost key={node.id} locale={locale} data={node} />
        ))
      :
      isSearchContent ?
        postList?.map(({node}) => (
          <SearchPost key={node.id} t={t} locale={locale} data={node} searchQueryString={searchQueryString} />
        ))
      :
        postList?.map(({node}) => (
          <Card key={node.id} t={t} locale={locale} data={node} />
        ))
    }
    {
      isCategoryContent ?
        postsData.slice(60)?.map(({node}) => (
          <Card key={node.id} t={t} locale={locale} data={node} />
        ))
      :
      isInThePressContent ?
        postsData.slice(60)?.map(({node}) => (
          <InThePressPost key={node.id} locale={locale} data={node} />
        ))
      :
      isSearchContent ?
        postsData.slice(5)?.map(({node}) => (
          <SearchPost key={node.id} t={t} locale={locale} data={node} searchQueryString={searchQueryString} />
        ))
      :
        postsData.slice(60)?.map(({node}) => (
          <Card key={node.id} t={t} locale={locale} data={node} />
        ))
    }
    {
      hasMore || hasNextPage ?
        <StyledLoadMorePosts {...rest}>
          <>
            <Button onClick={hasMore ? handleLoadMore : hasNextPage ? () => loadMoreItems(endCursor) : null} className={`load-more-btn ${isLoading ? "loading" : ""} ${isSearchContent || isInThePressContent ? "show" : ""}`} typeButton="transparent" label={t("Load more")} />

            {
              isMainContent || isCategoryContent || isAuthorContent || isTagContent ?
                <Button onClick={hasMore ? handleLoadMore : hasNextPage ? () => loadMoreItems(endCursor) : null} className={`load-more-mobile-btn ${isLoading ? "loading" : ""}`} typeButton="transparent" label={t("View all posts")} />
              : null
            }
          </>
        </StyledLoadMorePosts>
      :
        null
    }
    </>
  );
};

export default LoadMorePosts;
