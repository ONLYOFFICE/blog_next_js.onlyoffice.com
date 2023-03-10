import StyledFollowUs from "./styled-follow-us";
import { useState } from "react";
import Heading from "@components/common/heading";
import Social from "@components/screens/footer-content/data/social-items";
import ExternalLink from "@components/common/external-link";
import IconButton from "@components/common/icon-button";
import Popup from "@components/screens/common/popup";
import Newsletter from "@components/screens/common/newsletter";

const FollowUs = ({ t, currentLanguage }) => {
  const [popupActive, setPopupActive] = useState(false);
  const handlerSetModal = () => {
    setPopupActive(true);
  };

  return (
    <StyledFollowUs>
      <Heading level={4}>{t("Follow us")}</Heading>

      <ul>
        {Social.slice(0, 1).map((item) => (
          <li key={item.title}>
            <ExternalLink
              className="social-link"
              href={item.href}
              rel={item.rel}
              alt={item.title}
              target="_blank"
              title={item.title}
              as={item.title === "OnlyOffice" ? "div" : "a"}
              onClick={
                item.title === "OnlyOffice"
                  ? () => handlerSetModal()
                  : null
              }
            >
              <IconButton
                className={item.className}
                iconName={item.src}
                size={item.size}
              />
            </ExternalLink>
          </li>
        ))}
        {
          currentLanguage === "zh-hans" &&
          <li className="icon-item">
            <span className="wdgt-wechat" title="WeChat"></span>
            <div className="popup-qr-code wechat-qr-code">
                <p>关注我们</p>
                <p>了解ONLYOFFICE最新信息</p>
            </div>
          </li>
        }
        {
          currentLanguage === "ja" &&
          <li className="icon-item">
            <span className="wdgt-line" title="LINE"></span>
            <div className="popup-qr-code line-qr-code"></div>
          </li>
        }
        {Social.slice(1).map((item) => (
          <li key={item.title}>
            <ExternalLink
              className="social-link"
              href={item.href}
              rel={item.rel}
              alt={item.title}
              target="_blank"
              title={item.title}
            >
              <IconButton
                className={item.className}
                iconName={item.src}
                size={item.size}
              />
            </ExternalLink>
          </li>
        ))}
      </ul>

      <Popup popupActive={popupActive} setPopupActive={setPopupActive}>
        <Newsletter t={t} />
      </Popup>
    </StyledFollowUs>
  );
};

export default FollowUs;