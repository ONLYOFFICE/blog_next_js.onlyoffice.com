import StyledLoadMorePosts from "./styled-load-more-posts";
import { useState, useEffect } from "react";
import { getAllPosts, getInThePressPosts, getSearchResults, getCategoryPosts, getAuthorPosts, getTagPosts } from "@lib/api";
import Card from "@components/screens/common/card";
import Button from "@components/common/button";
import InThePressPost from "@components/screens/in-the-press-content/in-the-press-post";
import SearchPost from "@components/screens/search-content/search-post";

const LoadMorePosts = ({ t, currentLanguage, data, isCategoryContent, isInThePressContent, isAuthorContent, isTagContent, searchQueryString, isSearchContent, isMainContent, authorSlug, tagSlug, categorySlug, ...rest }) => {
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

  useEffect( () => {
    setPostList(dataEdges.slice(0, dataSliceLength));
    setPostsData(data?.edges);
    setPageInfo(data?.pageInfo);
  }, [data?.edges]);

  const handleLoadMore = () => {
    const currentLength = postList.length;
    const isMore = currentLength < dataEdges.length;
    const nextResultsLength = isInThePressContent ? 5 : isSearchContent ? 5 : 6;
    const nextResults = isMore ? dataEdges.slice(currentLength, currentLength + nextResultsLength) : [];
    
    setPostList([...postList, ...nextResults]);
  };

  const setPosts = (data) => {
    if (!data || ! data?.edges || ! data?.pageInfo) {
      return;
    }

    const newPosts = postsData.concat(data?.edges);
    setPostsData(newPosts);
    setPageInfo({...data?.pageInfo});
  };

  const loadMoreItems = async (endCursor = null) => {
    setIsLoading(true);

    const loadPosts = 
    isInThePressContent ? 
      await getInThePressPosts(currentLanguage, 5, `"${endCursor}"`) : 
    isSearchContent ? 
      await getSearchResults(currentLanguage, 5, `"${endCursor}"`, searchQueryString)
    :
    isAuthorContent ?
      await getAuthorPosts(currentLanguage, 6, `"${endCursor}"`, authorSlug)
    :
    isTagContent ?
      await getTagPosts(currentLanguage, 6, `"${endCursor}"`, tagSlug)
    :
    isCategoryContent ?
      await getCategoryPosts(currentLanguage, 6, `"${endCursor}"`, categorySlug)
    :
      await getAllPosts(currentLanguage, 6, `"${endCursor}"`, "");

    loadPosts.edges.length > 0 && setIsLoading(false);
    setPosts(loadPosts ?? []);
  };

  return (
    <>
    {
      isCategoryContent ?
        postList?.map(({node}) => (
          <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
        ))
      :
      isInThePressContent ?
        postList?.map(({node}) => (
          <InThePressPost key={node.id} currentLanguage={currentLanguage} data={node} />
        ))
      :
      isSearchContent ?
        postList?.map(({node}) => (
          <SearchPost key={node.id} t={t} currentLanguage={currentLanguage} data={node} searchQueryString={searchQueryString} />
        ))
      :
        postList?.map(({node}) => (
          <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
        ))
    }
    {
      isCategoryContent ?
        postsData.slice(60)?.map(({node}) => (
          <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
        ))
      :
      isInThePressContent ?
        postsData.slice(60)?.map(({node}) => (
          <InThePressPost key={node.id} currentLanguage={currentLanguage} data={node} />
        ))
      :
      isSearchContent ?
        postsData.slice(5)?.map(({node}) => (
          <SearchPost key={node.id} t={t} currentLanguage={currentLanguage} data={node} searchQueryString={searchQueryString} />
        ))
      :
        postsData.slice(60)?.map(({node}) => (
          <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
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
