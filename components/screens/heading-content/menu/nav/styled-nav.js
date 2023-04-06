import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;

  .navitem_features_menu {
    color: #fff;
  }

  .external-link {
    color: #333;
    text-decoration: none;
    :hover {
      color: rgb(255, 111, 61);
    }
  }

  .menu_wrapper {
    flex-direction: unset;
    justify-content: unset;
    align-content: unset;
    flex-wrap: unset;
    align-items: unset;

    @media (min-width: 1024px) {
      &:before {
        display: block;
        position: absolute;
        width: 50%;
        content: "";
        height: 1px;
        background-color: #ff642e;
        transition: width 0.2s ease-in-out;
        left: 0;
        top: 0;
      }

      &:after {
        display: block;
        position: absolute;
        width: 50%;
        content: "";
        height: 1px;
        background-color: #ff642e;
        transition: width 0.2s ease-in-out;
        left: 50%;
        top: 0;
      }
    }
  }

  @media (min-width: 1024px) {
    #navitem_partners,
    #navitem_about,
    #navitem_fordevelopers,
    #navitem_prices {
      position: relative;
    }
    #navitem_features {
      .outer-box {
        max-width: 100%;
      }
    }
    #navitem_download {
      .menu_wrapper {
        > .outer-box.with_border {
          width: min-content;
        }
      }

      .outer-box.with_border {
        &:after {
          top: 32px;
          height: 179px;
          transform: initial;
        }
      }
    }
    #navitem_prices {
      .outer-box {
        &:first-child {
          min-width: 236px;
        }

        &:last-child {
          min-width: 236px;
        }
      }
    }
    #navitem_partners {
      .outer-box {
        &:last-child {
          min-width: 236px;
        }
      }
    }
    #navitem_about {
      .outer-box {
        &:last-child {
          max-width: 100%;
        }
      }
    }
    #navitem_features .menu-items-wrapper {
      left: 50%;
      transform: translateX(-50%);
    }
    #navitem_forbusiness .menu-items-wrapper {
      left: calc(50% - 440px);
    }
    #navitem_fordevelopers .menu-items-wrapper {
      left: calc(50% - 130px);
    }
    #navitem_download .menu-items-wrapper {
      left: 50%;
      transform: translateX(-50%);
    }
    #navitem_prices .menu-items-wrapper {
      left: calc(50% - 180px);
    }
    #navitem_partners .menu-items-wrapper {
      left: calc(50% - 210px);
    }
    #navitem_about .menu-items-wrapper {
      left: calc(50% - 395px);
    }
  }

  @media ${device.laptop} {
    padding: 0;
    background-color: #fff;
    min-height: 100px;
    height: 100%;
    margin: 0;
    position: fixed;
    left: ${(props) => (props.stateMobile ? "0" : "-120vw")};
    top: 0;
    overflow: auto;
    text-align: center;
    font-size: 16px;
    transition: right 0.5s;
    width: 429px;
    z-index: 5;
    display: block;
    padding-top: 8px;
    box-sizing: border-box;
    overflow-x: hidden;

    .menu_wrapper {
      display: block;
      padding: 8px 0;
      min-height: 300px;
    }

    .mobile-heading-nav-item {
      cursor: pointer;
      display: block;
      font-size: 18px;
      letter-spacing: 0.03em;
      line-height: 1.33em;
      margin: 0 auto;
      padding: 6px 22px 12px 22px;
      border-bottom: 1px solid #f2f2f2;
      color: #ff6f3d;
      position: relative;
      text-transform: uppercase;
      text-align: center;

      &:before {
        background-image: url('https://static-oforms.onlyoffice.com/icons/arrow-red.svg');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        display: block;
        content: "";
        width: 10px;
        height: 10px;
        left: 14px;
        position: absolute;
        top: 12px;
        transform: rotate(180deg);
        transition: 0.1s linear;
      }
    }

    .phone_wrapper {
      bottom: 0;
      top: auto;
      width: 100%;
      height: 54px;
      position: absolute;
      right: 0;
      left: auto;
      margin: 0;
      padding: 0;
    }

    .nav-item-mobile-tel {
      box-sizing: border-box;
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
      background-color: #f6f6f6;
      position: absolute;
      bottom: 0;
      left: 0;
      letter-spacing: 0.02em;
      padding: 15px 16px 15px 20px;
      text-decoration: none;
      width: 100%;
      &:before {
        background-image: url('https://static-oforms.onlyoffice.com/icons/phone.svg');
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 18px 18px;
        content: "";
        display: inline-block;
        height: 18px;
        margin: 0 13px 4px 0;
        padding: 0;
        vertical-align: middle;
        width: 18px;
      }
      &:hover {
        color: #333;
      }
    }
  }

  @media (max-width: 600px) {
    width: 267px;

    .mobile-heading-nav-item {
      font-size: 16px;
    }
  }
`;

export default StyledNav;
