import StyledSocialLinks from "./styled-social-links";
import ExternalLink from "@components/common/external-link";
import IconButton from "@components/common/icon-button";

const SocialLinks = ({ language, handlerSetModal, isFooterContent, isFollowUsContent }) => {
  return (
    <StyledSocialLinks className="social-links">
      <ExternalLink
        className="social-link"
        title="OnlyOffice"
        alt="OnlyOffice"
        as="div"
        onClick={() => handlerSetModal()}
      >
        <IconButton
          className="OnlyOffice"
          iconName="https://static-oforms.onlyoffice.com/images/social-icons/mail.react.svg"
          size="24px"
          grayed={true}
        />
      </ExternalLink>

      {
        isFollowUsContent && language === "ja" &&
        <div className="icon-item">
          <span className="wdgt-line" title="LINE"></span>
          <div className="popup-qr-code line-qr-code"></div>
        </div>
      }

      {
        isFollowUsContent && language === "zh-hans" &&
        <div className="icon-item">
          <span className="wdgt-wechat" title="WeChat"></span>
          <div className="popup-qr-code wechat-qr-code">
            <p>关注我们</p>
            <p>了解ONLYOFFICE最新信息</p>
          </div>
        </div>
      }

      <ExternalLink
        className="social-link"
        href="https://www.facebook.com/pages/OnlyOffice/833032526736775"
        title="Facebook"
        alt="Facebook"
      >
        <IconButton
          className="faceBook"
          iconName="https://static-oforms.onlyoffice.com/images/social-icons/facebook.react.svg"
          size="24px"
          grayed={true}
        />
      </ExternalLink>

      <ExternalLink
        className="social-link"
        href="https://twitter.com/ONLY_OFFICE"
        rel="nofollow"
        title="Twitter"
        alt="Twitter"
      >
        <IconButton
          className="twitter"
          iconName="https://static-oforms.onlyoffice.com/images/social-icons/twitter.react.svg"
          size="24px"
          grayed={true}
        />
      </ExternalLink>

      <ExternalLink
        className="social-link"
        href="https://www.linkedin.com/company/ascensio-system-sia/"
        rel="nofollow"
        title="LinkedIn"
        alt="LinkedIn"
      >
        <IconButton
          className="linkedin"
          iconName="https://static-oforms.onlyoffice.com/images/social-icons/linkedin.react.svg"
          size="24px"
          grayed={true}
        />
      </ExternalLink>

      <ExternalLink
        className="social-link"
        href="https://www.youtube.com/user/onlyofficeTV"
        rel="nofollow"
        title="YouTube"
        alt="YouTube"
      >
        <IconButton
          className="youTube"
          iconName="https://static-oforms.onlyoffice.com/images/social-icons/youtube.react.svg"
          size="24px"
          grayed={true}
        />
      </ExternalLink>

      <ExternalLink
        className="social-link"
        href="https://www.onlyoffice.com/blog"
        title="Blog"
        alt="Blog"
      >
        <IconButton
          className="youTube"
          iconName="https://static-oforms.onlyoffice.com/images/social-icons/wordpress.react.svg"
          size="24px"
          grayed={true}
        />
      </ExternalLink>

      <ExternalLink
        className="social-link"
        href="https://medium.com/onlyoffice"
        title="Medium"
        alt="Medium"
      >
        <IconButton
          className="youTube"
          iconName="https://static-oforms.onlyoffice.com/images/social-icons/medium.react.svg"
          size="24px"
          grayed={true}
        />
      </ExternalLink>

      <ExternalLink
        className="social-link"
        href="https://www.instagram.com/the_onlyoffice/"
        title="Instagram"
        alt="Instagram"
      >
        <IconButton
          className="instagram"
          iconName="https://static-oforms.onlyoffice.com/images/social-icons/instagram.react.svg"
          size="24px"
          grayed={true}
        />
      </ExternalLink>

      <ExternalLink
        className="social-link"
        href="https://github.com/ONLYOFFICE/"
        title="GitHub"
        alt="GitHub"
      >
        <IconButton
          className="github"
          iconName="https://static-oforms.onlyoffice.com/images/social-icons/github.react.svg"
          size="24px"
          grayed={true}
        />
      </ExternalLink>

      <ExternalLink
        className="social-link"
        href="https://fosstodon.org/@ONLYOFFICE"
        title="Fosstodon"
        alt="Fosstodon"
      >
        <IconButton
          className="fosstodon"
          iconName="https://static-oforms.onlyoffice.com/images/social-icons/fosstodon.react.svg"
          size="24px"
          grayed={true}
        />
      </ExternalLink>

      {
        isFooterContent && language === "zh-hans" &&
        <div className="icon-item">
          <span className="wdgt-wechat" title="WeChat"></span>
          <div className="popup-qr-code wechat-qr-code">
            <p>关注我们</p>
            <p>了解ONLYOFFICE最新信息</p>
          </div>
        </div>
      }

      {
        isFooterContent && language === "ja" &&
        <div className="icon-item">
          <span className="wdgt-line" title="LINE"></span>
          <div className="popup-qr-code line-qr-code"></div>
        </div>
      }

      <ExternalLink
        className="social-link"
        href="https://vm.tiktok.com/ZMLXbFEyd/"
        title="TikTok"
        alt="TikTok"
      >
        <IconButton
          className="tiktok"
          iconName="/images/social-icons/tiktok.react.svg"
          size="24px"
          grayed={true}
        />
      </ExternalLink>
    </StyledSocialLinks>
  );
};

export default SocialLinks;
