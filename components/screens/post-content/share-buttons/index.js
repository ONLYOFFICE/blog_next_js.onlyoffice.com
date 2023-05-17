import StyledRecentPosts from "./styled-share-buttons";
import ExternalLink from "@components/common/external-link";
import { useRouter } from "next/router";

import { FacebookShareButton, RedditShareButton, TelegramShareButton, TwitterShareButton } from "react-share";

const ShareButtons = () => {
  const router = useRouter();
  const routerUrl = `https://www.onlyoffice.com/blog${router.asPath}`;

  return (
    <StyledRecentPosts className="share-buttons">
      <FacebookShareButton className="share-button" url={routerUrl}>
        <img src="https://static-blog.onlyoffice.com/images/icons/facebook.svg" alt="Facebook" />
      </FacebookShareButton>
      <TwitterShareButton className="share-button" url={routerUrl}>
        <img src="https://static-blog.onlyoffice.com/images/icons/twitter.svg" alt="Twitter" />
      </TwitterShareButton>
      <ExternalLink className="share-button" href={`https://www.linkedin.com/sharing/share-offsite/?url=${routerUrl}`}>
        <img src="https://static-blog.onlyoffice.com/images/icons/linkedin.svg" alt="LinkedIn" />
      </ExternalLink>
      <RedditShareButton className="share-button" url={routerUrl}>
        <img src="https://static-blog.onlyoffice.com/images/icons/reddit.svg" alt="Reddit" />
      </RedditShareButton>
      <TelegramShareButton className="share-button" url={routerUrl}>
        <img src="https://static-blog.onlyoffice.com/images/icons/telegram.svg" alt="Telegram" />
      </TelegramShareButton>
      <ExternalLink className="share-button" href={`https://www.addtoany.com/add_to/mastodon?linkurl=${routerUrl}`}>
        <img src="https://static-blog.onlyoffice.com/images/icons/mastodon.svg" alt="Mastodon" />
      </ExternalLink>
    </StyledRecentPosts>
  );
};

export default ShareButtons;
