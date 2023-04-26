import styled from "styled-components";
import left from "@public/images/banners/docspace-left.svg";
import right from "@public/images/banners/docspace-right.svg";

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
    background: #55b5dc;

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

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: -486px;
        width: 476px;
        height: 56px;
        background-image: url(${left.src});
        background-position-y: -5px;
        background-repeat: no-repeat;

        @media (max-width: 1024px) {          
          left: -490px;
          height: 48px;
        }
      }

      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: -445px;
        width: 435px;
        height: 56px;
        background-image: url(${right.src});
        background-repeat: no-repeat;
        background-position-y: 6px;

        @media (max-width: 1024px) {
          right: -450px;
          height: 48px;
          background-position-y: 2px;
        }
      }

      @media (max-width: 1024px) {
        font-size: 13px;
        height: auto;
        line-height: 18px;
        padding: 6px 0px;
        white-space: normal;
        width: auto !important;

        b {
          display: block;
        }
      }
    }

    @media (max-width: 1024px) {
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

    @media (max-width: 1024px) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
    }
  }

  .advent-mobile-hide {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  &.zh-hans {
    .advent-announce-text {
      line-height: 40px;
      max-width: 572px;
      
      @media (max-width: 1024px) {
        line-height: 18px;
      }
    }
  }

  @media (max-width: 1024px) {
    overflow-x: hidden;

    &.active {
      ~ header {
        overflow-x: hidden;
      }
    }
  }
`;

export default StyledAdventAnnounce;