import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;

  #navitem-enterprise {
    padding: 28px 20px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #444444;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #FF6F3D;
    }
  }

  .menu-wrapper {
    display: flex;

    @media (min-width: 1024px) {
      &:before {
        display: block;
        position: absolute;
        width: 0;
        content: "";
        height: 1px;
        background-color: #ff642e;
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
        background-color: #ff642e;
        transition: width 0.2s ease-in-out;
        left: 50%;
        top: 0;
      }
    }
  }

  @media (min-width: 1024px) {
    .menu-items-wrapper {
      left: 50%;
      transform: translateX(-50%);
    }

    #navitem-pricing,
    #navitem-partners,
    #navitem-resources {
      .menu-items-wrapper {
        left: calc(50% + 152px);
      }
    }

    #navitem-products,
    #navitem-resources {
      .outer-box {
        &:last-child {
          width: max-content;
          min-width: 312px;
          max-width: 520px;
        }
      }
    }

    #navitem-download,
    #navitem-partners {
      .outer-box {
        &:first-child {
          width: max-content;
          min-width: 312px;
          max-width: 520px;
        }
      }
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
    font-size: 16px;
    transition: right 0.5s;
    width: 429px;
    z-index: 5;
    display: block;
    padding-top: 8px;
    box-sizing: border-box;
    overflow-x: hidden;

    #navitem-enterprise {
      position: relative;
      display: block;
      padding: 16px 40px 16px 24px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;

      &:before {
        display: block;
        content: "";
        width: 10px;
        height: 10px;
        background-image: url('https://static-oforms.onlyoffice.com/icons/arrow-gray.svg');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        position: absolute;
        right: 24px;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.1s linear;
      }

      &:hover {
        color: #444444;
        background-color: #F9F9F9;
      }
    }

    .menu-items-wrapper {
      text-align: left;
    }

    .menu-wrapper {
      flex-direction: column;
      padding: 24px 0;
    }

    .mobile-heading-nav-item {
      box-sizing: border-box;
      cursor: pointer;
      display: block;
      font-size: 16px;
      letter-spacing: 0.04em;
      line-height: 24px;
      padding: 16px 32px;
      height: 56px;
      min-height: 56px;
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
        top: 50%;
        transform: translateY(-50%) rotate(180deg);
        transition: 0.1s linear;
      }
    }

    #navitem-resources {
      .menu-wrapper {
        .outer-box {
          padding: 0;
          margin: 0;

          &:after {
            content: none;
          }
        }
      }
    }

    #navitem-enterprise,
    #navitem-developers,
    #navitem-pricing,
    #navitem-partners {
      .menu-items-wrapper {
        display: flex;
        flex-direction: column;
        text-align: left;
        height: 100%;
      }
  
      .menu-wrapper {
        flex-direction: column;
        padding: 24px 0 0;
        height: 100%;
      }

      .outer-box {
        &:not(:last-child) {
          padding: 0;
          margin-bottom: 24px;
        }

        &.bg-grey {
          margin-top: auto;
        }
      }
    }
  }
`;

export default StyledNav;
