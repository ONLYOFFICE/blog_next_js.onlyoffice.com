import styled, { keyframes } from "styled-components";
import { device } from "@components/utils/devices";

const menuLineLeft = keyframes`
  0% {
    width: 0;
    left: 50%;
  }

  100% {
    width: 50%;
    left: 0;
  }
`;

const menuLineRight = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 50%;
  }
`;

const StyledLanguageSelector = styled.div`
  position: relative;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  transition: transform .2s cubic-bezier(.16,.68,.43,.99);

  &.is-open {
    .language-list {
      display: block;

      &:before {
        animation: ${menuLineLeft} 0.3s forwards ease-in-out;
      }

      &:after {
        animation: ${menuLineRight} 0.3s forwards ease-in-out;
      }
    }

    .arrow-image {
      transform: translateY(0) rotate(-180deg);
      transition-duration: 0.3s;

      path {
        fill: #FF6F3D;
      }
    }

    .flag-image {
      background-position-y: -40.5px;
    }
  }

  .language-button {
    display: flex;
    align-items: center;
    border: none;
    padding: 0;
    min-height: 72px;
    background-color: transparent;

    @media screen and ${device.laptop} {
      min-height: 48px;
    }
  }

  .flag-image {
    padding-right: 3px;
  }

  .arrow-image,
  .flag-image {
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .flag-image {
    display: block;
    width: 24px;
    height: 24px;
    text-decoration: none;
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/globe.svg");
    background-repeat: no-repeat;
    }
  }

  .arrow-image {
    width: 9px;
    height: 20px;
    margin-top: 5px;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    transition-duration: 0.3s;
  }

  .title-lng {
    display: inline-block;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    color: #333;
    padding-left: 8px;
    vertical-align: middle;
    text-transform: uppercase;
    width: fit-content;
  }

  .language-list {
    position: absolute;
    top: 99%;
    left: 50%;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    border-radius: 0 0 8px 8px;
    margin: 0;
    padding: 16px 0;
    width: 153px;
    z-index: 100;
    background-color: #ffffff;
    box-shadow: 0 20px 50px rgba(85,85,85,0.15);
    transform: translateX(-50%);
    list-style-type: none;

    &:before {
      display: block;
      position: absolute;
      width: 0;
      content: "";
      height: 1px;
      background-color: #FF642E;
      transition: width 0.2s ease-in-out;
      left: 50%;
      top: 0;
    }

    &:after {
      display: block;
      position: absolute;
      width: 0;
      content: "";
      height: 1px;
      background-color: #FF642E;
      transition: width 0.2s ease-in-out;
      left: 50%;
      top: 0;
    }

    @media screen and ${device.laptopL} {
      left: -100%;
    }
  }

  .language-item {
    outline: none;
    -webkit-tap-highlight-color: transparent;

    .active {
      color: #FF6F3D;
    }

    .language-link {
      min-width: max-content;
      padding: 8px 24px;
      font-size: 14px;
      display: flex;
      gap: 8px;
      color: #666666;

      &:hover {
        background-color: #F5F5F5;
        
      }

      b {
        text-transform: uppercase;
      }
    }

    .language-item-image {
      margin-top: -1px;
    }
  
    .title-lng:hover {
      color: #ff865c;
      cursor: pointer;
    }
  }
`;

export default StyledLanguageSelector;
