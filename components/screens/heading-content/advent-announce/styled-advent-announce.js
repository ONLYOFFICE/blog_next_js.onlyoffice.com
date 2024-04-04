import styled from "styled-components";
import { device } from "@components/utils/devices";
import bannerLeft from "@public/images/banners/banner-left.svg";
import bannerRight from "@public/images/banners/banner-right.svg";
import bannerLeftMobile from "@public/images/banners/banner-left-mobile.svg";
import bannerRightMobile from "@public/images/banners/banner-right-mobile.svg";
import bannerZoom from "@public/images/banners/banner-zoom.svg";
import bannerZoomMobile from "@public/images/banners/banner-zoom-mobile.svg";
import bannerArrow from "@public/images/banners/banner-arrow.svg";

const StyledAdventAnnounce = styled.div`
  &.ar {
    .advent-announce {
      .advent-announce-text {
        &:before {
          right: calc(100% + 35px);
          width: 343px;
          background-image: url(${bannerRight.src});

          @media screen and ${device.laptop} {
            right: calc(100% - 22px);
            width: 101px;
            background-image: url(${bannerRightMobile.src});
          }
        }

        &:after {
          left: calc(100% + 68px);
          width: 326px;
          background-image: url(${bannerLeft.src});

          @media screen and ${device.laptop} {
            top: 1px;
            left: calc(100% + 10px);
            width: 78px;
            background-image: url(${bannerLeftMobile.src});
            background-position: center center;
          }
        }

        span {
          &:before {
            right: calc(100% + 4px);
            width: 24px;
            height: 24px;
            background-image: url(${bannerArrow.src});
            transform: translateY(-50%) rotate(180deg);

            @media screen and ${device.laptop} {
              top: calc(50% - 1px);
              right: calc(100% + 2px);
            }
          }
    
          &:after {
            left: calc(100% + 13px);
            width: 32px;
            height: 32px;
            background-image: url(${bannerZoom.src});

            @media screen and ${device.laptop} {
              top: calc(50% - 1px);
              left: calc(100% + 7px);
              width: 28px;
              height: 28px;
              background-image: url(${bannerZoomMobile.src});
              background-size: contain;
            }
          }
        }
      }
    }
  }

  .advent-announce {
    position: relative;
    top: 0;
    left: 0;
    padding: 0;
    width: 100%;
    height: 56px;
    overflow: hidden;
    text-align: center;
    background-color: #0B5CFF;

    a {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;

      @media screen and ${device.laptop} {
        height: 48px;
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
      letter-spacing: 0.01em;
      text-align: center;
      width: 100%;
      height: 100%;
      max-width: max-content;
      color: #fff;
      text-decoration: none;
      z-index: 10;

      &:after,
      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        height: 56px;
        background-repeat: no-repeat;
        z-index: -1;

        @media screen and ${device.laptop} {
          height: 48px;
        }
      }

      &:before {
        right: calc(100% + 68px);
        width: 326px;
        background-image: url(${bannerLeft.src});

        @media screen and ${device.laptop} {
          top: 1px;
          right: calc(100% - 21px);
          width: 78px;
          background-image: url(${bannerLeftMobile.src});
          background-position: center center;
        }
      }

      &:after {
        left: calc(100% + 35px);
        width: 343px;
        background-image: url(${bannerRight.src});

        @media screen and ${device.laptop} {
          left: calc(100% - 46px);
          width: 101px;
          background-image: url(${bannerRightMobile.src});
        }
      }

      span {
        &:before {
          content: "";
          position: absolute;
          right: calc(100% + 13px);
          top: 50%;
          width: 32px;
          height: 32px;
          background-image: url(${bannerZoom.src});
          background-repeat: no-repeat;
          transform: translateY(-50%);

          @media screen and ${device.laptop} {
            top: calc(50% - 1px);
            right: calc(100% + 3px);
            width: 28px;
            height: 28px;
            background-image: url(${bannerZoomMobile.src});
            background-size: contain;
          }
        }

        &:after {
          content: "";
          position: absolute;
          left: calc(100% + 4px);
          top: 50%;
          width: 24px;
          height: 24px;
          background-image: url(${bannerArrow.src});
          background-repeat: no-repeat;
          transform: translateY(-50%);

          @media screen and ${device.laptop} {
            top: calc(50% - 1px);
            left: calc(100% + 2px);
          }
        }
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