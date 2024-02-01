import StyledAdventAnnounce from "./styled-advent-announce";
import InternalLink from "@components/common/internal-link";

const AdventAnnounce = ({t, locale, stateMobile }) => {
  const href = 
    locale === "fr" ? "https://www.onlyoffice.com/blog/fr/2024/01/onlyoffice-docs-8-0" :
    locale === "de" ? "https://www.onlyoffice.com/blog/de/2024/01/onlyoffice-docs-8-0-veroeffentlicht" :
    locale === "es" ? "https://www.onlyoffice.com/blog/es/2024/01/onlyoffice-docs-8-0" :
    locale === "pt-br" ? "https://www.onlyoffice.com/blog/pt-br/2024/01/onlyoffice-docs-8-0" :
    locale === "it" ? "https://www.onlyoffice.com/blog/it/2024/01/onlyoffice-docs-8-0" :
    locale === "ja" ? "https://www.onlyoffice.com/blog/ja/2024/01/onlyoffice-docs-8-0-released" :
    locale === "zh-hans" ? "https://www.onlyoffice.com/blog/zh-hans/2024/01/onlyoffice-docs-8-0-released" :
    "https://www.onlyoffice.com/blog/2024/01/onlyoffice-docs-8-0-released";

  return (
    <StyledAdventAnnounce className={`${locale} ${stateMobile ? "active": ""}`}>
      <div className="advent-announce advent-mobile-hide">
        <InternalLink href={href}>
          <div className="advent-announce-text">
            <span dangerouslySetInnerHTML={{ __html: t("AdventAnnounceDesktop")}}></span>
          </div>
        </InternalLink>
      </div>
      <div className={`advent-announce advent-desktop-hide ${stateMobile ? "is-open": ""}`}>
        <InternalLink href={href}>
          <div className="advent-announce-text">
            <span dangerouslySetInnerHTML={{ __html: t("AdventAnnounceMobile")}}></span>
          </div>
        </InternalLink>
      </div>
    </StyledAdventAnnounce>
  )
}

export default AdventAnnounce;