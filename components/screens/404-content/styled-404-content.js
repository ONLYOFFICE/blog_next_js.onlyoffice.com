import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";

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
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/404_errors.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

    @media screen and ${device.tablet} {
      margin-bottom: 64px;
      height: 300px;
    }

    @media screen and ${device.mobile} {
      margin-bottom: 40px;
      height: 235px;
    }

    @media screen and ${device.mobileS} {
      height: 133px;
    }
  }

  h1 {
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 133%;
    letter-spacing: -0.01em;
    text-align: center;
    font-feature-settings: "tnum" on,"lnum" on;
    color: #333;

    @media screen and ${device.mobile} {
      font-size: 24px;
    }
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
    transition: 0.1s linear all;

    &:hover {
      background-color: #ff994f;
    }
  }

  @media screen and ${device.laptop} {
    padding: 112px 16px 80px;
    max-width: 736px;
  }

  @media screen and ${device.mobile} {
    padding: 60px 16px 64px;
  }
`;

export default StyledErrorContent;
