import StyledLoadMorePosts from "./styled-load-more-posts";
import { useState, useEffect } from "react";
import { getAllPosts, getInThePressPosts, getSearchResults, getCategoryPosts, getAuthorPosts, getTagPosts } from "@lib/api";
import Card from "@components/screens/common/card";
import Button from "@components/common/button";
import InThePressPost from "@components/screens/in-the-press-content/in-the-press-post";
import SearchPost from "@components/screens/search-content/search-post";

const LoadMorePosts = ({ t, currentLanguage, data, isCategoryContent, isInThePressContent, isAuthorContent, isTagContent, searchQueryString, isSearchContent, isMainContent, authorSlug, tagSlug, categorySlug, ...rest }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [postsData, setPostsData] = useState(data?.edges ?? []);
  const [pageInfo, setPageInfo] = useState(data?.pageInfo);
  const {endCursor, hasNextPage} = pageInfo || {};

  useEffect( () => {
    setPostsData(data?.edges);
    setPageInfo(data?.pageInfo);
  }, [data?.edges]);

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
      await getInThePressPosts(currentLanguage, 3, `"${endCursor}"`) : 
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
        postsData.slice(15)?.map(({node}) => (
          <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
        ))
      :
      isInThePressContent ?
        postsData.slice(5)?.map(({node}) => (
          <InThePressPost key={node.id} currentLanguage={currentLanguage} data={node} />
        ))
      :
      isSearchContent ?
        postsData?.map(({node}) => (
          <SearchPost key={node.id} t={t} currentLanguage={currentLanguage} data={node} searchQueryString={searchQueryString} />
        ))
      :
        postsData?.map(({node}) => (
          <Card key={node.id} t={t} currentLanguage={currentLanguage} data={node} />
        ))
    }
    <StyledLoadMorePosts {...rest}>
      {
        hasNextPage ?
          isLoading ?
            <div className="load-more-loading-btn"></div>
          :
            <>
              <Button onClick={() => loadMoreItems(endCursor)} className={`load-more-btn ${isSearchContent || isInThePressContent ? "show" : ""}`} typeButton="transparent" label={t("Load more")} />

              {
                isMainContent || isCategoryContent || isAuthorContent || isTagContent ?
                  <Button onClick={() => loadMoreItems(endCursor)} className="load-more-mobile-btn" typeButton="transparent" label={t("View all posts")} />
                : null
              }
            </>
        :
          null
      }
    </StyledLoadMorePosts>
    </>
  );
};

export default LoadMorePosts;
