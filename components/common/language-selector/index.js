import { useEffect, useState } from "react";

import StyledLanguageSelector from "./styled-language-selector";
import ItemsList from "./items-list";

const LanguageSelector = (props) => {
  const { currentLanguage, t, postUri, isPostContent } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    typeof window !== "undefined" &&
      isOpen &&
      window.addEventListener("click", handleClickOutside);
      window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", resizeHandler);
    };
  });

  const handleClickOutside = (e) => {
    if (
      isOpen &&
      (!e.target.closest(".lng-selector") ||
        e.target.closest(".close-button-img"))
    ) {
      onCloseSelector();
    }
  };

  const resizeHandler = (e) => {
    if (window.innerWidth < 769) {
      setIsOpen(false);
    }
  };

  const onClickHandler = (e) => {
    e.stopPropagation();
    if (e.target.closest(".flag-image") || e.target.closest(".arrow-image")) {
      setIsOpen(!isOpen);
      props.onClick && props.onClick(e);
    }
  };

  const onCloseSelector = () => {
    setIsOpen(false);
  };

  return (
    <StyledLanguageSelector
      onClick={onClickHandler}
      className="language-selector"
    >
      <span className={`flag-image ${currentLanguage}`}></span>
      {/*eslint-disable*/}
      <div className={`arrow-image ${isOpen ? "is-open" : ""}`}></div>
      {/*eslint-enable*/}
      <ItemsList
        className={`languages-list lng-selector ${
          isOpen ? "language-selector-open" : "language-selector-closed"
        }`}
        t={t}
        isOpen={isOpen}
        onCloseSelector={onCloseSelector}
        postUri={postUri}
        isPostContent={isPostContent}
      />
    </StyledLanguageSelector>
  );
};

export default LanguageSelector;
