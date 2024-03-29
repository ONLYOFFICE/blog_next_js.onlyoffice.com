import { useState, useEffect } from "react";

import Heading from "@components/common/heading";
import { StyledNavMenu, StyledMenuItemsWrapper } from "./styled-navmenu";

const MenuItem = ({ children, heading, ...rest }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleHoverMenu = () => {
    setShowMenu(true);
  };

  const handleLeaveMenu = () => {
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const windowCheck =
    typeof window !== "undefined" && window.innerWidth <= 1024;

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setShowMenu(false);
    }
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, [windowWidth, windowHeight]);

  return (
    <StyledNavMenu
      className="nav-item"
      {...rest}
      onMouseLeave={handleLeaveMenu}
    >
      <Heading
        className={`heading-nav-item ${showMenu ? "active": ""}`}
        label={heading}
        as="span"
        level={2}
        onClick={toggleMenu}
        onMouseEnter={handleHoverMenu}
      />
      {(windowCheck ? showMobileMenu : showMenu) && (
        <>
          <StyledMenuItemsWrapper
            isOpen={showMobileMenu}
            className="menu-items-wrapper"
          >
            {windowCheck && (
              <Heading
                className="mobile-heading-nav-item"
                label={heading}
                onClick={toggleMenu}
              />
            )}
            {children}
          </StyledMenuItemsWrapper>
        </>
      )}
    </StyledNavMenu>
  );
};

export default MenuItem;
