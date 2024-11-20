import styled from "styled-components";

const StyledSocialLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px 32px;
  padding: 0;
  margin: 0;
  list-style-type: none;

  li {
    display: inline-flex;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/color_social_icons-1.svg");
    background-repeat: no-repeat;
    background-position: 0;
    cursor: pointer;

    &.subscribe-mail {
      background-position-x: -434px;
      background-position-y: 1px;
    }

    &.blog {
      background-position-x: -200px;
    }

    &.x {
      background-position-x: -40px;
    }

    &.note {
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/social-icons/note_footer.svg");
      background-position: center;
      background-size: contain;
    }

    &.qiita {
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/social-icons/qiita_footer.svg");
      background-position: center;
      background-size: contain;
    }

    &.discord {
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/social-icons/discord_footer.svg");
      background-position: center;
      background-size: contain;
    }

    &.youtube {
      background-position-x: -120px;
    }

    &.tiktok {
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/social-icons/tiktok.react.svg");
      background-position: center;
    }

    &.github {
      background-position-x: -320px;
    }

    &.linkedin {
      background-position-x: -80px;
    }

    &.facebook {
      background-position-x: 0;
    }

    &.medium {
      background-position-x: -240px;
    }

    &.fosstodon {
      background-position-x: -397px;
    }

    &.telegram {
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/telegram-social.svg");
      background-position: center;
    }

    &.instagram {
      background-position-x: -280px;
    }

    &.kuaishou {
      background-position-x: -554px;
    }

    &.xiaohongshu {
      background-position-x: -634px;
    }

    &.csdn {
      background-position-x: -674px;
    }

    &.toutiao {
      background-position-x: -594px;
    }

    &.bilibili {
      background-position-x: -714px;
    }
  }

  .social-link-wechat {
    position: relative;
    cursor: pointer;

    &:hover {
      .social-link-wechat-popup {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .social-link-wechat-icon {
    display: block;
    width: 24px;
    height: 24px;
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/social-wechat.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .social-link-wechat-popup {
    position: absolute;
    top: -270px;
    left: 50%;
    padding: 20px;
    margin: 0;
    font-size: 13px;
    letter-spacing: 0.02em;
    color: #333;
    text-align: center;
    width: 160px;
    height: 218px;
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/qrcode_for_wechat.jpg");
    background-color: #ffffff;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    box-shadow: 0 0 14px rgb(0 0 0 / 20%);
    transform: translateX(-50%);
    transition: 0.55s opacity, 0.55s visibility;
    opacity: 0;
    visibility: hidden;

    p {
      margin: 0;
    }

    @media screen and (max-width: 758px) {
      left: initial;
      right: 0;
      transform: initial;
    }

    @media screen and (max-width: 699px) {
      left: 50%;
      right: initial;
      transform: translateX(-50%);
    }

    @media screen and (max-width: 391px) {
      left: 0;
      transform: initial;
    }

    @media screen and (max-width: 328px) {
      left: 50%;
      right: initial;
      transform: translateX(-50%);
    }
  }
`;

export default StyledSocialLinks;
