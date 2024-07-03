import styled from "styled-components";
import { device } from "@components/utils/devices";
import bannerLeft from "@public/images/banners/banner-left.png";
import bannerLeftIcon from "@public/images/banners/banner-left-icon.svg";
import bannerRight from "@public/images/banners/banner-right.png";
import bannerRightIcon from "@public/images/banners/banner-right-icon.svg";
import arrowRight from "@public/images/banners/arrow-right.svg";
import pdcRight from "@public/images/banners/pdc-right.svg";
import pdcLeft from "@public/images/banners/pdc-left.svg";
import pdcFrame from "@public/images/banners/pdc-frame.svg";
import pdcFrameMob from "@public/images/banners/pdc-frame-mob.svg";

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
    background: #1C1A39;
    transition: opacity 1s ease-in, visibility 1s ease-in;

    a {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      background-image: url(${bannerLeft.src}), url(${bannerRight.src});
      background-repeat: no-repeat;
      background-position: top left, top right;
      background-size: 344px 64px, 344px 64px;

      @media screen and ${device.laptop} {
        height: 48px;
        background-image: url(${bannerLeft.src});
        background-position: -80px 0;
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
      line-height: 19px;
      font-weight: 700;
      text-align: center;
      width: max-content;
      max-width: 817px;
      height: 100%;
      color: #FFFFFF;
      text-decoration: none;
      z-index: 10;

      &:after,
      &:before {
        content: "";
        position: absolute;
        background-repeat: no-repeat;

        @media screen and ${device.laptop} {
          height: 48px;
        }
      }

      &:before {
        top: 10px;
        left: -175px;
        min-width: 128px;
        height: 65px;
        background-image: url(${bannerLeftIcon.src});

        @media screen and ${device.laptop} {
          content: none;
        }
      }

      &:after {
        top: 28px;
        right: -59px;
        width: 56px;
        height: 42px;
        background-image: url(${bannerRightIcon.src});

        @media screen and ${device.laptop} {
          content: none;
        }
      }

      > div {
        position: relative;
        padding-right: 28px;

        &:after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          display: inline-flex;
          width: 24px;
          min-width: 24px;
          height: 24px;
          transform: translateY(-50%);
          background-image: url(${arrowRight.src});
        }
      }

      span {
        color: #00FFDD;
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
  &.es {
    .advent-announce-text {
      max-width: 766px;
    }
  }

  &.pt-br,
  &.ja {
    .advent-announce-text {
      max-width: 814px;
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

  .advent-announce-zh {
    position: absolute;
    background-color: #7F58EF;
    background-image: linear-gradient(90deg, #9573F5 0.02%, #7F58EF 17.69%, #5D32DD 86.55%, #6B41EA 99.86%);
    opacity: 0;
    visibility: hidden;

    a {
      position: relative;
      background: none;

      &:before {
        content: "";
        position: absolute;
        left: 0;
        width: 577px;
        height: 56px;
        background-image: url(${pdcLeft.src});
        background-repeat: no-repeat;
        background-size: cover;

        @media screen and (max-width: 1440px) {
          width: 68px;
        }

        @media screen and ${device.laptop} {
          content: none;
        }
      }

      &:after {
        @media screen and (max-width: 1440px) {
          content: "";
          position: absolute;
          left: 186px;
          top: 0;
          display: block;
          width: 263px;
          height: 56px;
          background-image: url(${pdcLeft.src});
          background-position-x: right;
        }

        @media screen and (max-width: 1440px) {
          left: 108px;
        }

        @media screen and (max-width: 1140px) {
          left: 60px;
        }

        @media screen and ${device.laptop} {
          content: none;
        }
      }
    }

    .advent-announce-text {
      &:before {
        top: 0;
        left: -70px;
        width: 453px;
        background-image: url(${pdcFrame.src});

        @media screen and ${device.laptop} {
          content: "";
          width: 320px;
          background-image: url(${pdcFrameMob.src});
        }
      }

      &:after {
        top: 0;
        right: -400px;
        width: 312px;
        height: 56px;
        background-image: url(${pdcRight.src});
      }

      > div {
        padding-right: 0;

        &:after {
          content: none;
        }

        span {
          color: #FFF400;
        }
      }

      @media screen and ${device.laptop} {
        font-size: 12px;
      }
    }

    @media screen and ${device.laptop} {
      background: linear-gradient(89.87deg, #9573F5 0.09%, #7F58EF 17.75%, #5D32DD 92.72%, #6B41EA 99.88%);
    }
  }

  .advent-announce-1 {
    opacity: 0;
    visibility: hidden;
  }

  .advent-announce-2 {
    opacity: 1;
    visibility: visible;
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