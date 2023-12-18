import StyledLanguageSelector from "./styled-language-selector";
import { useState } from "react";
import { useRouter } from "next/router";
import languages from "@config/languages.json";
import InternalLink from "@components/common/internal-link";

const LanguageSelector = ({ locale, postUri, isPostContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const asPath = router.pathname === "/onlyoffice-in-the-press" || router.pathname === "/search" ? router.asPath : "/";

  const languageItems = [
    { locale: "en_US", shortKey: "en" },
    { locale: "fr_FR", shortKey: "fr" },
    { locale: "de_DE", shortKey: "de" },
    { locale: "es_ES", shortKey: "es" },
    { locale: "pt_BR", shortKey: "pt-br" },
    { locale: "it_IT", shortKey: "it" },
    { locale: "cs_CZ", shortKey: "cs" },
    { locale: "ja", shortKey: "ja" },
    { locale: "zh_CN", shortKey: "zh-hans" },
    { locale: "el", shortKey: "el" }
  ];

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
        <div className="arrow-image"></div>
      </button>

      {isOpen &&
        <ul className="language-list">

          {isPostContent ?
            languageItems.map((language) => (
              <li className="language-item" key={language.key}>
                <InternalLink 
                  onClick={() => setIsOpen(false)} 
                  className={`language-link ${language.shortKey}`} 
                  href={postUri[language.locale] && `${postUri[language.locale].split("/").slice(3).join("/")}` || "/"} 
                  locale={language.shortKey}
                >
                </InternalLink>
              </li>
            ))
          :
            languages.map((language) => (
              <li className="language-item" key={language.key}>
                <InternalLink 
                  onClick={() => setIsOpen(false)} 
                  className={`language-link ${language.shortKey}`} 
                  href={asPath} 
                  locale={language.shortKey}
                >
                </InternalLink>
              </li>
            ))
          }
        </ul>
      }
    </StyledLanguageSelector>
  );
};

export default LanguageSelector;
