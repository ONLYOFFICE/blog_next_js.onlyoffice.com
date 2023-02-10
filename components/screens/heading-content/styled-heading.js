import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledHeadingTablet = css`
  grid-template-columns: auto 152px auto;
  justify-content: space-between;
  height: 48px;

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
`;

const StyledHeading = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 28px 0 24px;
  height: 70px;
  background: #F5F5F5;
  border-bottom: 1px solid #d9d9d9;

  .nav-item-logo {
    width: 154px;
    height: 28px;
  }

  .nav-item-links {
    position: absolute;
    left: 50%;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
    max-width: 936px;
    height: 70px;
    transform: translateX(-50%);
  }

  .nav-items-mobile {
    display: none;
  }

  @media (max-width: 1530px) {
    .nav-item-logo {
      overflow: hidden;
      min-width: 32px;
      width: 32px;
    }
  }

  @media ${device.laptop} {
    ${StyledHeadingTablet};
  }

  @media (max-width: 592px) {
    padding: 0 18px 0 15px;

    .nav-item-logo {
      width: 30px;
      height: 28px;
      overflow: hidden;
    }

    .nav-item-links {
      width: 267px;
    }
  }
`;

export default StyledHeading;
