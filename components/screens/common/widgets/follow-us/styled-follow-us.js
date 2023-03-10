import styled from "styled-components";
import { device } from "@components/utils/devices";
import socialWechat from "@public/images/icons/social-wechat.png";
import qrcodeForWechat from "@public/images/qrcode_for_wechat.jpg";
import socialLine from "@public/images/icons/line.svg";
import qrcodeLine from "@public/images/qr-code-line.jpg";

const StyledFollowUs = styled.div`
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 23px;
  background-color: #f9f9f9;

  h4 {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, 24px);
    gap: 24px 30px;
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;

      img {
        width: 24px;
        height: 24px;
      }

      &:first-child {
        img {
          width: 20px;
          height: 17px;
        }
      }

      .social-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
 
        .OnlyOffice {
          display: inline-flex;
          justify-content: center;
        }
      }
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

  .wdgt-wechat {
    height: 24px;
    min-width: 24px;
    background-image: url(${socialWechat.src});
    background-position-x: center;
    background-size: contain;
  }

  .wdgt-line {
    height: 24px;
    min-width: 24px;
    background-image: url(${socialLine.src});
    background-position-x: center;
    background-size: contain;
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

  @media ${device.laptop} {
    h4 {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.01em;
    }
  }
`;

export default StyledFollowUs;
