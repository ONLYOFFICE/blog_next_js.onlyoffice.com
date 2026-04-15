import React, { useEffect, useRef, useState } from "react";
import StyledAdventMobileOnly from "./styled-advent-mobile-only";

const AdventMobileOnly = ({ t, locale }) => {
  const [isMobile, setIsMobile] = useState(false);
  const adRef = useRef(null);
  const [os, setOs] = useState(null);
  const [downloadLink, setDownloadLink] = useState("#");

  useEffect(() => {
    const hasSeenComponent = sessionStorage.getItem("hasSeenAd");

    if (!hasSeenComponent) {
      const detectMobileDevice = () => {
        const userAgent = navigator.userAgent;

        if (/android/i.test(userAgent)) {
          setOs("Android");

          if (locale === "zh-hans") {
            setDownloadLink("https://download.onlyoffice.com/install/mobile/android/onlyoffice-documents.apk");
          } else {
            setDownloadLink("https://play.google.com/store/apps/details?id=com.onlyoffice.documents");
          }

          return true;
        }

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          setOs("iOS");
          setDownloadLink("https://apps.apple.com/us/app/onlyoffice-documents/id944896972");
          return true;
        }

        return false;
      };

      const isMobileDevice = detectMobileDevice();
      setIsMobile(isMobileDevice);

      if (isMobileDevice) {
        sessionStorage.setItem("hasSeenAd", "true");
      }
    }
  }, [locale]);

  useEffect(() => {
    const elements = [
      document.getElementById("cookieBanner"),
      document.getElementById("aiChatToggle"),
    ].filter(Boolean);

    if (elements.length === 0) return;

    elements.forEach((el) => {
      el.style.transition = "bottom 0.3s ease";
    });

    if (!isMobile || !adRef.current) {
      elements.forEach((el) => { el.style.bottom = ""; });
      return () => { elements.forEach((el) => { el.style.bottom = ""; }); };
    }

    const frameId = requestAnimationFrame(() => {
      if (adRef.current) {
        const adHeight = adRef.current.getBoundingClientRect().height;
        elements.forEach((el) => {
          el.style.bottom = `${adHeight + 10}px`;
        });
      }
    });

    return () => {
      cancelAnimationFrame(frameId);
      elements.forEach((el) => { el.style.bottom = ""; });
    };
  }, [isMobile, locale]);

  const handleClose = () => {
    setIsMobile(false);
  };

  if (!isMobile) return null;

  return (
    <StyledAdventMobileOnly ref={adRef} $locale={locale}>
      <div className="mobile_mess">
        <div className="container">
          <p className="mobile_mess_text">{t("Get free mobile app")}</p>
          <div className="mobile_mess_buttons">
            <a
              className="mobile_mess_button"
              id="blog_mobile_mess_button"
              href={downloadLink}
            >
              {t("Get it now")}
            </a>
            <div
              className="mobile_mess_cross"
              id="mobile_mess_cross"
              onClick={handleClose}
            ></div>
          </div>
        </div>
      </div>
    </StyledAdventMobileOnly>
  );
};

export default AdventMobileOnly;
