import StyledLanguageSelector from "./styled-language-selector";
import PropTypes from "prop-types";
import { useState } from "react";
import { useRouter } from "next/router";
import languages from "@config/languages.json";
import InternalLink from "@components/common/internal-link";

const LanguageSelector = ({ locale, postUri, isPostPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const asPath = router.pathname === "/onlyoffice-in-the-press" || router.pathname === "/search" ? router.asPath : "/";

  const onCloseSelector = () => {
    if (isOpen === true) {
      setIsOpen(false);
    }
  };

  return (
    <StyledLanguageSelector
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => onCloseSelector()}
      onClick={() => setIsOpen(!isOpen)}
      className={`language-selector ${isOpen ? "is-open" : ""}`}
    >
      <button className="language-button">
        <span className={`flag-image ${locale}`}></span>
        <svg className="arrow-image" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5L0.535899 0.499999L7.4641 0.5L4 5Z" fill="#444444" />
        </svg>
      </button>

      {isOpen && (
        <ul className="language-list">
          {isPostPage ? (
            languages.map((language) => (
              <li className="language-item" key={language.shortKey}>
                <InternalLink
                  onClick={() => setIsOpen(false)}
                  className={`language-link ${language.shortKey} ${router.locale === language.shortKey ? "active" : ""}`}
                  href={postUri[language.locale] && `${postUri[language.locale].split("/").slice(3).join("/")}` || "/"}
                  locale={language.shortKey}
                >
                  <b>{language.shortKey === "zh-hans" ? "zh" : language.shortKey === "pt-br" ? "pt" : language.shortKey} </b> {language.longKey}
                </InternalLink>
              </li>
            ))
          ) : (
            languages.map((language) => (
              <li className="language-item" key={language.shortKey}>
                <InternalLink
                  onClick={() => setIsOpen(false)}
                  className={`language-link ${language.shortKey} ${router.locale === language.shortKey ? "active" : ""}`}
                  href={asPath}
                  locale={language.shortKey}
                >
                  <b>{language.shortKey === "zh-hans" ? "zh" : language.shortKey === "pt-br" ? "pt" : language.shortKey} </b> {language.longKey}
                </InternalLink>
              </li>
            ))
          )}
        </ul>
      )}
    </StyledLanguageSelector>
  );
};

LanguageSelector.propTypes = {
  locale: PropTypes.string,
  postUri: PropTypes.object,
  isPostPage: PropTypes.bool
};

export default LanguageSelector;
