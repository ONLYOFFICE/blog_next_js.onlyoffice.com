import StyledLoadMorePosts from "./styled-load-more-posts";
import { useState, useEffect } from "react";
import Card from "@components/screens/common/card";
import Button from "@components/common/button";
import InThePressPost from "@components/screens/in-the-press-content/in-the-press-post";
import SearchPost from "@components/screens/search-content/search-post";

const LoadMorePosts = ({ t, locale, data, isCategoryPage, isInThePressPage, isAuthorPage, isTagPage, searchQueryString, isSearchPage, isMainPage, authorSlug, tagSlug, categorySlug, ...rest }) => {
  const dataEdges = isCategoryPage ? data.edges.slice(15) : isInThePressPage ? data?.edges.slice(5) : data?.edges;
  const dataSliceLength = isCategoryPage || isInThePressPage ? 0 : isAuthorPage || isTagPage ? 6 : isSearchPage ? 5 : 3;

  const [postList, setPostList] = useState(dataEdges?.slice(0, dataSliceLength));
  const [hasMore, setHasMore] = useState(data?.edges.length > 3);
  const [isLoading, setIsLoading] = useState(false);
  const [postsData, setPostsData] = useState(data?.edges ?? []);
  const [pageInfo, setPageInfo] = useState(data?.pageInfo);
  const {endCursor, hasNextPage} = pageInfo || {};

  useEffect(() => {
    const isMore = postList?.length < dataEdges?.length;

    setHasMore(isMore);
  }, [postList]);

  useEffect(() => {
    setPostList(dataEdges?.slice(0, dataSliceLength));
    setPostsData(data?.edges);
    setPageInfo(data?.pageInfo);
  }, [data?.edges]);

  const handleLoadMore = async () => {
    const currentLength = postList.length;
    const isMore = currentLength < dataEdges?.length;
    const nextResultsLength = isInThePressPage ? 5 : isSearchPage ? 5 : 6;
    const nextResults = isMore ? dataEdges?.slice(currentLength, currentLength + nextResultsLength) : [];
    setIsLoading(true);

    if (isMainPage || isCategoryPage || isAuthorPage || isTagPage) {
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

    if (isMainPage || isCategoryPage || isAuthorPage || isTagPage) {
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

    if (isSearchPage) {
      const uniqueNextResults = data.edges.filter(nextResult => !postsData?.some(post => post.node.id === nextResult.node.id));
      setPostsData(postsData?.concat(uniqueNextResults));
    } else {
      setPostsData(postsData?.concat(data?.edges));
    }

    setPageInfo({...data?.pageInfo});
    setIsLoading(false);
  };

  const loadMoreItems = async (endCursor = null) => {
    setIsLoading(true);

    const data = await fetch("/blog/api/load-more-posts", {
      method: "POST",
      body: JSON.stringify({
        isInThePressPage,
        isSearchPage,
        isAuthorPage,
        isTagPage,
        isCategoryPage,
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
      {isCategoryPage ? (
        postList?.map(({node}) => (
          <Card key={node.id} t={t} locale={locale} data={node} />
        ))
      ) : isInThePressPage ? (
        postList?.map(({node}) => (
          <InThePressPost key={node.id} locale={locale} data={node} />
        ))
      ) : isSearchPage ? (
        postList?.map(({node}) => (
          <SearchPost key={node.id} t={t} locale={locale} data={node} searchQueryString={searchQueryString} />
        ))
      ) : (
        postList?.map(({node}) => (
          <Card key={node.id} t={t} locale={locale} data={node} />
        ))
      )}

      {isCategoryPage ? (
        postsData?.slice(60)?.map(({node}) => (
          <Card key={node.id} t={t} locale={locale} data={node} />
        ))
      ) : isInThePressPage ? (
        postsData?.slice(60)?.map(({node}) => (
          <InThePressPost key={node.id} locale={locale} data={node} />
        ))
      ) : isSearchPage ? (
        postsData?.slice(5)?.map(({node}) => (
          <SearchPost key={node.id} t={t} locale={locale} data={node} searchQueryString={searchQueryString} />
        ))
      ) : (
        postsData?.slice(60)?.map(({node}) => (
          <Card key={node.id} t={t} locale={locale} data={node} />
        ))
      )}

      {hasMore || hasNextPage ? (
        <StyledLoadMorePosts {...rest}>
          <>
            <Button onClick={hasMore ? handleLoadMore : hasNextPage ? () => loadMoreItems(endCursor) : null} className={`load-more-btn ${isLoading ? "loading" : ""} ${isSearchPage || isInThePressPage ? "show" : ""}`} typeButton="transparent" label={t("Load more")} />

            {isMainPage || isCategoryPage || isAuthorPage || isTagPage ? (
              <Button onClick={hasMore ? handleLoadMore : hasNextPage ? () => loadMoreItems(endCursor) : null} className={`load-more-mobile-btn ${isLoading ? "loading" : ""}`} typeButton="transparent" label={t("View all posts")} />
            ) : (
              null
            )}
          </>
        </StyledLoadMorePosts>
      ) : (
        null
      )}
    </>
  );
};

export default LoadMorePosts;
