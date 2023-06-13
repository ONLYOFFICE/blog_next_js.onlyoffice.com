import styled from "styled-components";
import banner from "@public/images/banners/docs-bg.png";
import docsLeft from "@public/images/banners/docs-left.svg";
import docsRight from "@public/images/banners/docs-right.svg";

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
    background-image: url(${banner.src});
    background-repeat: repeat no-repeat;

    a {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }

    .advent-announce-text {
      position: relative;
      display: inline-block;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0 auto;
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0.01em;
      height: 40px;
      color: #fff;
      text-decoration: none;
      z-index: 10;
      max-width: 556px;
      padding: 7px 0 8px;

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 0;
        display: block;
        height: 56px;
        z-index: -1;
        background-repeat: no-repeat;

        @media (max-width: 1023px) {
          height: 48px;
        }
      }

      &:before {
        background-image: url(${docsLeft.src});
        background-position-y: -5px;
        left: -486px;
        width: 476px;
        background-position-x: 100%;

        @media (max-width: 1023px) {
          left: -490px;
        }
      }

      &:after {
        background-image: url(${docsRight.src});
        background-position-y: 17px;
        right: -445px;
        width: 435px;

        @media (max-width: 1023px) {
          background-position-y: 50%;
          right: -450px;
        }
      }

      .advent-announce-text-active {
        color: #93f9fe;
      }

      @media (max-width: 1023px) {
        background-color: transparent;
        display: inline-block;
        font-size: 13px;
        height: auto;
        line-height: 18px;
        padding: 6px 0;
        max-width: 154px;
      }
    }

    @media (max-width: 1023px) {
      transition: transform .2s cubic-bezier(.16,.68,.43,.99);

      &.is-open {
        transform: translate3d(429px, 0, 0);
      }
    }

    @media (max-width: 592px) {
      &.is-open {
        transform: translate3d(380px, 0, 0);
      }
    }

    @media (max-width: 430px) {
      &.is-open {
        transform: translate3d(288px, 0, 0);
      }
    }
  }

  .advent-desktop-hide {
    display: none;

    @media (max-width: 1023px) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
    }
  }

  .advent-mobile-hide {
    @media (max-width: 1023px) {
      display: none;
    }
  }

  &.fr .advent-announce-text, 
  &.ru .advent-announce-text, 
  &.zh-hans .advent-announce-text {
    max-width: 596px;

    @media (max-width: 1023px) {
      max-width: 154px;
    }
  }

  &.zh-hans {
    .advent-announce-text {
      line-height: 22px;

      @media (max-width: 1023px) {
        line-height: 18px;
      }
    }
  }

  @media (max-width: 1023px) {
    overflow-x: hidden;

    &.active {
      ~ header {
        overflow-x: hidden;
      }
    }
  }
`;

export default StyledAdventAnnounce;