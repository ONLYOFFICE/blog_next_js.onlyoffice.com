import StyledAdventAnnounce from "./styled-advent-announce";
import InternalLink from "@components/common/internal-link";

const AdventAnnounce = ({ t, locale, stateMobile }) => {
  return (
    <StyledAdventAnnounce className={`${locale} ${stateMobile ? "active": ""}`}>
      <div className="advent-announce advent-mobile-hide">
        <InternalLink href={t("blogLink1")}>
          <div className="advent-announce-text">
            <div dangerouslySetInnerHTML={{ __html: t("AdventAnnounceDesktop")}}></div>
          </div>
        </InternalLink>
      </div>
      <div className={`advent-announce advent-desktop-hide ${stateMobile ? "is-open": ""}`}>
        <InternalLink href={t("blogLink1")}>
          <div className="advent-announce-text">
            <div dangerouslySetInnerHTML={{ __html: t("AdventAnnounceMobile")}}></div>
          </div>
        </InternalLink>
      </div>
    </StyledAdventAnnounce>
  )
}

export default AdventAnnounce;