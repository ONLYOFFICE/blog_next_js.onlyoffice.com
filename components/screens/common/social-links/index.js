import StyledSocialLinks from "./styled-social-links";
import ExternalLink from "@components/common/external-link";
import IconButton from "@components/common/icon-button";

const SocialLinks = ({ language, handlerSetModal, isFooterContent, isFollowUsContent }) => {
  return (
    <StyledSocialLinks className={`social-links ${language}`}>
      <ExternalLink
        className="social-link subscribe-mail"
        title="OnlyOffice"
        alt="OnlyOffice"
        as="div"
        onClick={() => handlerSetModal()}
      >
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

      {
        language !== "zh-hans" &&
        <ExternalLink
          className="social-link facebook"
          href="https://www.facebook.com/pages/OnlyOffice/833032526736775"
          title="Facebook"
          alt="Facebook"
        >
        </ExternalLink>
      }

      <ExternalLink
        className="social-link twitter"
        href="https://twitter.com/ONLY_OFFICE"
        rel="nofollow"
        title="Twitter"
        alt="Twitter"
      >
      </ExternalLink>

      <ExternalLink
        className="social-link linkedin"
        href="https://www.linkedin.com/company/ascensio-system-sia/"
        rel="nofollow"
        title="LinkedIn"
        alt="LinkedIn"
      >
      </ExternalLink>

      <ExternalLink
        className="social-link youtube"
        href="https://www.youtube.com/user/onlyofficeTV"
        rel="nofollow"
        title="YouTube"
        alt="YouTube"
      >
      </ExternalLink>

      <ExternalLink
        className="social-link blog"
        href="https://www.onlyoffice.com/blog"
        title="Blog"
        alt="Blog"
      >
      </ExternalLink>

      <ExternalLink
        className="social-link medium"
        href="https://medium.com/onlyoffice"
        title="Medium"
        alt="Medium"
      >
      </ExternalLink>

      {
        language !== "zh-hans" &&
        <ExternalLink
          className="social-link instagram"
          href="https://www.instagram.com/the_onlyoffice/"
          title="Instagram"
          alt="Instagram"
        >
        </ExternalLink>
      }

      <ExternalLink
        className="social-link github"
        href="https://github.com/ONLYOFFICE/"
        title="GitHub"
        alt="GitHub"
      >
      </ExternalLink>

      <ExternalLink
        className="social-link fosstodon"
        href="https://fosstodon.org/@ONLYOFFICE"
        title="Fosstodon"
        alt="Fosstodon"
      >
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

      <ExternalLink
        className="social-link tiktok"
        href="https://vm.tiktok.com/ZMLXbFEyd/"
        title="TikTok"
        alt="TikTok"
      >
      </ExternalLink>

      {
        isFooterContent && language === "ja" &&
        <div className="icon-item">
          <span className="wdgt-line" title="LINE"></span>
          <div className="popup-qr-code line-qr-code"></div>
        </div>
      }

      {
        language === "zh-hans" &&
        <>
          <ExternalLink
            className="social-link kuaishou"
            href="https://v.kuaishou.com/HEotRv"
            title="在Kuaishou上关注我们"
            alt="在Kuaishou上关注我们"
          >
          </ExternalLink>
          <ExternalLink
            className="social-link xiaohongshu"
            href="https://www.xiaohongshu.com/user/profile/627e271800000000210253ec"
            title="在Xiaohongshu上关注我们"
            alt="在Xiaohongshu上关注我们"
          >
          </ExternalLink>
          <ExternalLink
            className="social-link csdn"
            href="https://blog.csdn.net/m0_68274698"
            title="在CSDN上关注我们"
            alt="在CSDN上关注我们"
          >
          </ExternalLink>
          <ExternalLink
            className="social-link toutiao"
            href="https://www.toutiao.com/c/user/token/MS4wLjABAAAAituLIinbu_T7phDvBDiqiVsev4z3kjH95MZsEpnq7Lv2MnXBh-Sp9tuAHzFnI-Tk/"
            title="在Toutiao上关注我们"
            alt="在Toutiao上关注我们"
          >
          </ExternalLink>
        </>
      }
    </StyledSocialLinks>
  );
};

export default SocialLinks;
