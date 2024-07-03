import StyledAdventAnnounce from "./styled-advent-announce";
import { useState, useEffect } from "react";

const AdventAnnounce = ({ t, locale, stateMobile }) => {
  const [currentAdventAnnounce, setCurrentAdventAnnounce] = useState(0);

  useEffect(() => {
    if (locale === "zh-hans") {
      const interval = setInterval(() => {
        setCurrentAdventAnnounce(prev => (prev === 0 ? 1 : 0));
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [locale]);

  return (
    <StyledAdventAnnounce locale={locale} className={`${locale} ${stateMobile ? "active": ""}`}>
      <div className={`advent-announce advent-mobile-hide ${locale === "zh-hans" && currentAdventAnnounce === 1 ? "advent-announce-1": ""}`}>
        <a href={t("blogLink1")}>
          <div className="advent-announce-text">
            <div dangerouslySetInnerHTML={{ __html: t("AdventAnnounceDesktop")}}></div>
          </div>
        </a>
      </div>
      <div className={`advent-announce advent-desktop-hide ${stateMobile ? "is-open": ""} ${locale === "zh-hans" && currentAdventAnnounce === 1 ? "advent-announce-1": ""}`}>
        <a href={t("blogLink1")}>
          <div className="advent-announce-text">
            <div dangerouslySetInnerHTML={{ __html: t("AdventAnnounceMobile")}}></div>
          </div>
        </a>
      </div>

      {locale === "zh-hans" &&
        <>
          <div className={`advent-announce advent-mobile-hide advent-announce-zh ${locale === "zh-hans" && currentAdventAnnounce === 1 ? "advent-announce-2": ""}`}>
            <a href={t("AdventAnnounceMobileZhLink")}>
              <div className="advent-announce-text">
                <div dangerouslySetInnerHTML={{ __html: t("AdventAnnounceDesktopZh")}}></div>
              </div>
            </a>
          </div>
          <div className={`advent-announce advent-desktop-hide advent-announce-zh ${stateMobile ? "is-open": ""} ${locale === "zh-hans" && currentAdventAnnounce === 1 ? "advent-announce-2": ""}`}>
            <a href={t("AdventAnnounceMobileZhLink")}>
              <div className="advent-announce-text">
                <div dangerouslySetInnerHTML={{ __html: t("AdventAnnounceMobileZh")}}></div>
              </div>
            </a>
          </div>
        </>
      }
    </StyledAdventAnnounce>
  )
}

export default AdventAnnounce;