import StyledAdventAnnounce from "./styled-advent-announce";

const AdventAnnounce = ({t, currentLanguage, stateMobile }) => {
  const href = 
    currentLanguage === "fr" ? "https://www.onlyoffice.com/blog/fr/2023/06/onlyoffice-docs-7-4" :
    currentLanguage === "de" ? "https://www.onlyoffice.com/blog/de/2023/06/docs-7-4/" :
    currentLanguage === "es" ? "https://www.onlyoffice.com/blog/es/2023/06/se-lanza-onlyoffice-docs-7-4" :
    currentLanguage === "it" ? "https://www.onlyoffice.com/blog/it/2023/06/onlyoffice-docs-7-4/" :
    currentLanguage === "ja" ? "https://www.onlyoffice.com/blog/ja/2023/06/onlyoffice-docs-7-4/" :
    currentLanguage === "zh-hans" ? "https://www.onlyoffice.com/blog/zh-hans/2023/06/onlyoffice-docs-7-4-released/" : 
    "https://www.onlyoffice.com/blog/2023/06/onlyoffice-docs-7-4-released/";

  return (
    <StyledAdventAnnounce className={`${currentLanguage} ${stateMobile ? "active": ""}`}>
      <div className="advent-announce advent-mobile-hide">
        <a href={href} target="_blank" rel="noreferrer noopener">
          <div className="advent-announce-text">
            {`${t("AdventAnnounceDesk1")}`}<b>{`${t("AdventAnnounceDesk2")}`}</b> <b className="advent-announce-text-active">{t("AdventAnnounceDesk3")}{currentLanguage === "ja" || currentLanguage === "zh-hans" ? "：" : ": "}</b>{t("AdventAnnounceDesk4")}
          </div>
        </a>
      </div>
      <div className={`advent-announce advent-desktop-hide ${stateMobile ? "is-open": ""}`}>
        <a href={href} target="_blank" rel="noreferrer noopener">
          <div className="advent-announce-text">
            {t("AdventAnnounceMob1")}<b>{t("AdventAnnounceMob2")}</b><b className="advent-announce-text-active">{t("AdventAnnounceMob3")}</b>{t("AdventAnnounceMob4")}
          </div>
        </a>
      </div>
    </StyledAdventAnnounce>
  )
}

export default AdventAnnounce;