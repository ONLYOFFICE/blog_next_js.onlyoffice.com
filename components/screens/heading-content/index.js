import { useState, useEffect } from "react";
import Router from 'next/router';
import InternalLink from "@components/common/internal-link";
import LanguageSelector from "@components/common/language-selector";
import SearchArea from "@components/common/search-area";
import Nav from './menu/nav/nav'
import StyledHeading from "./styled-heading";

import logo from "@public/images/logo/logo.svg"
import mobMenu from "@public/images/icons/mob-menu.svg"
import { ReactSVG } from "react-svg";

const Menu = ({ t, currentLanguage, isMainContent, isSearchContent }) => {
  const [windowCheck, setWindowCheck] = useState("undefined");
  const [stateMobile, setStateMobile] = useState(false);
  const [windowCheckSearch, setWindowCheckSearch] = useState("undefined");
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const curLang = currentLanguage === "en" ? "/" : `/${currentLanguage}/`;

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
    <StyledHeading
      className="navbar"
      onMouseLeave={onCloseMenu}
    >
      <img
        src={mobMenu.src}
        className="nav-items-mobile"
        onClick={toggleMobile}
      />
      <span className="nav-item-logo">
        <InternalLink href={curLang}>
          <ReactSVG src={logo.src} alt="logo"/>
        </InternalLink>
      </span>
      <div className={`overlay ${stateMobile ? "active" : ""}`}></div>
      <Nav
        currentLanguage={currentLanguage}
        className={`nav-item-links ${stateMobile ? "is-open" : ""}`}
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
