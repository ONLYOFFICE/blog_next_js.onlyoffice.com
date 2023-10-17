import Link from "next/link";
import languages from "@config/languages.json";
import { useRouter } from "next/router";

import { StyledItem, StyledPanelView } from "./styled-language-selector";

const ItemsList = ({ isOpen, onCloseSelector, postUri, isPostContent }) => {
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
    { locale: "zh_CN", shortKey: "zh-hans" }
  ];

  return (
    <StyledPanelView isOpen={isOpen} className="lng-selector">
      {
        isPostContent ?
          languageItems.map(language => (
            <StyledItem className="language-item" key={language.locale}>
              <Link
                className={`language-item-link ${language.shortKey}`}
                href={postUri[language.locale] && `${postUri[language.locale].split("/").slice(3).join("/")}` || "/"}
                locale={language.shortKey}
                onClick={onCloseSelector}
              ></Link>
            </StyledItem>
          ))
        :
          languages.map((language) => (
            <StyledItem className="language-item" key={language.key}>
              <Link className={`language-item-link ${language.shortKey}`} href={asPath} locale={language.shortKey} onClick={onCloseSelector}></Link>
            </StyledItem>
          ))
      }
    </StyledPanelView>
  );
}

export default ItemsList;