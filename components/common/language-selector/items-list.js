import Link from "next/link";
import languages from "@config/languages.json";

import { StyledItem, StyledPanelView } from "./styled-language-selector";

export default function LangsList({ isOpen, onCloseSelector }) {
  const renderItemList = () => {
    return languages.map((language) => {
      return (
        <StyledItem className="language-item" key={language.key}>
          <Link className={`language-item-link ${language.shortKey}`} href="/" locale={language.shortKey} onClick={onCloseSelector}></Link>
        </StyledItem>
      );
    });
  };

  const renderPanelView = () => {
    const itemsList = renderItemList();
    return (
      <StyledPanelView isOpen={isOpen} className="lng-selector">
        {itemsList}
      </StyledPanelView>
    );
  };

  const panelView = renderPanelView();

  return panelView;
}
