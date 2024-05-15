import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledAdventAnnounce = styled.div`
  .advent-announce {
    position: relative;
    top: 0;
    left: 0;
    padding: 0;
    width: 100%;
    height: 56px;
    overflow: hidden;
    text-align: center;
    background: linear-gradient(73.99deg, #042959 23.48%, #0A4DA6 100%);

    a {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/banners/banner-left-1.svg"), url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/banners/banner-right-1.svg");
      background-repeat: no-repeat;
      background-position: left, right;

      @media screen and ${device.laptop} {
        height: 48px;
        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/banners/banner-right-mobile-1.svg");
        background-position: right;
      }
    }

    .advent-announce-text {
      box-sizing: border-box;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.01em;
      text-align: center;
      width: max-content;
      max-width: 985px;
      height: 100%;
      color: #fff;
      text-decoration: none;
      z-index: 10;

      &:after,
      &:before {
        content: "";
        display: block;
        height: 56px;
        background-repeat: no-repeat;
        z-index: -1;

        @media screen and ${device.laptop} {
          height: 48px;
        }
      }

      &:before {
        margin-right: 16px;
        width: 53px;
        min-width: 53px;
        height: 39px;
        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/banners/banner-icon-1.svg");

        @media screen and ${device.laptop} {
          content: none;
        }
      }

      &:after {
        margin-left: 4px;
        width: 24px;
        min-width: 24px;
        height: 24px;
        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/banners/banner-arrow-1.svg");

        @media screen and ${device.laptop} {
          margin-left: 2px;
        }
      }

      span {
        font-weight: 600;
      }

      b {
        color: #00FFFF;
      }

      @media screen and ${device.laptop} {
        font-weight: 700;
      }
    }

    @media screen and ${device.laptop} {
      &.is-open {
        transform: translate3d(429px, 0, 0);
        transition: transform .2s cubic-bezier(.16,.68,.43,.99);
      }
    }
    
    @media (max-width: 592px) {
      &.is-open {
        transform: translate3d(calc(100vw - 64px), 0, 0);
      }
    }
  
    @media (max-width: 375px) {
      &.is-open {
        transform: translate3d(calc(100vw - 32px), 0, 0);
      }
    }
  }

  &.de,
  &.pt-br {
    .advent-announce {
      .advent-announce-text {
        max-width: 916px;
      }
    }
  }

  &.es {
    .advent-announce {
      .advent-announce-text {
        max-width: 892px;
      }
    }
  }

  &.it {
    .advent-announce {
      .advent-announce-text {
        max-width: 892px;

        @media screen and (max-width: 340px) {
          max-width: 266px;
        }
      }
    }
  }

  &.hy {
    .advent-announce {
      .advent-announce-text {
        max-width: 970px;

        @media screen and (max-width: 340px) {
          max-width: 266px;
        }
      }
    }
  }

  .advent-desktop-hide {
    display: none;

    @media screen and ${device.laptop} {
      display: flex;
      height: 48px;
    }
  }

  .advent-mobile-hide {
    @media screen and ${device.laptop} {
      display: none;
    }
  }

  @media screen and ${device.laptop} {
    overflow-x: hidden;

    &.active {
      ~ header {
        overflow-x: hidden;
      }
    }
  }
`;

export default StyledAdventAnnounce;