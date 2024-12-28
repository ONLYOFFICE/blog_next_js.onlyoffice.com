import { StyledHeader, GlobalStyles } from "./styled-header";
import { useState, useEffect, useRef } from "react";
import Router from "next/router";
import { HeaderMenu } from "onlyoffice-react-ui-kit/header-menu";
import "onlyoffice-react-ui-kit/header-menu/css";
import InternalLink from "@components/common/internal-link";
import LanguageSelector from "@components/common/language-selector";
import SearchArea from "@components/common/search-area";
import PopupDocSpace from "../common/popup-docspace";
import AdventMobileOnly from "@components/screens/common/advent-mobile";

const Header = ({ t, locale, isMainPage, isSearchPage, stateMobile, setStateMobile, postUri, isPostPage }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchAreaRef = useRef(null);
  const searchRef = useRef(null);

  const curLang = `https://www.onlyoffice.com${locale === "en" || locale === "el" || locale === "hi" || locale === "ar" || locale === "sr" || locale === "hy" ? "" : locale === "zh-hans" ? "/zh" : locale === "pt-br" ? "/pt" : `/${locale}`}`;

  useEffect(() => {
    const modalClosed = localStorage.getItem("modalClosed");

    if (!modalClosed) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 1024 && stateMobile) {
      const handleClickOutside = (e) => {
        if (!e.target.closest(".oo-hm")) {
          setStateMobile(false);
        };
      };

      window.addEventListener("touchstart", handleClickOutside);

      return () => {
        window.removeEventListener("touchstart", handleClickOutside);
      };
    }
  }, [stateMobile]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchShow && searchAreaRef.current && !searchAreaRef.current.contains(e.target)) {
        setSearchShow(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchShow]);

  const handleSearchFormSubmit = async (e) => {
    e.preventDefault();

    Router.push(`/search?s=${searchQuery}`);
    return null;
  };

  const onClickSearchBtn = () => {
    setSearchShow(true);
    setTimeout(() => {
      searchRef.current.focus();
    }, 0);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem("modalClosed", "true");
  };

  return (
    <StyledHeader
      onMouseLeave={() => setStateMobile(false)}
      className={`navbar ${stateMobile ? "is-open" : ""} ${isMainPage || isSearchPage ? "is-main" : ""}`}
      locale={locale}
    >
      <AdventMobileOnly t={t} locale={locale}></AdventMobileOnly>
      {isModalOpen && (
        <PopupDocSpace onClose={handleCloseModal} locale={locale} t={t} />
      )}
      <GlobalStyles stateMobile={stateMobile} />
      <div className="nav-container">
        <button onClick={() => setStateMobile(true)} className="nav-btn-mobile"></button>
        <InternalLink className="nav-item-logo" href={curLang}>
          <img src="/blog/images/logo/logo.svg" alt="logo" />
        </InternalLink>
        <div className="overlay"></div>
        {!searchShow && (
          <HeaderMenu locale={locale} isOpen={stateMobile} />
        )}
        {isMainPage || isSearchPage !== true && (
          <>
            {searchShow && (
              <div ref={searchAreaRef} className="nav-search-area">
                <SearchArea
                  ref={searchRef}
                  t={t}
                  locale={locale}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  handleSearchFormSubmit={handleSearchFormSubmit}
                  placeholder={t("Search blog")}
                  searchHeader={true}
                  setSearchShow={setSearchShow}
                />
              </div>
            )}
            {!searchShow && (
              <button onClick={onClickSearchBtn} className="nav-search-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.9629 10.0682C21.5588 14.1003 17.9565 17.0419 13.917 16.6385C13.0387 16.5508 12.2121 16.3122 11.4603 15.951C11.042 15.75 10.5339 15.8015 10.2051 16.1292L5.01805 21.2983C4.62849 21.6865 3.99857 21.6873 3.60805 21.3001L2.71433 20.4139C2.32051 20.0234 2.31971 19.387 2.71256 18.9955L7.87817 13.8477C8.21112 13.5159 8.26119 12.9999 8.0529 12.5786C7.46469 11.3886 7.19255 10.025 7.33465 8.60736C7.73881 4.57526 11.3411 1.6336 15.3806 2.03699C19.4201 2.44039 22.3671 6.03607 21.9629 10.0682ZM19.8732 9.85949C19.5845 12.7396 17.0114 14.8407 14.1261 14.5526C11.2407 14.2645 9.13571 11.6961 9.4244 8.81605C9.71309 5.93598 12.2862 3.83479 15.1715 4.12293C18.0569 4.41107 20.1619 6.97941 19.8732 9.85949Z" fill="#AAAAAA"/>
                </svg>
              </button>
            )}
          </>
        )}
        <div className="nav-selector-wrapper">
          <LanguageSelector t={t} locale={locale} postUri={postUri} isPostPage={isPostPage} />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
