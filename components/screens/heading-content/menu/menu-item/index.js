import StyledMenuItem from "./styled-menu-item";
import { useState, useEffect } from "react";
import Heading from "@components/common/heading";

const MenuItem = ({ children, heading, navHidden, setNavHidden, className }) => {
  const windowCheck = typeof window !== "undefined" && window.innerWidth <= 1024;
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setNavHidden(!navHidden);
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setShowMenu(false);
    }

    let resizeWindow = () => {
      if (window.innerWidth > 1024) {
        setShowMobileMenu(false);
        setNavHidden(false);
      }
    };

    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  return (
    <StyledMenuItem
      onMouseLeave={() => setShowMenu(false)}
      isOpen={showMobileMenu}
      className={`nav-item ${windowCheck && showMobileMenu ? "active" : ""} ${className ? className : ""}`}
    >
      <button
        className={`heading-nav-item ${showMenu ? "active": ""}`}
        onClick={toggleMenu}
        onMouseEnter={() => setShowMenu(true)}
      >
        {heading}
      </button>
      {(windowCheck ? showMobileMenu : showMenu) && (
        <div className="menu-items-wrapper">
          {windowCheck &&
            <Heading onClick={toggleMenu} className="mobile-heading-nav-item" label={heading} />
          }
          {children}
        </div>
      )}
    </StyledMenuItem>
  );
};

export default MenuItem;
