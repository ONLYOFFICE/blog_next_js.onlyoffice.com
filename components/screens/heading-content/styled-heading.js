import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledHeadingTablet = css`
  &.is-open {
    .advent-announce,
    .nav-items-mobile,
    .language-selector {
      transform: translate3d(429px, 0, 0);
    }

    .nav-item-logo {
      transform: translate3d(429px, 0, 0) translateX(-50%);
    }
  }

  .navbar {
    grid-template-columns: auto 152px auto;
    justify-content: space-between;
    height: 48px;
    transition: transform 0.2s cubic-bezier(0.16,0.68,0.43,0.99);
  }

  .nav-items-mobile {
    display: block;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
    div {
      svg {
        rect {
          fill: black;
        }
      }
    }
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.16,0.68,0.43,0.99);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    background-color: rgba(0,0,0,.5);
    transition: opacity 0.3s, visibility 0.3s;
    z-index: 1001;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }

  .nav-item-links {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 8px;
    width: 429px;
    max-width: 100%;
    height: 100vh;
    transform: translate3d(-100%,0,0);
    border-right: 1px solid #e5e5e5;
    z-index: 1002;
    transition: transform .2s cubic-bezier(.16,.68,.43,.99);

    &.is-open {
      transform: translate3d(0,0,0);
    }
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
    transition: transform 0.2s cubic-bezier(0.16,0.68,0.43,0.99);
  }

  .nav-item-lng {
    display: block;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;

    .nav-item-tel {
      display: none;
    }
  }

  .search_area {
    right: 70px;

    &.active {
      width: calc(100% - 120px);
    }
  }
`;

const StyledHeading = styled.div`
  .navbar {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 28px 0 24px;
    height: 72px;
    background-color: #ffffff;
    border-bottom: 1px solid #d9d9d9;
  }

  .nav-item-logo {
    width: 154px;
    height: 28px;
  }

  .nav-item-links {
    position: absolute;
    left: 50%;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 936px;
    height: 72px;
    transform: translateX(-50%);
  }

  .nav-items-mobile {
    display: none;
  }

  .search_area {
    margin: 0 16px 0 auto;
    width: 221px;

    .group-input {
      height: 40px;
    }

    .search_input {
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      padding: 9px 40px 9px 16px;
      font-size: 14px;
      line-height: 160%;
      font-family: "Open Sans", sans-serif;
      font-weight: 400;
      color: #666;
      height: 40px;
      background-color: #ffffff;

      &::placeholder {
        color: #919192;
      }

      &:not(focus) {
        border-color: #e0e0e0;
      }
    }

    .search_icon {
      right: 13px;
    }
  }

  @media (max-width: 1530px) {
    .nav-item-logo {
      overflow: hidden;
      min-width: 32px;
      width: 32px;
    }

    .search_area {
      position: absolute;
      right: 70px;
      width: 0;
      margin: 0;
      transition: width 0.1s ease;

      .group-input {
        height: 32px;

        .search_input {
          border: none;
          padding: 0;
          height: 32px;
          transition: border 0.1s ease, padding 0.1s ease;
        }
      }

      .search_icon {
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

        .search_input {
          border: 1px solid #e0e0e0;
          padding: 0px 40px 0 16px;
        }
      }
    }
  }

  @media ${device.laptop} {
    ${StyledHeadingTablet};
  }

  @media (max-width: 592px) {
    &.is-open {
      .advent-announce,
      .nav-items-mobile,
      .language-selector {
        transform: translate3d(380px, 0, 0);
      }
  
      .nav-item-logo {
        transform: translate3d(380px, 0, 0) translateX(-50%);
      }
    }
    
    .nav-item-links {
      width: 380px;
    }

    .navbar {
      padding: 0 18px 0 15px;
    }

    .nav-item-logo {
      width: 30px;
      height: 28px;
      overflow: hidden;
    }

    .search_area {
      right: 60px;

      &.active {
        width: calc(100% - 106px);
      }
    }
  }

  @media (max-width: 430px) {
    &.is-open {
      .advent-announce,
      .nav-items-mobile,
      .language-selector {
        transform: translate3d(288px, 0, 0);
      }
  
      .nav-item-logo {
        transform: translate3d(288px, 0, 0) translateX(-50%);
      }
    }

    .nav-item-links {
      width: 288px;
    }
  }
`;

export default StyledHeading;
