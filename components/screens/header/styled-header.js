import styled, { createGlobalStyle } from "styled-components";
import { device } from "@components/utils/devices";

const GlobalStyles = createGlobalStyle`
  html {
    ${({ stateMobile }) => (stateMobile ? "overflow: hidden;" : "")}
  }
`;

const StyledHeader = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;
  background-color: #FFFFFF;
  border-bottom: 1px solid #d9d9d9;

  .nav-item-logo {
    display: flex;
    width: 154px;
    height: 28px;
  }

  .nav-btn-mobile {
    display: none;
    border: none;
    width: 20px;
    height: 14px;
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/mob-menu.svg");
    background-repeat: no-repeat;
  }

  .search-area {
    margin: ${props => props.locale === "ar" ? "0 auto 0 16px" : "0 16px 0 auto"};
    width: 221px;
    z-index: 10;

    .search-input {
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      padding: ${props => props.locale === "ar" ? "9px 16px 9px 40px" : "9px 40px 9px 16px"};
      font-size: 14px;
      line-height: 160%;
      font-family: "Open Sans", sans-serif;
      font-weight: 400;
      color: #666;
      height: 40px;
      text-align: initial;
      background-color: #ffffff;

      &::placeholder {
        color: #919192;
      }

      &:not(focus) {
        border-color: #e0e0e0;
      }

      &:hover:not(focus) {
        border-color: #e0e0e0;
      }
    }

    .search-icon {
      ${props => props.locale === "ar" ? "left: 16px;" : "right: 13px;"}
    }
  }

  .nav-selector-wrapper {
    display: flex;
    align-items: center;
    z-index: ${props => props.locale === "ar" && "2"};
  }

  .nav-menu {
    position: absolute;
    left: 50%;
    width: 100%;
    max-width: 936px;
    transform: translateX(-50%);
    z-index: 1002;

    @media screen and ${device.laptop} {
      position: initial;
      left: initial;
      width: initial;
      max-width: initial;
      transform: initial;
    }
  }

  .oo-hm {
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
          width: calc(100% - 40px);
          transform: translateX(-50%);

          @media screen and (max-width: 1300px) {
            width: calc(100% - 20px);
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
  }


  @media screen and (max-width: 1530px) {
    .nav-item-logo {
      overflow: hidden;
      min-width: 32px;
      width: 32px;

      img {
        object-position: ${props => props.locale === "ar" && "122px"};
      }
    }

    .search-area {
      position: absolute;
      ${props => props.locale === "ar" ? "left: 70px;" : "right: 70px;"}
      width: 0;
      margin: 0;
      z-index: 2;
      transition: width 0.1s ease;

      .search-input {
        border: none;
        padding: 0;
        height: 32px;
        transition: border 0.1s ease, padding 0.1s ease;
      }

      .search-icon {
        width: 18px;
        height: 18px;
        pointer-events: initial;

        img {
          width: 18px;
          height: 18px;
        }
      }

      &.active {
        width: calc(100% - 140px);

        .search-input {
          border: 1px solid #e0e0e0;
          padding: ${props => props.locale === "ar" ? "0 16px 0 40px" : "0 40px 0 16px"};
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .nav-item-logo {
      overflow: hidden;
      min-width: 32px;
      width: 32px;
    }
  }

  @media screen and ${device.laptop} {
    grid-template-columns: auto 152px auto;
    justify-content: space-between;
    height: 48px;
  
    &.is-open {
      .nav-btn-mobile,
      .nav-selector-wrapper {
        transform: ${props => props.locale === "ar" ? "translate3d(-429px, 0, 0)" : "translate3d(429px, 0, 0)"};
        transition: transform 0.2s cubic-bezier(0.16,0.68,0.43,0.99);
      }
  
      .nav-item-logo {
        transform: ${props => props.locale === "ar" ? "translate3d(-429px, 0, 0) translateX(-50%)" : "translate3d(429px, 0, 0) translateX(-50%)"};
        transition: transform 0.2s cubic-bezier(0.16,0.68,0.43,0.99);
      }
  
      .search-icon {
        transform: ${props => props.locale === "ar" ? "translate3d(-429px, 0, 0) translateY(-50%)" : "translate3d(429px, 0, 0) translateY(-50%)"};
        transition: transform 0.2s cubic-bezier(0.16,0.68,0.43,0.99);
      }
  
      .overlay {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.3s cubic-bezier(0.16,0.68,0.43,0.99), visibility 0.3s cubic-bezier(0.16,0.68,0.43,0.99);
      }
  
      .nav {
        transform: translate3d(0, 0, 0);
        transition: transform 0.2s cubic-bezier(0.16,0.68,0.43,0.99);
      }
    }

    .nav-btn-mobile {
      box-sizing: border-box;
      display: flex;
      padding: 0;
      cursor: pointer;

      div {
        display: flex;

        svg {
          rect {
            fill: #444444;
          }
        }
      }
    }

    .search-area {
      &.active {
        width: calc(100% - 120px);
      }
    }
  
    .overlay {
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
  
    .nav-item-logo {
      position: absolute;
      left: 50%;
      display: block;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 1;
      text-align: center;
      margin: 0 auto;
      width: 152px;
      height: 28px;
      transform: translateX(-50%);

      img {
        object-position: ${props => props.locale === "ar" && "initial"};
      }
    }
  }

  @media screen and (max-width: 592px) {
    padding: 0 18px 0 15px;

    &.is-open {
      .nav-btn-mobile,
      .nav-selector-wrapper {
        transform: ${props => props.locale === "ar" ? "translate3d(calc(64px - 100vw), 0, 0)" : "translate3d(calc(100vw - 64px), 0, 0)"};
      }
  
      .nav-item-logo {
        transform: ${props => props.locale === "ar" ? "translate3d(-380px, 0, 0) translateX(-50%)" : "translate3d(380px, 0, 0) translateX(-50%)"};
      }
  
      .search-icon {
        transform: ${props => props.locale === "ar" ? "translate3d(-380px, 0, 0) translateX(-50%)" : "translate3d(380px, 0, 0) translateY(-50%)"};
      }
  
      .overlay {
        opacity: 1;
        visibility: visible;
      }
    }

    .nav-item-logo {
      width: 30px;
      height: 28px;
      overflow: hidden;

      img {
        object-position: ${props => props.locale === "ar" && "122px"};
      }
    }

    .search-area {
      ${props => props.locale === "ar" ? "left: 60px;" : "right: 60px;"}

      &.active {
        width: calc(100% - 106px);
      }
    }
  }

  @media screen and (max-width: 430px) {
    &.is-open {
      .nav-item-logo {
        transform: ${props => props.locale === "ar" ? "translate3d(-288px, 0, 0) translateX(-50%)" : "translate3d(288px, 0, 0) translateX(-50%)"};
      }
  
      .search-icon {
        transform: ${props => props.locale === "ar" ? "translate3d(-288px, 0, 0) translateX(-50%)" : "translate3d(288px, 0, 0) translateY(-50%)"};
      }
  
      .overlay {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @media screen and (max-width: 375px) {
    &.is-open {
      .nav-btn-mobile,
      .nav-selector-wrapper {
        transform: ${props => props.locale === "ar" ? "translate3d(calc(32px - 100vw), 0, 0)" : "translate3d(calc(100vw - 32px), 0, 0)"};
      }
    }
  }
`;

export { StyledHeader, GlobalStyles };
