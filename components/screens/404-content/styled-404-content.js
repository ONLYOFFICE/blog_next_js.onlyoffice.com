import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";
import errorImg from "@public/images/404_errors.svg";

const StyledErrorContent = styled(Section)`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 112px 16px 100px;
  width: 100%;
  max-width: 775px;
  text-align: center;

  .section-page {
    padding: 0;
  }

  .error-img {
    margin-bottom: 64px;
    width: 100%;
    height: 424px;
    max-width: 775px;
    background-image: url(${errorImg.src});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }

  h1 {
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 133%;
    letter-spacing: -0.01em;
    text-align: center;
    font-feature-settings: 'tnum'on,'lnum'on;
    color: #333;
  }

  p {
    display: block;
    margin: 0 auto 40px;
    width: 100%;
    max-width: 530px;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #555;
  }

  .internal-link {
    display: inline-flex;

    span {
      padding: 18px 20px;
      font-weight: 600;
      font-size: 13px;
      line-height: 160%;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #fff;
      text-decoration: none;
      box-sizing: border-box;
      border-radius: 3px;
      background-color: #ff6f3d;
      transition: .1s linear all;
    }

    &:hover {
      span {
        background-color: #ff994f;
      }
    }
  }

  @media ${device.laptop} {
    padding: 112px 16px 80px;
    max-width: 736px;
  }

  @media ${device.tablet} {
    .error-img {
      margin-bottom: 64px;
      height: 300px;
    }
  }

  @media (max-width: 592px) {
    padding: 60px 16px 64px;

    .error-img {
      margin-bottom: 40px;
      height: 235px;
    }

    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 320px) {
    .error-img {
      height: 133px;
    }
  }
`;

export default StyledErrorContent;
