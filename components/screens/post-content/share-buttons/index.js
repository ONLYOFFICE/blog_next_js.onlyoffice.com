import StyledRecentPosts from "./styled-share-buttons";
import ExternalLink from "@components/common/external-link";
import { useRouter } from "next/router";
import { ReactSVG } from "react-svg";
import facebook from "@public/images/icons/facebook.svg"
import twitter from "@public/images/icons/twitter.svg"
import linkedin from "@public/images/icons/linkedin.svg"
import reddit from "@public/images/icons/reddit.svg"
import telegram from "@public/images/icons/telegram.svg"
import mastodon from "@public/images/icons/mastodon.svg"

import { FacebookShareButton, RedditShareButton, TelegramShareButton, TwitterShareButton } from "react-share";

const ShareButtons = () => {
  const router = useRouter();
  const routerUrl = `https://www.onlyoffice.com/blog${router.asPath}`;

  return (
    <StyledRecentPosts className="share-buttons">
      <FacebookShareButton className="share-button" url={routerUrl}>
        <ReactSVG src={facebook.src} alt="Facebook" />
      </FacebookShareButton>
      <TwitterShareButton className="share-button" url={routerUrl}>
        <ReactSVG src={twitter.src} alt="Twitter" />
      </TwitterShareButton>
      <ExternalLink className="share-button" href={`https://www.linkedin.com/sharing/share-offsite/?url=${routerUrl}`}>
        <ReactSVG src={linkedin.src} alt="LinkedIn" />
      </ExternalLink>
      <RedditShareButton className="share-button" url={routerUrl}>
        <ReactSVG src={reddit.src} alt="Reddit" />
      </RedditShareButton>
      <TelegramShareButton className="share-button" url={routerUrl}>
        <ReactSVG src={telegram.src} alt="Telegram" />
      </TelegramShareButton>
      <ExternalLink className="share-button" href={`https://www.addtoany.com/add_to/mastodon?linkurl=${routerUrl}`}>
        <ReactSVG src={mastodon.src} alt="Mastodon" />
      </ExternalLink>
    </StyledRecentPosts>
  );
};

export default ShareButtons;
