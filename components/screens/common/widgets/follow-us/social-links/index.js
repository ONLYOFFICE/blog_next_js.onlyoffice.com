import StyledSocialLinks from "./styled-social-links";
import ExternalLink from "@components/common/external-link";

const SocialLinks = ({ t, locale, handlerSetModal }) => {
  return (
    <StyledSocialLinks className={`social-links ${locale}`}>
      <li><div onClick={() => handlerSetModal()} className="social-link subscribe-mail" title={t("Subscribe to our newsletters")}></div></li>
      <li><ExternalLink className="social-link blog" href={`https://www.onlyoffice.com/blog/${locale === "en" ? "" : locale}`} title={t("Blog")} /></li>
      <li><ExternalLink className="social-link x" href={t("XSocialLink")} title="X" /></li>
      {locale === "ja" && (
        <>
          <li><ExternalLink className="social-link note" href="https://note.com/onlyoffice/" title="Note" /></li>
          <li><ExternalLink className="social-link qiita" href="https://qiita.com/ONLYOFFICE" title="Qiita" /></li>
        </>
      )}
      <li><ExternalLink className="social-link discord" href="https://discord.gg/pDuWma6uM7" title="Discord" /></li>
      <li><ExternalLink className="social-link youtube" href="https://www.youtube.com/user/onlyofficeTV" title="YouTube" /></li>
      <li><ExternalLink className="social-link tiktok" href={t("TikTokSocialLink")} title={t("TikTok")} /></li>
      <li><ExternalLink className="social-link github" href="https://github.com/ONLYOFFICE/" title="GitHub" /></li>
      <li><ExternalLink className="social-link linkedin" href={t("LinkedInSocialLink")} title="LinkedIn" /></li>
      {locale !== "zh-hans" && (
        <li><ExternalLink className="social-link facebook" href="https://www.facebook.com/pages/OnlyOffice/833032526736775" title="Facebook" /></li>
      )}
      <li><ExternalLink className="social-link medium" href="https://medium.com/onlyoffice" title="Medium" /></li>
      <li><ExternalLink className="social-link fosstodon" href="https://fosstodon.org/@ONLYOFFICE" title="Fosstodon" /></li>
      {locale === "zh-hans" && (
        <div className="social-link-wechat">
          <span className="social-link-wechat-icon" title="WeChat"></span>
          <div className="social-link-wechat-popup">
            <p>关注我们</p>
            <p>了解ONLYOFFICE最新信息</p>
          </div>
        </div>
      )}
      {locale !== "zh-hans" && (
        <>
          <li><ExternalLink className="social-link telegram" href={t("TelegramSocialLink")} title="Telegram" /></li>
          <li><ExternalLink className="social-link instagram" href="https://www.instagram.com/the_onlyoffice/" title="Instagram" /></li>
        </>
      )}
      {locale === "zh-hans" && (
        <>
          <li><ExternalLink className="social-link kuaishou" href="https://v.kuaishou.com/GeXfVT" title="Kuaishou" /></li>
          <li><ExternalLink className="social-link xiaohongshu" href="https://www.xiaohongshu.com/user/profile/627e271800000000210253ec" title="Xiaohongshu" /></li>
          <li><ExternalLink className="social-link csdn" href="https://blog.csdn.net/m0_68274698" title="CSDN" /></li>
          <li><ExternalLink className="social-link toutiao" href="https://www.toutiao.com/c/user/token/MS4wLjABAAAAituLIinbu_T7phDvBDiqiVsev4z3kjH95MZsEpnq7Lv2MnXBh-Sp9tuAHzFnI-Tk/" title="Toutiao" /></li>
          <li><ExternalLink className="social-link bilibili" href="https://space.bilibili.com/1870911731" title="Bilibili" /></li>
        </>
      )}

    </StyledSocialLinks>
  );
};

export default SocialLinks;
