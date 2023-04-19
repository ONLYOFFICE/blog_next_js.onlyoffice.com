import styled from "styled-components";
import socialWechat from "@public/images/icons/social-wechat.png";
import qrcodeForWechat from "@public/images/qrcode_for_wechat.jpg";
import socialLine from "@public/images/icons/line.svg";
import qrcodeLine from "@public/images/qr-code-line.jpg";

const StyledSocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  .social-link {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    width: 40px;
    height: 40px;
    background-color: #f9f9f9;
    border-radius: 50%;
    cursor: pointer;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 40px;
      height: 40px;
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
