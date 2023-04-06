import styled from "styled-components";
import left from "@public/images/banners/workspace-12-5-left.svg";
import right from "@public/images/banners/workspace-12-5-right.svg";

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
    background: #183e6b;

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
      line-height: 20px;
      letter-spacing: 0.01em;
      height: 56px;
      color: #fff;
      text-decoration: none;
      z-index: 10;
      max-width: 578px;
      padding: ${(props) => (props.currentLanguage =='zh' || props.currentLanguage == 'ja' ? "8px 0" : "7px 0")};

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: -380px;
        width: 372px;
        height: 56px;
        background-image: url(${left.src});
        background-position-y: -3px;
        background-repeat: no-repeat;

        @media (max-width: 1024px) {          
          left: -79px;
          top: -9px;
          width: 48px;
          height: 48px;
          background-position: right -1px;
          background-size: auto 65px;
        }
      }

      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: -366px;
        width: 356px;
        height: 56px;
        background-image: url(${right.src});
        background-repeat: no-repeat;
        background-position-y: -2px;

        @media (max-width: 1024px) {
          right: -366px;
          width: 356px;
          height: 48px;
          background-position-y: -6px;
        }
      }

      @media (max-width: 1024px) {
        font-size: 12px;
        height: auto;
        line-height: 16px;
        padding: 8px 0px;
        white-space: normal;
        width: auto !important;

        b {
          display: block;
        }
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
  
  &.ja {
    .advent-announce-text {
      height: 20px;
      max-width: 586px;
      padding: 18px 0;

      @media (max-width: 1024px) {
        padding: 8px 0;
      }
    }
  }

  &.zh-hans {
    .advent-announce-text {
      height: 20px;
      padding: 18px 0;

      @media (max-width: 1024px) {
        padding: 8px 0;
      }
    }
  }
`;

export default StyledAdventAnnounce;