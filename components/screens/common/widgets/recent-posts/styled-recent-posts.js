import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledRecentPosts = styled.div`
  box-sizing: border-box;
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 23px;
  background-color: #f9f9f9;

  h3 {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;

    @media screen and ${device.laptop} {
      margin-bottom: 56px;
      font-size: 32px;
      line-height: 133%;
      text-align: center;
      letter-spacing: -.02em;
      font-feature-settings: "tnum" on, "lnum" on;
    }

    @media screen and ${device.mobile} {
      margin-bottom: 40px;
      font-size: 24px;
      font-weight: 600;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media screen and ${device.laptop} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 48px 32px;
    }

    @media screen and ${device.mobile} {
      grid-template-columns: initial;
      gap: 32px;
    }
  }

  .post {
    &:not(:last-child) {
      margin-bottom: 30px;

      @media screen and ${device.laptop} {
        margin-bottom: 0;
      }
    }

    &:last-child {
      @media screen and ${device.laptop} {
        display: none;
      }

      @media screen and ${device.mobile} {
        display: block;
      }
    }

    @media screen and ${device.laptop} {
      display: flex;
      flex-direction: column;
      border: 1px solid #efefef;
      border-radius: 5px;
      background-color: #fff;
      overflow: hidden;
      transition: box-shadow 0.3s;
    }
  }

  .post-body {
    .internal-link {
      @media screen and ${device.laptop} {
        margin-bottom: 8px;
      }
    }

    @media screen and ${device.laptop} {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      margin-top: auto;
      padding: 24px 24px 32px;
    }

    @media screen and ${device.mobile} {
      padding: 21px 22px 21px;
    }
  }

  .post-title {
    display: inline-flex;
    font-size: 14px;
    line-height: 19px;
    color: #000;

    &:hover {
      text-decoration: underline;
    }

    @media screen and ${device.laptop} {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.01em;
      font-weight: 600;
      color: #000;
    }

    @media screen and ${device.mobile} {
      font-size: 16px;
      line-height: 21px;
    }
  }

  .post-img {
    position: relative;
    display: none;
    padding-bottom: 50.8%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media screen and ${device.laptop} {
      display: block;
    }

    @media screen and ${device.mobile} {
      padding-bottom: 50.35%;
    }
  }

  .post-date {
    margin-top: 8px;
    ${props => props.$locale === "ar" ? "padding-right: 20px;" : "padding-left: 20px;"}
    font-size: 12px;
    line-height: 16px;
    color: #919192;
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/calendar.svg");
    background-repeat: no-repeat;
    background-size: 12px 12px;
    background-position: ${props => props.$locale === "ar" ? "right" : "0 3px"};

    @media screen and ${device.laptop} {
      margin-top: auto;
    }
  }

  @media screen and ${device.laptop} {
    border: none;
    border-top: 1px solid #e0e0e0;
    padding: 80px 0 0;
    background-color: transparent;
  }

  @media screen and ${device.mobile} {
    padding: 48px 0 0;
  }
`;

export default StyledRecentPosts;
