import styled from "styled-components";
import download from "@public/images/icons/download.svg";

const StyledDownLoadBlock = styled.div`
  border-radius: 5px;
  padding: 48px 32px 56px;
  text-align: center;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  background-color: #FFFFFF;

  .download-block-title {
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
    text-align: center;

    span {
      color: #FF6F3D;
    }
  }

  .download-block-btns {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    margin: 0 auto;
    max-width: 914px;

    a {
      display: inline-flex;
    }
  }

  .download-block-btn {
    position: relative;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    mix-blend-mode: normal;
    border: 1px solid #AAAAAA;
    border-radius: 3px;
    padding: 11px 6px;
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    max-width: 170px;
    min-height: 56px;
    color: #444444;
    text-decoration: none;

    &:before {
      content: "";
      height: 32px;
      background-image: url(${download.src});
      background-repeat: no-repeat;
      background-size: 514px 34px;
      filter: grayscale(1);
    }

    &.windows {
      &:before {
        margin-right: 8px;
        width: 32px;
        background-position: -8px 0;
      }
    }

    &.linux {
      &:before {
        margin-right: 8px;
        width: 32px;
        background-position: -39px 0;
      }
    }

    &.mac-os {
      &:before {
        margin-right: 8px;
        width: 32px;
        background-position: -71px 0;
      }
    }

    &.google-play {
      &:before {
        width: 128px;
        background-position: -234px 50%;
      }
    }

    &.app-store {
      &:before {
        width: 121px;
        background-position: -107px 50%;
      }
    }

    &:hover {
      &:before {
        filter: grayscale(0);
      }
    }
  }
`;

export default StyledDownLoadBlock;
