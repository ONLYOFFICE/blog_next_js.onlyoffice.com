import StyledAdventAnnounce from "./styled-advent-announce";

const AdventAnnounce = ({t, currentLanguage, stateMobile }) => {
  const href = 
    currentLanguage === "fr" ? "https://www.onlyoffice.com/blog/fr/2023/07/onlyoffice-docspace-auto-heberge" :
    currentLanguage === "de" ? "https://www.onlyoffice.com/blog/de/2023/07/vor-ort-onlyoffice-docspace" :
    currentLanguage === "es" ? "https://www.onlyoffice.com/blog/es/2023/07/version-autoalojada-de-onlyoffice-docspace" :
    currentLanguage === "pt-br" ? "https://www.onlyoffice.com/blog/pt-br/2023/07/onlyoffice-docspace-auto-hospedado" :
    currentLanguage === "it" ? "https://www.onlyoffice.com/blog/it/2023/07/onlyoffice-docspace-self-hosted" :
    currentLanguage === "zh-hans" ? "https://www.onlyoffice.com/blog/zh-hans/2023/07/self-hosted-onlyoffice-docspace" : 
    "https://www.onlyoffice.com/blog/2023/07/self-hosted-onlyoffice-docspace";

  return (
    <StyledAdventAnnounce className={`${currentLanguage} ${stateMobile ? "active": ""}`}>
      <div className="advent-announce advent-mobile-hide">
        <a href={href} target="_blank" rel="noreferrer noopener">
          <div className="advent-announce-text">
            <b>{t("Self-hosted ONLYOFFICE DocSpace")}{`${currentLanguage === "zh-hans" ? "：" : ": "}`}</b>{t("secure collaboration on your terms")}
          </div>
        </a>
      </div>
      <div className={`advent-announce advent-desktop-hide ${stateMobile ? "is-open": ""}`}>
        <a href={href} target="_blank" rel="noreferrer noopener">
          <div className="advent-announce-text">
            <b>{t("Self-hosted")}{currentLanguage !== "fr" || currentLanguage !== "zh-hans" ? <br /> : ""}{t("ONLYOFFICE DocSpace")}</b>
          </div>
        </a>
      </div>
    </StyledAdventAnnounce>
  )
}

export default AdventAnnounce;