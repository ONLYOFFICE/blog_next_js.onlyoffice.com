import styled from "styled-components";
import docsLeft from "@public/images/banners/self-hosted-docspace-left.svg";
import docsRight from "@public/images/banners/self-hosted-docspace-right.svg";

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
    background-color: #55b5dc;

    a {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;

      @media (max-width: 1023px) {
        height: 50px;
      }
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
      height: 20px;
      color: #fff;
      text-decoration: none;
      z-index: 10;
      max-width: 556px;
      padding: 17px 0 18px;

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
        left: -445px;
        width: 435px;
        background-position-x: 100%;

        @media (max-width: 1023px) {
          background-position-y: -8px;
          left: -447px;
        }
      }

      &:after {
        background-image: url(${docsRight.src});
        background-position-y: 11px;
        right: -512px;
        width: 502px;

        @media (max-width: 1023px) {
          background-position-y: 8px;
          right: -514px;
        }
      }

      @media (max-width: 1023px) {
        background-color: transparent;
        display: inline-block;
        height: auto;
        line-height: 19px;
        padding: 6px 0;
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

  &.fr .advent-announce-text {
    max-width: 596px;

    @media (max-width: 1023px) {
      max-width: 164px;
    }
  }

  &.de .advent-announce-text {
    max-width: 616px;

    @media (max-width: 1023px) {
      max-width: 164px;
    }
  }

  &.cs .advent-announce-text {
    padding: 10px 0 0;

    @media (max-width: 1023px) {
      padding: 6px 0;
    }
  }

  &.zh-hans {
    a {
      @media (max-width: 1023px) {
        height: 53px;
      }
    }

    .advent-announce-text {
      line-height: 22px;
  
      @media (max-width: 1023px) {
        line-height: 18px;
        padding: 17px 0 18px;
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