import Link from "next/link";
import languages from "@config/languages.json";
import { useRouter } from "next/router";

import { StyledItem, StyledPanelView } from "./styled-language-selector";

const ItemsList = ({ isOpen, onCloseSelector, alternatePostUri, isPostContent }) => {
  const router = useRouter();
  const asPath = router.pathname === "/onlyoffice-in-the-press" || router.pathname === "/search" ? router.asPath : "/";

  return (
    <StyledPanelView isOpen={isOpen} className="lng-selector">
      {
        isPostContent ?
          <>
            <StyledItem className="language-item">
              <Link className="language-item-link en" href={alternatePostUri.enPostUri !== null || undefined ? alternatePostUri.enPostUri?.edges[0].node.uri : "/"} locale="en" onClick={onCloseSelector}></Link>
            </StyledItem>
            <StyledItem className="language-item">
              <Link className="language-item-link fr" href={alternatePostUri.frPostUri !== null || undefined ? alternatePostUri.frPostUri?.edges[0].node.uri : "/"} locale="fr" onClick={onCloseSelector}></Link>
            </StyledItem>
              <StyledItem className="language-item">
              <Link className="language-item-link de" href={alternatePostUri.dePostUri !== null || undefined ? alternatePostUri.dePostUri?.edges[0].node.uri : "/"} locale="de" onClick={onCloseSelector}></Link>
            </StyledItem>
            <StyledItem className="language-item">
              <Link className="language-item-link pt-br" href={alternatePostUri.ptPostUri !== null || undefined ? alternatePostUri.ptPostUri?.edges[0].node.uri : "/"} locale="pt-br" onClick={onCloseSelector}></Link>
            </StyledItem>
            <StyledItem className="language-item">
              <Link className="language-item-link it" href={alternatePostUri.itPostUri !== null || undefined ? alternatePostUri.itPostUri?.edges[0].node.uri : "/"} locale="it" onClick={onCloseSelector}></Link>
            </StyledItem>
            <StyledItem className="language-item">
              <Link className="language-item-link cs" href={alternatePostUri.csPostUri !== null || undefined ? alternatePostUri.csPostUri?.edges[0].node.uri : "/"} locale="cs" onClick={onCloseSelector}></Link>
            </StyledItem>
            <StyledItem className="language-item">
              <Link className="language-item-link ja" href={alternatePostUri.jaPostUri !== null || undefined ? alternatePostUri.jaPostUri?.edges[0].node.uri : "/"} locale="ja" onClick={onCloseSelector}></Link>
            </StyledItem>
            <StyledItem className="language-item">
              <Link className="language-item-link zh-hans" href={alternatePostUri.zhPostUri !== null || undefined ? alternatePostUri.zhPostUri?.edges[0].node.uri : "/"} locale="zh-hans" onClick={onCloseSelector}></Link>
            </StyledItem>
          </>
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