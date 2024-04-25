import { useState, useEffect } from "react";
import Router from 'next/router';
import InternalLink from "@components/common/internal-link";
import LanguageSelector from "@components/common/language-selector";
import SearchArea from "@components/common/search-area";
import Nav from './menu/nav/nav'
import StyledHeadingContent from "./styled-heading-content";

const HeadingContent = ({ t, locale, isMainContent, isSearchContent, stateMobile, setStateMobile, postUri, isPostContent }) => {
  const [windowCheck, setWindowCheck] = useState("undefined");
  const [windowCheckSearch, setWindowCheckSearch] = useState("undefined");
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const curLang = `https://www.onlyoffice.com${
    locale === "en" || locale === "el" || locale === "hi" || locale === "ar" || locale === "sr" || locale === "hy" ? "" :
    locale === "zh-hans" ? "/zh" :
    locale === "pt-br" ? "/pt" : `/${locale}`
  }`;

  const handleSearchFormSubmit = async (e) => {
    e.preventDefault();

    Router.push(`/search?s=${searchQuery}`);
    return null;
  };

  useEffect(() => {
    if (typeof window !== windowCheck) {
      setWindowCheck(window.innerWidth <= 1050);
    }
  }, [windowCheck]);

  useEffect(() => {
    window.addEventListener("touchstart", handleClickOutside);
    return () => {
      window.removeEventListener("touchstart", handleClickOutside);
    };
  }, [stateMobile]);

  useEffect(() => {
    if (typeof window !== windowCheckSearch) {
      setWindowCheckSearch(window.innerWidth <= 1530);
    }
  }, [windowCheckSearch]);

  useEffect(() => {
    window.addEventListener("touchstart", handleClickOutsideSearch);
    return () => {
      window.removeEventListener("touchstart", handleClickOutsideSearch);
    };
  }, [searchActive]);

  const toggleMobile = () => {
    setStateMobile(true);
  };

  const onCloseMenu = () => {
    setStateMobile(false);
  };

  const handleClickOutside = (e) => {
    if (windowCheck && stateMobile && !e.target.closest(".nav")) {
      onCloseMenu();
    }
  };

  const handleClickOutsideSearch = (e) => {
    if (windowCheckSearch && searchActive && !e.target.closest(".navbar .search_area")) {
      setSearchActive(false);
    }
  };

  const onClickSearch = () => {
    if (window.innerWidth <= 1530) {
      setSearchActive(true);
    }
  };

  return (
    <StyledHeadingContent className={`navbar ${stateMobile ? "is-open" : ""}`} onMouseLeave={onCloseMenu}>
      <button onClick={toggleMobile} className="nav-btn-mobile"></button>
      <InternalLink className="nav-item-logo" href={curLang}>
        <img src="/blog/images/logo/logo.svg" alt="logo"/>
      </InternalLink>
      <div className="overlay"></div>
      <Nav locale={locale} t={t} />
      {isMainContent || isSearchContent !== true && 
        <SearchArea 
          onClick={onClickSearch} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          handleSearchFormSubmit={handleSearchFormSubmit}
          searchActive={searchActive} 
          t={t} 
          placeholder={t("Search blog")}
        />
      }
      <div className="nav-selector-wrapper">
        <LanguageSelector t={t} locale={locale} postUri={postUri} isPostContent={isPostContent} />
      </div>
    </StyledHeadingContent>
  );
};

export default HeadingContent;
