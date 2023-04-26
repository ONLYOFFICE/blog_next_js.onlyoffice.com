import styled from "styled-components";
import socialLinks from "@public/images/social-icons/color_social_icons.svg";
import tiktok from "@public/images/social-icons/tiktok.react.svg";
import socialWechat from "@public/images/icons/social-wechat.png";
import qrcodeForWechat from "@public/images/qrcode_for_wechat.jpg";
import socialLine from "@public/images/icons/line.svg";
import qrcodeLine from "@public/images/qr-code-line.jpg";

const StyledSocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  &.zh-hans {
    gap: 12px;

    @media (max-width: 1199px) {
      gap: 16px;
    }
  }

  &.ja,
  &.zh-hans {
    @media (max-width: 600px) {
      column-gap: 20px;
    }

    @media (max-width: 539px) {
      column-gap: 24px;
    }
  }

  .social-link {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: 40px;
    height: 40px;
    background-image: url(${socialLinks.src});
    background-color: #f9f9f9;
    background-repeat: no-repeat;
    background-position: 0;
    border-radius: 50%;
    cursor: pointer;
    filter: grayscale(1);

    &:hover {
      filter: grayscale(0);
    }

    &.subscribe-mail {
      background-position-x: -426px;
    }

    &.facebook {
      background-position-x: 8px;
    }

    &.twitter {
      background-position-x: -32px;
    }

    &.linkedin {
      background-position-x: -72px;
    }

    &.youtube {
      background-position-x: -112px;
    }

    &.blog {
      background-position-x: -192px;
    }

    &.medium {
      background-position-x: -232px;
    }

    &.instagram {
      background-position-x: -272px;
    }

    &.github {
      background-position-x: -312px;
    }

    &.fosstodon {
      background-position-x: -389px;
    }

    &.tiktok {
      background-image: url(${tiktok.src});
      background-position: center;
    }

    &.kuaishou {
      background-position-x: -546px;
    }

    &.xiaohongshu {
      background-position-x: -586px;
    }

    &.csdn {
      background-position-x: -666px;
    }

    &.toutiao {
      background-position-x: -626px;
    }
  }

  .icon-item {
    position: relative;
    cursor: pointer;

    &:hover {
      .popup-qr-code {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .wdgt-wechat,
  .wdgt-line {
    display: block;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    min-width: 40px;
    background-position: center;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-color: #f9f9f9;
    filter: grayscale(1);

    &:hover {
      filter: grayscale(0);
    }
  }

  .wdgt-wechat {
    background-image: url(${socialWechat.src});
  }

  .wdgt-line {
    background-image: url(${socialLine.src});
  }

  .popup-qr-code {
    background-color: #fff;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    color: #333;
    font-size: 13px;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 0.02em;
    margin: 0;
    opacity: 0;
    padding: 20px;
    position: absolute;
    box-shadow: 0 0 14px rgb(0 0 0 / 20%);
    text-align: center;
    transition: .55s opacity, .55s visibility;
    visibility: hidden;
    width: 160px;
    
    p {
      margin: 0;
    }

    &.wechat-qr-code {
      top: -270px;
      height: 218px;
      background-image: url(${qrcodeForWechat.src});
    }

    &.line-qr-code {
      top: -218px;
      height: 160px;
      background-image: url(${qrcodeLine.src});
    }
  }
`;

export default StyledSocialLinks;
