import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledDownLoadBlock = styled.div`
  border-radius: 5px;
  padding: 48px 32px 34px;
  text-align: center;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  background-color: #FFFFFF;

  &.hy {
    .download-block-btn {
      font-size: 13px;

      @media screen and ${device.tablet} {
        font-size: 11px;
      }
    }
  }

  &.zh-hans {
    .download-block-btn {
      &.windows {
        padding: 11px 26px;

        @media screen and ${device.tablet} {
          padding: 11px 18px;
        }
      }
    }
  }

  .download-block-title {
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
    text-align: center;

    span {
      color: #FF6F3D;
      font-weight: 600;
    }

    @media screen and ${device.mobile} {
      margin-bottom: 24px;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.01em;
    }
  }

  .download-block-btns {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto 0 16px;
  }

  .download-block-btn {
    margin: 0 16px 22px 0;
    width: 100%;
    max-width: 170px;
    min-height: 56px;
    position: relative;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    mix-blend-mode: normal;
    border: 1px solid #AAAAAA;
    border-radius: 3px;
    padding: 11px 6px;
    font-size: 16px;
    line-height: 24px;
    color: #444444;

    &:before {
      content: "";
      height: 32px;
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/download.svg");
      background-repeat: no-repeat;
      background-size: 514px 34px;
      filter: grayscale(1);
    }

    &.windows {
      &:before {
        ${props => props.$locale === "ar" ? "margin-left: 8px;" : "margin-right: 8px;"}
        width: 32px;
        min-width: 32px;
        background-position: -8px 0;

        @media screen and ${device.tablet} {
          ${props => props.$locale === "ar" ? "margin-left: 6px;" : "margin-right: 6px;"}
          width: 23px;
          min-width: 23px;
          height: 23px;
          background-size: 357px 23px;
          background-position: -8px 0;
        }
      }
    }

    &.linux {
      &:before {
        ${props => props.$locale === "ar" ? "margin-left: 8px;" : "margin-right: 8px;"}
        width: 32px;
        min-width: 32px;
        background-position: -39px 0;

        @media screen and ${device.tablet} {
          ${props => props.$locale === "ar" ? "margin-left: 6px;" : "margin-right: 6px;"}
          width: 23px;
          min-width: 23px;
          height: 23px;
          background-size: 366px 23px;
          background-position: -34px 0;
        }
      }
    }

    &.mac-os {
      &:before {
        ${props => props.$locale === "ar" ? "margin-left: 8px;" : "margin-right: 8px;"}
        width: 32px;
        min-width: 32px;
        background-position: -71px 0;

        @media screen and ${device.tablet} {
          ${props => props.$locale === "ar" ? "margin-left: 6px;" : "margin-right: 6px;"}
          width: 23px;
          min-width: 23px;
          height: 23px;
          background-size: 391px 23px;
          background-position: -69px 0;
        }
      }
    }

    &.google-play {
      &:before {
        width: 128px;
        background-position: -234px 50%;

        @media screen and ${device.tablet} {
          width: 92px;
          height: 23px;
          background-position: -230px 50%;
          background-size: 494px 23px;
        }
      }
    }

    &.app-store {
      &:before {
        width: 121px;
        background-position: -107px 50%;

        @media screen and ${device.tablet} {
          width: 87px;
          height: 23px;
          background-position: -111px 50%;
          background-size: 428px 23px;
        }
      }
    }

    &:hover {
      &:before {
        filter: grayscale(0);
      }
    }

    @media screen and ${device.tablet} {
      padding: 9px 6px;
      font-size: 11px;
      line-height: 17px;
      max-width: 122px;
      min-height: 40px;
      max-height: 40px;
    }
  }

  @media screen and ${device.tablet} {
    padding: 48px 18px 42px;
  }

  @media screen and ${device.mobile} {
    margin: 0 -16px;
    padding: 48px 13px 42px;
    box-shadow: initial;
  }
`;

export default StyledDownLoadBlock;
