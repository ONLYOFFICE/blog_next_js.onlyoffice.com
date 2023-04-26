import Link from "next/link";
import StyledAdventAnnounce from "./styled-advent-announce";

const AdventAnnounce = ({t, currentLanguage, stateMobile }) => {
  const href = 
    currentLanguage === "de" ? "https://www.onlyoffice.com/blog/de/2023/04/docspace/" :
    currentLanguage === "es" ? "https://www.onlyoffice.com/blog/es/2023/04/descubre-onlyoffice-docspace/" :
    currentLanguage === "pt-br" ? "https://www.onlyoffice.com/blog/pt-br/2023/04/conheca-o-onlyoffice-docspace/" :
    currentLanguage === "it" ? "https://www.onlyoffice.com/blog/it/2023/04/onlyoffice-docspace/" :
    currentLanguage === "ja" ? "https://www.onlyoffice.com/blog/ja/2023/04/onlyoffice-docspace/" :
    currentLanguage === "zh-hans" ? "https://www.onlyoffice.com/blog/zh-hans/2023/04/meet-onlyoffice-docspace/" : 
    "https://www.onlyoffice.com/blog/2023/04/meet-onlyoffice-docspace/";

  return (
    <StyledAdventAnnounce className={`${currentLanguage} ${stateMobile ? "active": ""}`}>
      <div className="advent-announce advent-mobile-hide">
        <Link href={href} target="_blank" rel="noreferrer noopener">
          <div className="advent-announce-text">
            <b>{`${t("ONLYOFFICE DocSpace released")}${currentLanguage === "ja" || currentLanguage === "zh-hans" ? "" : ": "}`}</b>{t("improve document collaboration with offices, customers, and partners.")} <b>{t("Use it for free!")}</b>
          </div>
        </Link>
      </div>
      <div className={`advent-announce advent-desktop-hide ${stateMobile ? "is-open": ""}`}>
        <Link href={href} target="_blank" rel="noreferrer noopener">
          <div className="advent-announce-text">
            {t("AdventAnnounceMobileText1")} <b>{t("AdventAnnounceMobileText2")}</b> {t("AdventAnnounceMobileText3")}
          </div>
        </Link>
      </div>
    </StyledAdventAnnounce>
  )
}

export default AdventAnnounce;