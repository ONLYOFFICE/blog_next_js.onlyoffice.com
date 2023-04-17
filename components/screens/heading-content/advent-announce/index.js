import Link from "next/link";
import StyledAdventAnnounce from "./styled-advent-announce";

const AdventAnnounce = ({t, currentLanguage}) => {
  const href = 
    currentLanguage === "fr" ? "https://www.onlyoffice.com/blog/fr/2023/03/onlyoffice-workspace-12-5/" :
    currentLanguage === "de" ? "https://www.onlyoffice.com/blog/de/2023/03/onlyoffice-workspace-12-5-verbesserte-sicherheit-optimierte-dokumentenverwaltung-dunkelmodus-und-mehr/" :
    currentLanguage === "es" ? "https://www.onlyoffice.com/blog/es/2023/03/onlyoffice-workspace-12-5/" :
    currentLanguage === "it" ? "https://www.onlyoffice.com/blog/it/2023/03/onlyoffice-workspace-12-5/" :
    currentLanguage === "zh-hans" ? "https://www.onlyoffice.com/blog/zh-hans/2023/03/onlyoffice-workspace-12-5-released/" : "https://www.onlyoffice.com/blog/2023/03/onlyoffice-workspace-12-5-released/";

  return (
    <StyledAdventAnnounce className={currentLanguage}>
      <div className="advent-announce advent-mobile-hide">
        <Link href={href} target="_blank" rel="noreferrer noopener">
          <div className="advent-announce-text">
            <b>{`${t("ONLYOFFICE Workspace 12.5")}:`}</b> {t("enhanced security, optimized document management, Dark theme, and more")} 
          </div>
        </Link>
      </div>
      <div className="advent-announce advent-desktop-hide">
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