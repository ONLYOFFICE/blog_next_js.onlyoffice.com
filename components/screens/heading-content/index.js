import { StyledHeadingContent, GlobalStyles } from "./styled-heading-content";
import Nav from "./menu/nav/nav";
import { useState, useEffect } from "react";
import Router from "next/router";
import InternalLink from "@components/common/internal-link";
import LanguageSelector from "@components/common/language-selector";
import SearchArea from "@components/common/search-area";
import PopupDocSpace from "../common/popup-docspace";

const HeadingContent = ({ t, locale, isMainContent, isSearchContent, stateMobile, setStateMobile, postUri, isPostContent }) => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const curLang = `https://www.onlyoffice.com${
    locale === "en" || locale === "el" || locale === "hi" || locale === "ar" || locale === "sr" || locale === "hy" ? "" :
    locale === "zh-hans" ? "/zh" :
    locale === "pt-br" ? "/pt" : `/${locale}`
  }`;


  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const modalClosed = localStorage.getItem("modalClosed");

    if (!modalClosed) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 20000); // Открываем модальное окно через 20 секунд

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem("modalClosed", "true"); // Устанавливаем метку, что модальное окно закрыто
  };

  useEffect(() => {

    if (typeof window !== "undefined" && window.innerWidth <= 1024 && stateMobile) {
      const handleClickOutside = (e) => {
        if (!e.target.closest(".nav")) {
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
    if (typeof window !== "undefined" && window.innerWidth <= 1530) {
      const handleClickOutsideSearch = (e) => {
        if (searchActive && !e.target.closest(".navbar .search_area")) {
          setSearchActive(false);
        }
      };

      window.addEventListener("touchstart", handleClickOutsideSearch);

      return () => {
        window.removeEventListener("touchstart", handleClickOutsideSearch);
      };
    }
  }, [searchActive]);

  const handleSearchFormSubmit = async (e) => {
    e.preventDefault();

    Router.push(`/search?s=${searchQuery}`);
    return null;
  };

  const onClickSearch = () => {
    if (window.innerWidth <= 1530) {
      setSearchActive(true);
    }
  };

  return (
    <StyledHeadingContent onMouseLeave={() => setStateMobile(false)} className={`navbar ${stateMobile ? "is-open" : ""}`}>
       {isModalOpen && <PopupDocSpace onClose={handleCloseModal} locale={locale} t={t}/>}
      <GlobalStyles stateMobile={stateMobile} />
      <button onClick={() => setStateMobile(true)} className="nav-btn-mobile"></button>
      <InternalLink className="nav-item-logo" href={curLang}>
        <img src="/blog/images/logo/logo.svg" alt="logo" />
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
