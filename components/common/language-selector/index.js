import StyledLanguageSelector from "./styled-language-selector";
import { useState } from "react";
import { useRouter } from "next/router";
import languages from "@config/languages.json";
import InternalLink from "@components/common/internal-link";

const LanguageSelector = ({ locale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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
          {languages.map((language) => (
            <li className="language-item" key={language.key}>
              <InternalLink onClick={() => setIsOpen(false)} className={`language-link ${language.shortKey}`} href={router.asPath} locale={language.shortKey}></InternalLink>
            </li>
          ))}
        </ul>
      }
    </StyledLanguageSelector>
  );
};

export default LanguageSelector;
