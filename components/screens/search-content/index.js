import StyledSearchContent from "./styled-search-content";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import LoadMorePosts from "@components/screens/common/load-more-posts";
import RecentPosts from "@components/screens/common/widgets/recent-posts";
import FollowUs from "@components/screens/common/widgets/follow-us";
import SearchArea from "@components/common/search-area";
import Heading from "@components/common/heading";

const SearchContent = ({ t, locale, isSearchContent, recentPosts }) => {
  const router = useRouter();
  const searchQueryString = router.query.s;
  const [searchQuery, setSearchQuery] = useState(searchQueryString);
  const [queryResults, setQueryResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSearchFormSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    Router.push(`/search?s=${searchQuery}`);

    const data = await fetch("/blog/api/search-results", {
      method: "POST",
      body: JSON.stringify({
        locale,
        searchQuery: searchQuery
      })
    });

    const response = await data.json();

    setQueryResults(response.data ?? {});
    setIsLoading(false);

    return null;
  };

  useEffect(() => {
    if (searchQueryString) {
      setIsLoading(true);

      const fetchData = async () => {
        const data = await fetch("/blog/api/search-results", {
          method: "POST",
          body: JSON.stringify({
            locale,
            searchQuery: searchQueryString
          })
        });

        const response = await data.json();

        setQueryResults(response.data ?? {});
        setIsLoading(false);
      };

      fetchData();
    }
  }, [searchQueryString, locale]);

  return (
    <StyledSearchContent>
      <div className="wrapper">
        <div className="content">
          <Breadcrumbs className="breadcrumbs" t={t} isSearchContent={isSearchContent} searchQuery={router?.query.s} locale={locale} />

          <SearchArea 
            label={t("Search")}
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            handleSearchFormSubmit={handleSearchFormSubmit}
          />
          
          <div className="posts">
            { 
              isLoading ?
                <div className="loading"></div>
              :
                queryResults.edges?.length ?
                  <LoadMorePosts 
                    className="search-posts"
                    t={t} 
                    locale={locale} 
                    data={queryResults} 
                    searchQueryString={searchQueryString} 
                    isSearchContent={isSearchContent}
                  />
                :
                  <div className="no-results">
                    <Heading level={3}>{t("No results matching your query could be found")}</Heading>
                    <div className="no-results-bg"></div>
                  </div>
            }
          </div>
        </div>

        <div className="sidebar">
          <RecentPosts t={t} locale={locale} data={recentPosts} />
          <FollowUs t={t} locale={locale} />
        </div>
      </div>
    </StyledSearchContent>
  );
};

export default SearchContent;
