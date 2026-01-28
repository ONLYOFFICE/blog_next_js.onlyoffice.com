import StyledRecentPosts from "./styled-share-buttons";
import ExternalLink from "@components/common/external-link";
import { useRouter } from "next/router";

import { FacebookShareButton, RedditShareButton, TelegramShareButton, TwitterShareButton, LinkedinShareButton, WeiboShareButton } from "react-share";

const ShareButtons = ({ locale }) => {
  const router = useRouter();
  const routerUrl = `https://www.onlyoffice.com/blog${locale === "en" ? "" : `/${locale}`}${router.asPath}`;

  return (
    <StyledRecentPosts $locale={locale} className="share-buttons">
      <FacebookShareButton className="share-button facebook" url={routerUrl} title="Facebook" aria-label="Facebook"></FacebookShareButton>
      <TwitterShareButton className="share-button x" url={routerUrl} title="Twitter" aria-label="Twitter"></TwitterShareButton>
      <LinkedinShareButton className="share-button linkedin" url={routerUrl} title="LinkedIn" aria-label="LinkedIn"></LinkedinShareButton>
      <RedditShareButton className="share-button reddit" url={routerUrl} title="Reddit" aria-label="Reddit"></RedditShareButton>
      <TelegramShareButton className="share-button telegram" url={routerUrl} title="Telegram" aria-label="Telegram"></TelegramShareButton>
      <ExternalLink className="share-button mastodon" href={`https://www.shareaholic.com/share/mastodon/?link=${routerUrl}`} title="Mastodon" aria-label="Mastodon"></ExternalLink>
      {locale === "zh-hans" && (
        <>
          <ExternalLink className="share-button wechat" href={`https://www.shareaholic.com/share/wechat/?link=${routerUrl}`} title="WeChat" aria-label="WeChat"></ExternalLink>
          <WeiboShareButton className="share-button weibo" url={routerUrl} title="Weibo" aria-label="Weibo"></WeiboShareButton>
        </>
      )}
    </StyledRecentPosts>
  );
};

export default ShareButtons;
