import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledNavMenu = styled.div`
  .heading-nav-item {
    padding: 28px 20px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #444444;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      color: #FF6F3D;
    }
  }

  .outer-box {
    position: relative;
    box-sizing: border-box;
    padding: 32px 0;
    width: 312px;

    &.with-border {
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 1px;
        height: calc(100% - 64px);
        transform: translateY(-50%);
        background-color: #CCCCCC;
        opacity: 0.4;
      }
    }
  }

  .dropdown-item-group {
    .dropdown-item {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  .dropdown-item-box {
    text-decoration: none;
  }

  .dropdown-item {
    position: relative;
    display: flex;
    padding: 0 32px 0 68px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: #444444;
    text-decoration: none;

    &:before {
      content: "";
      position: absolute;
      left: 32px;
      top: 0px;
      display: block;
      width: 24px;
      height: 24px;
      background-image: url("https://static-blog.onlyoffice.com/images/menu-pics/menu_icons.svg");
      background-repeat: no-repeat;
    }

    &:not(:last-child) {
      margin-bottom: 24px;
    }

    &.no-bold {
      padding: 0 64px;
      font-weight: 400;

      &:before {
        content: none;
      }

      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }

    &:hover {
      color: #FF6F3D;
    }
  }

  .dropdown-item-title {
    display: flex;
    margin-bottom: 16px;
    padding: 0 32px;
    font-size: 16px;
    line-height: 26px;
    font-weight: 700;
    color: #444444;
    text-decoration: none;
    
    &:hover {
      color: #FF6F3D;
    }
  }

  .dropdown-item-text {
    display: block;
    padding: 0 32px;
    font-size: 14px;
    line-height: 21px;
    color: #666666;
  }

  .dropdown-item-label {
    margin-bottom: 24px;
    border-radius: 5px;
    padding: 4px 32px;
    font-size: 13px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #808080;
  }

  .bg-grey {
    background-color: #F9F9F9;
  }

  .menu-pic-div {
    font-size: 14px;
    line-height: 21px;
    color: #444444;
  }

  .menu-pic-img {
    margin: 0 32px 16px;
    width: 180px;
    height: 90px;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .menu-pic-header {
    margin: 0;
    padding: 0 32px;
    cursor: pointer;

    &:hover {
      color: #FF6F3D;
    }
  }

  .inner-box {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  .nav-2nd-menu-link {
    display: flex;
    padding: 0 32px 0 72px;
    font-size: 14px;
    line-height: 22px;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #444444;
    text-decoration: none;

    &:not(:last-child) {
      margin-bottom: 12px;
    }

    &:hover {
      color: #FF6F3D;
    }
  }

  .outer-box-line {
    border-bottom: 1px solid #EBEBEB;
    margin: 32px;
  }

  .nowrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 32px 0 72px;
    margin-bottom: 12px;
  }

  .nav-item-nowrap-link {
    font-size: 14px;
    line-height: 22px;
    color: #444444;
    text-decoration: none;

    &:hover {
      color: #FF6F3D;
    }
  }

  .slash-text {
    margin: 0 6px;
    font-size: 14px;
    line-height: 22px;
    color: #444444;
  }

  #see-it-img {
    background-image: url("https://static-oforms.onlyoffice.com/images/menu-pics/menu_see_it_in_act.png");
  }

  #reseller-img {
    background-image: url("https://static-oforms.onlyoffice.com/images/menu-pics/menu_reseller.svg");
  }

  #latest-events-img {
    background-image: url("https://static-oforms.onlyoffice.com/images/menu-pics/events.svg");
  }

  #education-img {
    background-image: url("https://static-oforms.onlyoffice.com/images/menu-pics/menu_for_developers.png");
  }

  #navitem-download-docspace,
  #navitem-download-docs-enterprise,
  #navitem-download-workspace,
  #navitem-download-docs-dev {
    cursor: default;

    &:hover {
      color: #444444;
    }
  }

  #navitem-download-signin {
    display: block;
    width: 100%;
  }

  #navitem-pricing-for-business,
  #navitem-pricing-docs-enterprice,
  #navitem-pricing-docs-docspace,
  #navitem-pricing-for-dev,
  #navitem-download-docs-enterprise,
  #navitem-download-workspace,
  #navitem-download-docspace,
  #navitem-download-docs-dev {
    margin-bottom: 16px;
  }

  #navitem-products-docspace,
  #navitem-pricing-docs-docspace,
  #navitem-download-docspace {
    &:before {
      background-position-y: -1170px;
    }
  }

  #navitem-products-workspace,
  #navitem-download-workspace,
  #navitem-prices-workspace,
  #navitem-enterprise-workspace {
    &:before {
      background-position-y: -26px;
    }
  }

  #navitem-developers-doc-builder {
    &:before {
      background-position-y: -834px;
    }
  }

  #navitem-products-connectors {
    &:before {
      background-position-y: -1196px;
    }
  }

  #navitem-products-for-desktop {
    &:before {
      background-position-y: -52px;
    }
  }

  #navitem-products-for-ios {
    &:before {
      background-position-y: -78px;
    }
  }

  #navitem-products-for-android {
    &:before {
      background-position-y: -104px;
    }
  }

  #navitem-products-oforms {
    &:before {
      background-position-y: -702px;
    }
  }

  #navitem-products-convert-text {
    &:before {
      background-position-y: -1222px;
    }
  }

  #navitem-products-convert-spreadsheets {
    &:before {
      background-position-y: -1248px;
    }
  }

  #navitem-products-convert-presentations {
    &:before {
      background-position-y: -1274px;
    }
  }

  #navitem-products-convert-pdfs {
    &:before {
      background-position-y: -1326px;
    }
  }

  #navitem-enterprise-overview {
    &:before {
      background-position-y: -1352px;
    }
  }

  #navitem-developers-docs-dev,
  #navitem-pricing-docs-dev,
  #navitem-download-docs-dev {
    &:before {
      background-position-y: -806px;
    }
  }

  #navitem-developers-conversion-api {
    &:before {
      background-position-y: -1092px;
    }
  }

  #navitem-developers-api-doc {
    &:before {
      background-position-y: -885px;
    }
  }

  #navitem-enterprise-pricing,
  #navitem-developers-pricing {
    &:before {
      background-position-y: -1300px;
    }
  }

  #navitem-enterprise-get,
  #navitem-developers-get {
    &:before {
      background-position-y: -1014px;
    }
  }

  #navitem-pricing-docs-enterprice,
  #navitem-download-docs-enterprise,
  #navitem-enterprise-docs-enterprise {
    &:before {
      background-position-y: -780px;
    }
  }

  #navitem-partners-resellers {
    &:before {
      background-position-y: -208px;
    }
  }

  #navitem-partners-affiliates {
    &:before {
      background-position-y: -182px;
    }
  }

  #navitem-partners-hosting-providers {
    &:before {
      background-image: url("https://static-blog.onlyoffice.com/images/menu-pics/menu_hosting_providers.svg");
    }
  }

  #navitem-partners-technology-partners {
    &:before {
      background-position-y: -1144px;
    }
  }
  
  #navitem-partners-find-partners {
    &:before {
      background-position-y: -674px;
    }
  }

  #navitem-partners-submit-request {
    &:before {
      background-position-y: -260px;
    }
  }

  #navitem-resources-about {
    &:before {
      background-position-y: -286px;
    }
  }

  #navitem-resources-contribute {
    &:before {
      background-position-y: -338px;
    }
  }

  #navitem-resources-customers {
    &:before {
      background-position-y: -364px;
    }
  }

  #navitem-resources-vacancies {
    &:before {
      background-position-y: -650px;
    }
  }

  #navitem-resources-awards {
    &:before {
      background-position-y: -390px;
    }
  }

  #navitem-resources-events {
    &:before {
      background-position-y: -468px;
    }
  }

  #navitem-resources-giftshop {
    &:before {
      background-position-y: -520px;
    }
  }

  #navitem-resources-contacts {
    &:before {
      background-position-y: -546px;
    }
  }

  #navitem-resources-blog {
    &:before {
      background-position-y: -312px;
    }
  }

  #navitem-resources-forum {
    &:before {
      background-position-y: -858px;
    }
  }

  #navitem-resources-pressdownloads {
    &:before {
      background-position-y: -416px;
    }
  }

  #navitem-resources-help {
    &:before {
      background-position-y: -598px;
    }
  }

  #navitem-resources-whitepapers {
    &:before {
      background-position-y: -442px;
    }
  }

  #navitem-resources-webinars {
    &:before {
      background-position-y: -572px;
    }
  }

  #navitem-resources-training-courses {
    &:before {
      background-position-y: -494px;
    }
  }

  #navitem-resources-compare {
    &:before {
      background-position-y: -754px;
    }
  }

  #navitem-download-connectors {
    &:before {
      background-position-y: -1196px;;
    }
  }

  #navitem-download-desktop-mob {
    &:before {
      background-position-y: -156px;
    }
  }

  #navitem-download-docs-builder {
    &:before {
      background-position-y: -832px;
    }
  }

  #navitem-download-docs-community {
    &:before {
      background-position-y: -962px;
    }
  }

  #navitem-download-code-git {
    &:before {
      background-position-y: -936px;
    }
  }

  @media (min-width: 1024px) {
    .heading-nav-item {
      &.active {
        color: #FF6F3D;

        + .menu-items-wrapper {
          .menu-wrapper {
            &:before {
              animation: 0.3s forwards ease-in-out menuLineLeft;
            }

            &:after {
              animation: 0.3s forwards ease-in-out menuLineRight;
            }
          }
        }
      }
    }

    @keyframes menuLineLeft {
      0 {
        width: 0;
        left: 50%;
      }
  
      100% {
        width: 50%;
        left: 0;
      }
    }
  
    @keyframes menuLineRight {
      0 {
        width: 0;
      }
  
      100% {
        width: 50%;
      }
    }
  }

  @media ${device.laptop} {
    .heading-nav-item {
      position: relative;
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

    .outer-box {
      padding: 0 0 32px;
      width: 100%;

      &.with-border {
        &:after {
          top: initial;
          left: 50%;
          bottom: 0;
          width: calc(100% - 48px);
          height: 1px;
          transform: translateX(-50%);
        }
      }

      &:not(:last-child) {
        margin-bottom: 32px;
      }

      &:last-child {
        padding: 0;
      }

      &.bg-grey {
        display: flex;
        padding: 32px 0;
      }
    }

    .dropdown-item {
      padding: 8px 24px 8px 58px;

      &:before {
        top: 8px;
        left: 24px;
      }

      &:not(:last-child) {
        margin-bottom: 8px;
      }

      &.no-bold {
        padding: 0 58px;
      }
    }

    .dropdown-item-title {
      line-height: 24px;
    }

    .dropdown-item-text {
      padding: 0 24px;
    }

    .dropdown-item-label {
      margin-bottom: 8px;
      padding: 8px 24px;
      font-weight: 600;
      font-size: 12px;
      line-height: 24px;
      letter-spacing: 0.05em;
    }

    .dropdown-item-text {
      line-height: 22px;
      padding-bottom: 8px;
    }

    .dropdown-item-group {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }

    .inner-box {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    .nav-2nd-menu-link {
      padding: 9px 24px 9px 56px;

      &:not(:last-child) {
        margin: 0;
      }
    }

    .nowrap {
      padding: 9px 24px 9px 56px;
      margin: 0;
    }

    #navitem-prices-workspace {
      position: relative;
      margin-bottom: 72px;
      overflow: initial;
  
      &:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -40px;
        width: calc(100% - 48px);
        height: 1px;
        transform: translateX(-50%);
        background-color: #CCCCCC;
        opacity: 0.4;
      }
    }

    #navitem-pricing-for-business,
    #navitem-pricing-for-dev {
      margin-bottom: 8px;
    }

    #navitem-pricing-docs-enterprice,
    #navitem-pricing-docs-docspace,
    #navitem-download-docs-enterprise,
    #navitem-download-docspace,
    #navitem-download-workspace,
    #navitem-download-docs-dev {
      margin: 0;
    }
  }
`;

const StyledMenuItemsWrapper = styled.div`
  width: auto;
  height: auto;
  margin: auto;
  background-color: white;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  z-index: 5000;
  position: absolute;
  display: flex;
  box-shadow: 0 20px 50px rgba(85, 85, 85, 0.15);

  @media (max-width: 1024px) {
    padding: 0;
    max-height: 100%;
    margin: 0;
    position: absolute;
    left: ${(props) => (props.isOpen ? "0" : "-120vw")};
    top: 0;
    overflow: auto;
    text-align: center;
    font-size: 16px;
    transition: right 0.5s;
    width: 100%;
    z-index: 5;
    display: block;
    box-sizing: border-box;
    box-shadow: unset;
    overflow-x: hidden;
  }
`;

export { StyledNavMenu, StyledMenuItemsWrapper };