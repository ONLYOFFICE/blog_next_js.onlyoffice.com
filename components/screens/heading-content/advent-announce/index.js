import Link from "next/link";
import StyledAdventAnnounce from "./styled-advent-announce";

const AdventAnnounce = ({t, currentLanguage}) => {
  const hrefLang = `https://onlyoffice.com/blog/${
    currentLanguage === "zh" ? "zh-hans" : `${currentLanguage}`
  }`;

  return (
    <StyledAdventAnnounce>
      <div className="advent-announce advent-mobile-hide">
        <Link href={`https://www.onlyoffice.com/blog/2023/01/onlyoffice-docs-7-3-released/`} target="_blank" rel="noreferrer noopener">
          <div className="advent-announce-text">
            <b>{t("ONLYOFFICE Docs released")}</b> {t("enhanced forms SmartArt new security settings Watch Window and more")} 
          </div>
        </Link>
      </div>
      <div className="advent-announce advent-desktop-hide">
        <Link href={`https://www.onlyoffice.com/blog/2023/01/onlyoffice-docs-7-3-released/`} target="_blank" rel="noreferrer noopener">
          <div className="advent-announce-text">
            &nbsp;<b>{t("ONLYOFFICE Docs v7.3 released")}</b>&nbsp;
          </div>
        </Link>
      </div>
    </StyledAdventAnnounce>
  )
}

export default AdventAnnounce;