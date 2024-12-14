import styled from "styled-components";
import x from "@public/images/icons/x.svg";

const StyledRecentPosts = styled.div`
  display: flex;
  align-items: center;

  .share-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
    filter: grayscale(1);

    img {
      width: 20px;
      height: 20px;
    }

    &:not(:last-child) {
      ${props => props.locale === "ar" ? "margin-left: 8px;" : "margin-right: 8px;"}
    }

    &:hover {
      opacity: 0.7;
    }

    &.facebook {
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/facebook.svg");
    }

    &.x {
      background-image: url(${x.src});
    }

    &.linkedin {
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/linkedin.svg");
    }

    &.reddit {
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/reddit.svg");
    }

    &.telegram {
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/telegram.svg");
    }

    &.mastodon {
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/mastodon.svg");
    }

    &.wechat {
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/social-wechat.png");
    }

    &.weibo {
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/weibo.svg");
    }
  }
`;

export default StyledRecentPosts;
