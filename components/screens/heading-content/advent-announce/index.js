import StyledAdventAnnounce from "./styled-advent-announce";

const AdventAnnounce = ({t, locale, stateMobile }) => {
  const href = 
    locale === "fr" ? "https://www.onlyoffice.com/blog/fr/2023/10/sortie-onlyoffice-docs-7-5" :
    locale === "de" ? "https://www.onlyoffice.com/blog/de/2023/10/onlyoffice-docs-7-5-veroeffentlicht" :
    locale === "es" ? "https://www.onlyoffice.com/blog/es/2023/10/disponible-onlyoffice-docs-7-5" :
    locale === "pt-br" ? "https://www.onlyoffice.com/blog/pt-br/2023/10/onlyoffice-docs-7-5-lancado" :
    locale === "it" ? "https://www.onlyoffice.com/blog/it/2023/10/onlyoffice-docs-7-5" :
    locale === "ja" ? "https://www.onlyoffice.com/blog/ja/2023/10/onlyoffice-docs-7-5-released" :
    locale === "zh-hans" ? "https://www.onlyoffice.com/blog/zh-hans/2023/10/onlyoffice-docs-7-5-released" : 
    "https://www.onlyoffice.com/blog/2023/10/onlyoffice-docs-7-5-released";

  return (
    <StyledAdventAnnounce className={`${locale} ${stateMobile ? "active": ""}`}>
      <div className="advent-announce advent-mobile-hide">
        <a href={href} target="_blank" rel="noreferrer noopener">
          <div className="advent-announce-text">
            <b>{t("ONLYOFFICE Docs v7.5 released")}{`${locale === "zh-hans" ? "：" : locale === "ja" ? "： " : ": "}`}</b>{t("PDF Editor, automatic hyphenation, Page Breaks and tracer arrows in sheets, Screen Readers, and more")}
          </div>
        </a>
      </div>
      <div className={`advent-announce advent-desktop-hide ${stateMobile ? "is-open": ""}`}>
        <a href={href} target="_blank" rel="noreferrer noopener">
          <div className="advent-announce-text">
            <b>{t("ONLYOFFICE Docs v7.5 released")}</b>
          </div>
        </a>
      </div>
    </StyledAdventAnnounce>
  )
}

export default AdventAnnounce;