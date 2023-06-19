import { useState, useEffect } from "react";
import Router from 'next/router';
import InternalLink from "@components/common/internal-link";
import LanguageSelector from "@components/common/language-selector";
import SearchArea from "@components/common/search-area";
import Nav from './menu/nav/nav'
import StyledHeading from "./styled-heading";

const Menu = ({ t, currentLanguage, isMainContent, isSearchContent, stateMobile, setStateMobile }) => {
  const [windowCheck, setWindowCheck] = useState("undefined");
  const [windowCheckSearch, setWindowCheckSearch] = useState("undefined");
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const curLang = `https://www.onlyoffice.com${
    currentLanguage === "en" ? "" : 
    currentLanguage === "zh-hans" ? "/zh" : 
    currentLanguage === "pt-br" ? "/pt" : `/${currentLanguage}` 
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
    if (windowCheck && stateMobile && !e.target.closest(".nav-item-links")) {
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
    <StyledHeading className={`navbar ${stateMobile ? "is-open" : ""}`} onMouseLeave={onCloseMenu}>
      <span onClick={toggleMobile} className="nav-items-mobile" />
      <span className="nav-item-logo">
        <InternalLink href={curLang}>
          <img src="https://static-blog.onlyoffice.com/images/logo/logo.svg" alt="logo"/>
        </InternalLink>
      </span>
      <div className="overlay"></div>
      <Nav
        currentLanguage={currentLanguage}
        className="nav-item-links"
        t={t}
      />
      {isMainContent || isSearchContent !== true && 
      <SearchArea 
        onClick={onClickSearch} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        handleSearchFormSubmit={handleSearchFormSubmit}
        searchActive={searchActive} 
        t={t} 
        placeholder={t("Search blog")}
      />}
      <LanguageSelector t={t} currentLanguage={currentLanguage} />
    </StyledHeading>
  );
};

export default Menu;
