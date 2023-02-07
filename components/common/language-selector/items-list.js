import Link from "next/link";
import languages from "@config/languages.json";

import { StyledItem, StyledPanelView } from "./styled-language-selector";

export default function LangsList({ isOpen }) {
  const handleClick = (e) => {
    e.preventDefault();
  };

  const renderItemList = () => {
    return languages.map((language) => {
      return (
        <StyledItem key={language.key}>
          <Link className="language-item-link" href="/" locale={language.shortKey} onClick={handleClick}>
            <img
              src={`https://static-oforms.teamlab.info/images/flags/${language.iconName}`}
              alt={language.key}
              width="18px"
              className="language-item-image"
            />
          </Link>
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
