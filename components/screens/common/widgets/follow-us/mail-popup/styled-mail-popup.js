import styled, { keyframes } from "styled-components";

const loadSpin = keyframes`
  100%  { 
    transform: translate(-50%, -50%) rotate(360deg); 
  }
`;

const StyledMailPopup = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255 255 255 / 50%);
  z-index: 1000;
  overflow-y: auto;
  opacity: 0;
  visibility: hidden;

  &.show {
    opacity: 1;
    visibility: initial;
    transition: opacity 0.3s, visibility 0.3s;
  }

  .mail-popup-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    min-height: 100%;
  }

  .mail-popup-wrapper {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 110px 0;
    width: 100%;
    max-width: 649px;
    height: 633px;
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/popup-bg.png");
    background-repeat: no-repeat;
    background-position: 50% 0;

    @media screen and (max-width: 399px) {
      padding: 103px 0 88px;
      max-width: 390px;
      background-size: 500px 566px;
    }
  }

  .mail-popup-body {
    width: 100%;
    max-width: 370px;

    @media screen and (max-width: 399px) {
      max-width: 274px;
    }
  }

  .mail-popup-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .group-input {
      margin-bottom: 26px;
      height: 36px;

      @media screen and (max-width: 399px) {
        margin-bottom: 22px;
      }
    }
  }

  .mail-popup-header {
    display: flex;
    align-items: center;
    margin-bottom: 17px;

    @media screen and (max-width: 399px) {
      margin-bottom: 10px;
    }
  }

  .mail-popup-title {
    flex: 1 1 auto;
    margin-right: 8px;
    font-size: 18px;
    line-height: 20px;
    font-weight: 600;
    color: #333;

    &.ar {
      margin-right: initial;
      margin-left: 8px;;
    }
  }

  .mail-popup-close-btn {
    display: flex;
    border: none;
    padding: 0;
    height: 20px;
    width: 20px;
    background: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/buttons.png") -18px -78px no-repeat transparent;
    cursor: pointer;
  }

  .mail-popup-text {
    display: flex;
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 18px;
    color: #333;
    white-space: break-spaces;

    @media screen and (max-width: 399px) {
      font-size: 13px;
    }
  }

  .mail-popup-success-text {
    margin: 21px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #666;
  }

  .mail-popup-success-btn {
    border: none;
    border-radius: 3px;
    padding: 22px 26px;
    font-size: 12px;
    font-weight: 600;
    line-height: 13px;
    color: #ffffff;
    height: 56px;
    text-align: center;
    text-transform: uppercase;
    transition-duration: 0.3s;
    background-color: #444444;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #555555;
    }

    @media screen and (max-width: 592px) {
      padding: 16px 26px;
      font-size: 12px;
      line-height: 16px;
    }
  }

  .mail-popup-input-wrapper {
    position: relative;
    margin-bottom: 26px;
    width: 100%;

    @media screen and (max-width: 399px) {
      margin-bottom: 22px;
    }
  }

  .mail-popup-input {
    box-sizing: border-box;
    border: 1px solid #aaaaaa;
    border-radius: 3px;
    padding: 0 16px;
    font-family: inherit;
    font-size: 16px;
    line-height: 22px;
    color: #333333;
    width: 100%;
    height: 36px;

    &.error {
      border-color: #cb0000;
      background-color: #fff7f7;
    }

    @media screen and (max-width: 592px) {
      padding: 0px 12px;
      font-size: 14px;
    }
  }

  .mail-popup-error-text {
    position: absolute;
    font-size: 13px;
    line-height: 21px;
    color: #cb0000;
    width: max-content;
    white-space: break-spaces;
  }

  .mail-popup-btn {
    position: relative;
    border: none;
    border-radius: 3px;
    font-family: inherit;
    font-size: 13px;
    padding: 0 25px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: #ffffff;
    height: 56px;
    background-color: #ff6f3d;
    text-transform: uppercase;
    transition: background-color 0.3s;
    cursor: pointer;

    &:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 18px;
      height: 18px;
      margin: 0 auto;
      border: 2px solid #ffffff;
      border-radius: 75%;
      border-right-color: transparent;
      transform: translate(-50%, -50%);
      animation: ${loadSpin} 1025ms infinite linear;
      transition: border 0.3s;
      opacity: 0;
    }

    &:hover {
      background-color: #ff865c;
    }

    &.loading {
      color: transparent;

      &:after {
        opacity: 1;
      }
    }

    @media screen and (max-width: 592px) {
      height: 48px;
    }
  }
`;

export default StyledMailPopup;
