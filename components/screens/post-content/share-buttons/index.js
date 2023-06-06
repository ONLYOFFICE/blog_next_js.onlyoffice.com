import StyledRecentPosts from "./styled-share-buttons";
import ExternalLink from "@components/common/external-link";
import { useRouter } from "next/router";

import { FacebookShareButton, RedditShareButton, TelegramShareButton, TwitterShareButton } from "react-share";

const ShareButtons = ({ currentLanguage }) => {
  const router = useRouter();
  const routerUrl = `https://www.onlyoffice.com/blog${currentLanguage === "en" ? "" : `/${currentLanguage}`}${router.asPath}`;

  return (
    <StyledRecentPosts className="share-buttons">
      <FacebookShareButton className="share-button facebook" url={routerUrl}></FacebookShareButton>
      <TwitterShareButton className="share-button twitter" url={routerUrl}></TwitterShareButton>
      <ExternalLink className="share-button linkedin" href={`https://www.linkedin.com/sharing/share-offsite/?url=${routerUrl}`}></ExternalLink>
      <RedditShareButton className="share-button reddit" url={routerUrl}></RedditShareButton>
      <TelegramShareButton className="share-button telegram" url={routerUrl}></TelegramShareButton>
      <ExternalLink className="share-button mastodon" href={`https://www.addtoany.com/add_to/mastodon?linkurl=${routerUrl}`}></ExternalLink>
    </StyledRecentPosts>
  );
};

export default ShareButtons;
