import styled, { createGlobalStyle } from "styled-components";
import { device } from "@components/utils/devices";

const GlobalStyles = createGlobalStyle`
  html {
    ${({ stateMobile }) => (stateMobile ? "overflow: hidden;" : "")}
  }
`;

const StyledHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 0 24px;
  height: 72px;
  background-color: #FFFFFF;
  border-bottom: 1px solid #d9d9d9;

  &.is-main {
    .oo-hm {
      ${props => props.locale === "ar" ? "margin-left: 16px;" : "margin-right: 16px;"}

      @media screen and ${device.laptop} {
        ${props => props.locale === "ar" ? "margin-left: initial;" : "margin-right: initial;"}
      }
    }

    .oo-hm-item.oo-hm-item--pricing {
      .oo-hm-items-wrapper {
        @media screen and (max-width: 1046px) {
          top: ${props => props.locale === "el" && "99%"};
          left: ${props => props.locale === "el" && "initial"};
          right: ${props => props.locale === "el" && "0"};
        }

        @media screen and ${device.laptop} {
          top: ${props => props.locale === "el" && "0"};
          right: ${props => props.locale === "el" && "initial"};
        }
      }

      @media screen and (max-width: 1046px) {
        position: ${props => props.locale === "el" && "initial"};
      }
    }

    .oo-hm-item.oo-hm-item--partners {
      .oo-hm-items-wrapper {
        @media screen and (max-width: 1198px) {
          top: ${props => props.locale === "el" && "99%"};
          left: ${props => props.locale === "el" && "initial"};
          right: ${props => props.locale === "el" && "0"};
        }

        @media screen and (max-width: 1106px) {
          top: ${props => props.locale === "hy" && "99%"};
          left: ${props => props.locale === "hy" && "initial"};
          right: ${props => props.locale === "hy" && "0"};
        }

        @media screen and (max-width: 1032px) {
          top: ${props => props.locale === "pt-br" && "99%"};
          left: ${props => props.locale === "pt-br" && "initial"};
          right: ${props => props.locale === "pt-br" && "0"};
        }

        @media screen and ${device.laptop} {
          top: ${props => (props.locale === "el" || props.locale === "hy" || props.locale === "pt-br") && "0"};
          right: ${props => (props.locale === "el" || props.locale === "hy" || props.locale === "pt-br") && "initial"};
        }
      }

      @media screen and (max-width: 1198px) {
        position: ${props => props.locale === "el" && "initial"};
      }

      @media screen and (max-width: 1106px) {
        position: ${props => props.locale === "hy" && "initial"};
      }

      @media screen and (max-width: 1032px) {
        position: ${props => props.locale === "pt-br" && "initial"};
      }
    }

    .oo-hm-item.oo-hm-item--download {
      .oo-hm-items-wrapper {
        @media screen and (max-width: 1480px) {
          top: ${props => props.locale === "zh-hans" && "99%"};
          left: ${props => props.locale === "zh-hans" && "initial"};
          right: ${props => props.locale === "zh-hans" && "0"};
        }

        @media screen and (max-width: 1328px) {
          top: ${props => (props.locale === "en" || props.locale === "cs" || props.locale === "el" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy") && "99%"};
          left: ${props => (props.locale === "en" || props.locale === "cs" || props.locale === "el" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy") && "initial"};
          right: ${props => (props.locale === "en" || props.locale === "cs" || props.locale === "el" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy") && "0"};
        }

        @media screen and (max-width: 1332px) {
          top: ${props => props.locale === "ar" && "99%"};
          left: ${props => props.locale === "ar" && "0"};
          right: ${props => props.locale === "ar" && "initial"};
        }

        @media screen and (max-width: 1270px) {
          top: ${props => props.locale === "pt-br" && "99%"};
          left: ${props => props.locale === "pt-br" && "initial"};
          right: ${props => props.locale === "pt-br" && "0"};
        }

        @media screen and ${device.laptop} {
          top: ${props => (props.locale === "zh-hans" || props.locale === "en" || props.locale === "cs" || props.locale === "el" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy" || props.locale === "ar" || props.locale === "pt-br") && "0"};
          right: ${props => (props.locale === "zh-hans" || props.locale === "en" || props.locale === "cs" || props.locale === "el" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy" || props.locale === "ar" || props.locale === "pt-br") && "initial"};
        }
      }

      @media screen and (max-width: 1480px) {
        position: ${props => props.locale === "zh-hans" && "initial"};
      }

      @media screen and (max-width: 1328px) {
        position: ${props => (props.locale === "en" || props.locale === "cs" || props.locale === "el" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy") && "initial"};
      }

      @media screen and (max-width: 1332px) {
        position: ${props => props.locale === "ar" && "initial"};
      }

      @media screen and (max-width: 1270px) {
        position: ${props => props.locale === "pt-br" && "initial"};
      }
    }

    .oo-hm-item.oo-hm-item--login-signup {
      .oo-hm-items-wrapper {
        @media screen and (max-width: 1368px) {
          top: ${props => props.locale === "zh-hans" && "99%"};
          left: ${props => props.locale === "zh-hans" && "initial"};
          right: ${props => props.locale === "zh-hans" && "0"};
        }

        @media screen and (max-width: 1298px) {
          top: ${props => props.locale === "ar" && "99%"};
          left: ${props => props.locale === "ar" && "0"};
          right: ${props => props.locale === "ar" && "initial"};
        }

        @media screen and (max-width: 1298px) {
          top: ${props => (props.locale === "en" || props.locale === "cs" || props.locale === "el" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy") && "99%"};
          left: ${props => (props.locale === "en" || props.locale === "cs" || props.locale === "el" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy") && "initial"};
          right: ${props => (props.locale === "en" || props.locale === "cs" || props.locale === "el" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy") && "0"};
        }

        @media screen and ${device.laptop} {
          top: ${props => (props.locale === "zh-hans" || props.locale === "en" || props.locale === "cs" || props.locale === "el" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy" || props.locale === "ar") && "0"};
          right: ${props => (props.locale === "zh-hans" || props.locale === "en" || props.locale === "cs" || props.locale === "el" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy") && "initial"};
          left: ${props => props.locale === "ar" && "initial"};
        }
      }

      @media screen and (max-width: 1368px) {
        position: ${props => props.locale === "zh-hans" && "initial"};
      }

      @media screen and (max-width: 1298px) {
        position: ${props => props.locale === "ar" && "initial"};
      }

      @media screen and (max-width: 1298px) {
        position: ${props => (props.locale === "en" || props.locale === "cs" || props.locale === "el" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy") && "initial"};
      }
    }
  }

  &:not(.is-main) {
    .oo-hm {
      ${props => props.locale === "ar" ? "margin-left: 8px;" : "margin-right: 8px;"}

      @media screen and ${device.laptop} {
        ${props => props.locale === "ar" ? "margin-left: initial;" : "margin-right: initial;"}
      }
    }

    .oo-hm-item.oo-hm-item--download {
      .oo-hm-items-wrapper {
        @media screen and (max-width: 1400px) {
          top: ${props => props.locale === "zh-hans" && "99%"};
          left: ${props => props.locale === "zh-hans" && "initial"};
          right: ${props => props.locale === "zh-hans" && "0"};
        }

        @media screen and (max-width: 1250px) {
          top: ${props => (props.locale === "en" || props.locale === "cs" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy" || props.locale === "el") && "99%"};
          left: ${props => (props.locale === "en" || props.locale === "cs" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy" || props.locale === "el") && "initial"};
          right: ${props => (props.locale === "en" || props.locale === "cs" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy" || props.locale === "el") && "0"};
        }

        @media screen and ${device.laptop} {
          top: ${props => (props.locale === "en" || props.locale === "cs" || props.locale === "zh-hans" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy" || props.locale === "el") && "0"};
          right: ${props => (props.locale === "en" || props.locale === "cs" || props.locale === "zh-hans" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy" || props.locale === "el") && "initial"};
        }
      }

      @media screen and (max-width: 1400px) {
        position: ${props => props.locale === "zh-hans" && "initial"};
      }

      @media screen and (max-width: 1250px) {
        position: ${props => (props.locale === "en" || props.locale === "cs" || props.locale === "hi" || props.locale === "sr" || props.locale === "hy" || props.locale === "el") && "initial"};
      }
    }

    .oo-hm-item.oo-hm-item--login-signup {
      .oo-hm-items-wrapper {
        @media screen and (max-width: 1290px) {
          top: ${props => props.locale === "zh-hans" && "99%"};
          left: ${props => props.locale === "zh-hans" && "initial"};
          right: ${props => props.locale === "zh-hans" && "0"};
        }

        @media screen and ${device.laptop} {
          top: ${props => props.locale === "zh-hans" && "0"};
          right: ${props => props.locale === "zh-hans" && "initial"};
          left: ${props => props.locale === "zh-hans" && "initial"};
        }
      }

      @media screen and (max-width: 1290px) {
        position: ${props => props.locale === "zh-hans" && "initial"};
      }
    }
  }

  .oo-hm-item.oo-hm-item--partners {
    .oo-hm-items-wrapper {
      @media screen and (max-width: 1432px) {
        top: ${props => props.locale === "el" && "99%"};
        left: ${props => props.locale === "el" && "initial"};
        right: ${props => props.locale === "el" && "0"};
      }

      @media screen and (max-width: 1300px) {
        right: ${props => props.locale === "el" && "initial"};
        left: ${props => props.locale === "el" && "-8px"};
      }

      @media screen and (max-width: 1198px) {
        top: ${props => props.locale === "el" && "99%"};
        left: ${props => props.locale === "el" && "initial"};
        right: ${props => props.locale === "el" && "0"};
      }

      @media screen and (max-width: 1106px) {
        top: ${props => props.locale === "hy" && "99%"};
        left: ${props => props.locale === "hy" && "initial"};
        right: ${props => props.locale === "hy" && "0"};
      }

      @media screen and (max-width: 1032px) {
        top: ${props => props.locale === "pt-br" && "99%"};
        left: ${props => props.locale === "pt-br" && "initial"};
        right: ${props => props.locale === "pt-br" && "0"};
      }

      @media screen and ${device.laptop} {
        top: ${props => (props.locale === "el" || props.locale === "hy" || props.locale === "pt-br") && "0"};
        right: ${props => (props.locale === "el" || props.locale === "hy" || props.locale === "pt-br") && "initial"};
      }
    }

    @media screen and (max-width: 1432px) {
      position: ${props => props.locale === "el" && "initial"};
    }

    @media screen and (max-width: 1300px) {
      position: ${props => props.locale === "el" && "relative"};
    }

    @media screen and (max-width: 1198px) {
      position: ${props => props.locale === "el" && "initial"};
    }

    @media screen and (max-width: 1106px) {
      position: ${props => props.locale === "hy" && "initial"};
    }

    @media screen and (max-width: 1032px) {
      position: ${props => props.locale === "pt-br" && "initial"};
    }
  }

  .oo-hm.el {
    .oo-hm-item--products,
    .oo-hm-item--enterprise,
    .oo-hm-item--developers,
    .oo-hm-item--pricing,
    .oo-hm-item--partners,
    .oo-hm-item--resources {
      .oo-hm-item-heading {
        @media screen and (max-width: 1080px) {
          padding: 25px 4px; 
        }

        @media screen and ${device.laptop} {
          padding: 16px 40px 16px 24px;
        }

        @media screen and (max-width: 430px) {
          padding: 14px 40px 14px 24px;
        }
      }
    }
  }

  .oo-hm.hy {
    .oo-hm-item--products,
    .oo-hm-item--enterprise,
    .oo-hm-item--developers,
    .oo-hm-item--pricing,
    .oo-hm-item--partners,
    .oo-hm-item--resources {
      .oo-hm-item-heading {
        @media screen and (max-width: 1080px) {
          padding: 25px 6px; 
        }

        @media screen and ${device.laptop} {
          padding: 16px 40px 16px 24px;
        }

        @media screen and (max-width: 430px) {
          padding: 14px 40px 14px 24px;
        }
      }
    }
  }

  &.is-open {
    .nav-btn-mobile,
    .nav-selector-wrapper {
      @media screen and ${device.laptop} {
        transform: ${props => props.locale === "ar" ? "translate3d(-429px, 0, 0)" : "translate3d(429px, 0, 0)"};
        transition: transform 0.2s cubic-bezier(0.16,0.68,0.43,0.99);
      }

      @media screen and (max-width: 592px) {
        transform: ${props => props.locale === "ar" ? "translate3d(calc(64px - 100vw), 0, 0)" : "translate3d(calc(100vw - 64px), 0, 0)"};
      }

      @media screen and (max-width: 375px) {
        transform: ${props => props.locale === "ar" ? "translate3d(calc(32px - 100vw), 0, 0)" : "translate3d(calc(100vw - 32px), 0, 0)"};
      }
    }

    .nav-item-logo {
      @media screen and ${device.laptop} {
        transform: ${props => props.locale === "ar" ? "translate3d(-429px, 0, 0) translateX(-50%)" : "translate3d(429px, 0, 0) translateX(-50%)"};
        transition: transform 0.2s cubic-bezier(0.16,0.68,0.43,0.99);
      }

      @media screen and (max-width: 592px) {
        transform: ${props => props.locale === "ar" ? "translate3d(-380px, 0, 0) translateX(-50%)" : "translate3d(380px, 0, 0) translateX(-50%)"};
      }

      @media screen and (max-width: 430px) {
        transform: ${props => props.locale === "ar" ? "translate3d(-288px, 0, 0) translateX(-50%)" : "translate3d(288px, 0, 0) translateX(-50%)"};
      }
    }

    .nav-search-btn {
      @media screen and ${device.laptop} {
        transform: ${props => props.locale === "ar" ? "translate3d(-429px, 0, 0) translateY(-50%)" : "translate3d(429px, 0, 0) translateY(-50%)"};
        transition: transform 0.2s cubic-bezier(0.16,0.68,0.43,0.99);
      }

      @media screen and (max-width: 592px) {
        transform: ${props => props.locale === "ar" ? "translate3d(-380px, 0, 0) translateX(-50%)" : "translate3d(380px, 0, 0) translateY(-50%)"};
      }

      @media screen and (max-width: 430px) {
        transform: ${props => props.locale === "ar" ? "translate3d(-288px, 0, 0) translateX(-50%)" : "translate3d(288px, 0, 0) translateY(-50%)"};
      }
    }

    .overlay {
      @media screen and ${device.laptop} {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.3s cubic-bezier(0.16,0.68,0.43,0.99), visibility 0.3s cubic-bezier(0.16,0.68,0.43,0.99);
      }
    }

    .nav {
      @media screen and ${device.laptop} {
        transform: translate3d(0, 0, 0);
        transition: transform 0.2s cubic-bezier(0.16,0.68,0.43,0.99);
      }
    }
  }

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  }

  .nav-item-logo {
    display: flex;
    ${props => props.locale === "ar" ? "margin-left: 20px;" : "margin-right: 20px;"}
    width: 130px;
    height: 24px;

    img {
      object-fit: contain;

      @media screen and (max-width: 1300px) {
        object-position: ${props => props.locale === "ar" && "104px"};
      }

      @media screen and ${device.laptop} {
        object-position: ${props => props.locale === "ar" && "initial"};
      }
    }

    @media screen and (max-width: 1300px) {
      ${props => props.locale === "ar" ? "margin-left: 8px;" : "margin-right: 8px;"};
      overflow: hidden;
      min-width: 28px;
      width: 28px;
    }

    @media screen and ${device.laptop} {
      position: absolute;
      left: 50%;
      margin: 0;
      width: 130px;
      min-width: 130px;
      height: 24px;
      transform: translateX(-50%);
    }
  }

  .nav-btn-mobile {
    display: none;
    border: none;
    width: 20px;
    min-width: 20px;
    height: 14px;
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/mob-menu.svg");
    background-repeat: no-repeat;

    div {
      @media screen and ${device.laptop} {
        display: flex;
      }

      svg {
        rect {
          @media screen and ${device.laptop} {
            fill: #444444;
          }
        }
      }
    }

    @media screen and ${device.laptop} {
      box-sizing: border-box;
      display: flex;
      padding: 0;
      cursor: pointer;
    }
  }

  .nav-search-area {
    ${props => props.locale === "ar" ? "margin-left: 8px;" : "margin-right: 8px;"}
    width: 100%;

    @media screen and ${device.laptop} {
      ${props => props.locale === "ar" ? "margin-right: 12px;" : "margin-left: 12px;"}
    }
  }

  .search-area {
    width: 100%;

    .search-input {
      border-radius: 5px;
      padding: ${props => props.locale === "ar" ? "8px 16px 8px 50px" : "8px 50px 8px 16px"};
      font-size: 14px;
      line-height: 24px;
      height: 40px;

      &:hover:not(:focus) {
        border-color: #AAAAAA;
      }

      &:focus {
        border-color: #AAAAAA;
      }

      @media screen and ${device.laptop} {
        padding: ${props => props.locale === "ar" ? "4px 16px 4px 32px" : "4px 32px 4px 16px"};
        height: 32px;
        color: #666666;
        background-color: #F9F9F9;
      }
    }

    .search-icon {
      ${props => props.locale === "ar" ? "left: 13px;" : "right: 13px;"}

      @media screen and ${device.laptop} {
        ${props => props.locale === "ar" ? "left: 4px;" : "right: 4px;"}
        width: 24px;
        height: 24px;
      }
    }
  }

  .nav-search-btn {
    display: inline-flex;
    border: none;
    ${props => props.locale === "ar" ? "margin-left: 8px;" : "margin-right: 8px;"}
    padding: 24px 8px;
    background-color: transparent;
    cursor: pointer;

    @media screen and ${device.laptop} {
      ${props => props.locale === "ar" ? "margin-right: auto;" : "margin-left: auto;"}
      padding: 12px 8px;
    }

    @media screen and (max-width: 592px) {
      ${props => props.locale === "ar" ? "margin-left: 0;" : "margin-right: 0;"}
    }
  }

  .nav-selector-wrapper {
    display: flex;
    align-items: center;
    z-index: ${props => props.locale === "ar" && "2"};
  }

  .overlay {
    @media screen and ${device.laptop} {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      visibility: hidden;
      background-color: rgba(0, 0, 0, 0.27);
      z-index: 1001;
    }
  }

  .oo-hm {
    position: initial;
    max-width: 100%;

    .oo-hm-item--resources {
      .oo-hm-item-heading {
        position: relative;
        color: #ff6f3d;

        &:after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          border-bottom: 1px solid #ff6f3d;
          width: calc(100% - 24px);
          transform: translateX(-50%);

          @media screen and (max-width: 1300px) {
            width: calc(100% - 16px);
          }

          @media screen and ${device.laptop} {
            content: none;
          }
        }

        @media screen and ${device.laptop} {
          color: #444444;
          background-color: #f9f9f9;
        }
      }
    }

    .oo-hm-item-link--blog {
      color: #FF6F3D;
    }

    @media screen and ${device.laptop} {
      position: fixed;
    }
  }

  @media screen and ${device.laptop} {
    grid-template-columns: auto 152px auto;
    justify-content: space-between;
    height: 48px;
  }

  @media screen and (max-width: 592px) {
    padding: 0 18px 0 15px;
  }
`;

export { StyledHeader, GlobalStyles };
