import styled from "styled-components";

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

    img {
      width: 20px;
      height: 20px;
    }

    &:not(:last-child) {
      margin-right: 8px;
    }

    &:hover {
      opacity: 0.7;
    }

    &.facebook {
      background-image: url("https://static-blog.onlyoffice.com/images/icons/facebook.svg");
    }

    &.twitter {
      background-image: url("https://static-blog.onlyoffice.com/images/icons/twitter.svg");
    }

    &.linkedin {
      background-image: url("https://static-blog.onlyoffice.com/images/icons/linkedin.svg");
    }

    &.reddit {
      background-image: url("https://static-blog.onlyoffice.com/images/icons/reddit.svg");
    }

    &.telegram {
      background-image: url("https://static-blog.onlyoffice.com/images/icons/telegram.svg");
    }

    &.mastodon {
      background-image: url("https://static-blog.onlyoffice.com/images/icons/mastodon.svg");
    }
  }
`;

export default StyledRecentPosts;
