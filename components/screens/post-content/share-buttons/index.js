import StyledRecentPosts from "./styled-share-buttons";
import ExternalLink from "@components/common/external-link";
import { useRouter } from "next/router";

import { FacebookShareButton, RedditShareButton, TelegramShareButton, TwitterShareButton, LinkedinShareButton, WeiboShareButton } from "react-share";

const ShareButtons = ({ locale }) => {
  const router = useRouter();
  const routerUrl = `https://www.onlyoffice.com/blog${locale === "en" ? "" : `/${locale}`}${router.asPath}`;

  return (
    <StyledRecentPosts className="share-buttons">
      <FacebookShareButton className="share-button facebook" url={routerUrl} title="Facebook"></FacebookShareButton>
      <TwitterShareButton className="share-button x" url={routerUrl} title="Twitter"></TwitterShareButton>
      <LinkedinShareButton className="share-button linkedin" url={routerUrl} title="LinkedIn"></LinkedinShareButton>
      <RedditShareButton className="share-button reddit" url={routerUrl} title="Reddit"></RedditShareButton>
      <TelegramShareButton className="share-button telegram" url={routerUrl} title="Telegram"></TelegramShareButton>
      <ExternalLink className="share-button mastodon" href={`https://www.shareaholic.com/share/mastodon/?link=${routerUrl}`} title="Mastodon"></ExternalLink>
      {
        locale === "zh-hans" &&
        <>
          <ExternalLink className="share-button wechat" href={`https://www.shareaholic.com/share/wechat/?link=${routerUrl}`} title="WeChat"></ExternalLink>
          <WeiboShareButton className="share-button weibo" url={routerUrl} title="Weibo"></WeiboShareButton>
        </>
      }
    </StyledRecentPosts>
  );
};

export default ShareButtons;
