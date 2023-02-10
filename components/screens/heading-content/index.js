import { useState, useEffect } from "react";

import InternalLink from "@components/common/internal-link";
import LanguageSelector from "@components/common/language-selector";
import Nav from './menu/nav/nav'
import StyledHeading from "./styled-heading";

import logo from "@public/images/logo/logo.svg"
import mobMenu from "@public/images/icons/mob-menu.svg"
import { ReactSVG } from "react-svg";

const Menu = ({ t, currentLanguage }) => {
  const [windowCheck, setWindowCheck] = useState("undefined");
  const [stateMobile, setStateMobile] = useState(false);
  const curLang = currentLanguage === "en" ? "/" : `/${currentLanguage}/`;

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
      <LanguageSelector t={t} currentLanguage={currentLanguage} />
    </StyledHeading>
  );
};

export default Menu;
