import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledLayout = styled.div`
  height: 100%;
  background-color: transparent;

  &.rtl {
    direction: rtl;
    unicode-bidi: embed;

    .navbar {
      .search_area {
        margin: 0 auto 0 16px;

        &.active {
          .search_input {
            @media screen and (max-width: 1530px) {
              padding: 0px 16px 0 40px;
            }
          }
        }

        @media screen and (max-width: 1530px) {
          right: initial;
          left: 70px;
          margin: 0;
        }

        @media screen and ${device.laptop} {
          left: 70px;
        }

        @media screen and (max-width: 592px) {
          left: 60px;
        }
      }

      .search_input {
        padding: 9px 16px 9px 40px;
        text-align: right;
      }
  
      .search_icon {
        left: 16px;
        right: initial;

        @media screen and ${device.laptop} {
          right: initial;
        }
      }

      &.is-open {
        .nav {
          @media screen and ${device.laptop} {
            transform: translate3d(0, 0, 0);
          }
        }

        .nav-btn-mobile,
        .nav-selector-wrapper {
          @media screen and ${device.laptop} {
            transform: translate3d(-429px, 0, 0);
          }

          @media screen and (max-width: 592px) {
            transform: translate3d(calc(64px - 100vw), 0, 0);
          }

          @media screen and (max-width: 375px) {
            transform: translate3d(calc(32px - 100vw), 0, 0);
          }
        }
      
        .nav-item-logo {
          @media screen and ${device.laptop} {
            transform: translate3d(-429px, 0, 0) translateX(-50%);
          }

          @media screen and (max-width: 592px) {
            transform: translate3d(-380px, 0, 0) translateX(-50%);
          }

          @media screen and (max-width: 430px) {
            transform: translate3d(-288px, 0, 0) translateX(-50%);
          }
        }
      
        .search_icon {
          @media screen and ${device.laptop} {
            transform: translate3d(-429px, 0, 0) translateY(-50%);

            @media screen and (max-width: 592px) {
              transform: translate3d(-380px, 0, 0) translateX(-50%);
            }

            @media screen and (max-width: 430px) {
              transform: translate3d(-288px, 0, 0) translateX(-50%);
            }
          }
        }
      }
    }

    .advent-announce {
      direction: initial;

      &.is-open {
        @media screen and ${device.laptop} {
          transform: translate3d(-429px, 0, 0);
        }
  
        @media screen and (max-width: 592px) {
          transform: translate3d(calc(64px - 100vw), 0, 0);
        }

        @media screen and (max-width: 375px) {
          transform: translate3d(calc(32px - 100vw), 0, 0);
        }
      }
    }

    .nav {
      @media screen and ${device.laptop} {
        border-right: none;
        border-left: 1px solid #e5e5e5;
      }

      .menu-wrapper {
        @media screen and ${device.laptop} {
          text-align: initial;
        }
      }

      .menu-label {
        text-align: initial;
      }

      .heading-nav-item {
        @media screen and ${device.laptop} {
          text-align: right;
          padding: 16px 24px 16px 40px;
        }

        &:before {
          @media screen and ${device.laptop} {
            right: initial;
            left: 24px;
            transform: translateY(-50%) rotate(180deg);
          }
        }
      }

      .mobile-heading-nav-item {
        &:before {
          left: initial;
          right: 14px;
          transform: translateY(-50%);
        }
      }

      .phone-mobile {
        &:before {
          @media screen and ${device.laptop} {
            margin-right: 0;
            margin-left: 13px;
          }
        }
      }

      .menu-pic-header,
      .menu-blog-header,
      .menu-blog-date {
        @media screen and ${device.laptop} {
          text-align: right;
        }
      }

      @media screen and ${device.laptop} {
        left: initial;
        right: 0;
        transform: translate3d(100%, 0, 0);
      }
    }

    .nav-item-logo {
      img {
        @media screen and (max-width: 1530px) {
          object-position: 122px;
        }

        @media screen and ${device.laptop} {
          object-position: initial;
        }

        @media screen and (max-width: 592px) {
          object-position: 122px;
        }
      }
    }

    .menu-box {
      &.with-border {
        &:after {
          right: initial;
          left: 0;

          @media screen and ${device.laptop} {
            left: 50%;
          }
        }
      }
    }

    .nav-products {
      .menu-box {
        &:nth-child(2) {
          .menu-submenu {
            .menu-link {
              padding: 0 32px 0 68px;
  
              &:before {
                right: 0;
  
                @media screen and ${device.laptop} {
                  left: initial;
                  right: 24px;
                }
              }
  
              @media screen and ${device.laptop} {
                padding: 0 60px 0 24px;
              }
            }
          }

          .menu-label {
            margin: 0 0 12px 32px;
          }
        }

        &:nth-child(3) {
          .menu-link {
            &.online-services {
              @media screen and ${device.laptop} {
                padding: 4px 60px 4px 16px;

                &:after {
                  margin-left: initial;
                  margin-right: 4px;
                  transform: rotate(180deg);
                }
              }
            }
          }

          .menu-box-inner {
            .menu-link {
              padding: 0 60px 0 24px;
            }
          }
        }
      }
    }

    .nav-selector-wrapper {
      z-index: 2;
    }

    .menu-link {
      padding: 0 68px 0 32px;

      &:before {
        left: 0;
        right: 32px;

        @media screen and ${device.laptop} {
          right: 24px;
        }
      }

      @media screen and ${device.laptop} {
        padding: 8px 58px 8px 24px;
      }
    }

    .menu-box-link {
      &.left {
        padding: 0px 72px 0px 8px;

        @media screen and ${device.laptop} {
          padding: 9px 56px 9px 8px;
        }
      }

      &.right {
        padding: 0px 8px 0px 48px;

        @media screen and ${device.laptop} {
          padding: 9px 8px 9px 24px;
        }
  
        @media screen and (max-width: 399px) {
          padding: 9px 56px 9px 16px;
        }
      }

      @media screen and ${device.laptop} {
        padding: 9px 56px 9px 24px;
      }
    }

    .menu-box-text,
    .menu-block-text {
      text-align: initial;
    }

    .nav-pricing, 
    .nav-partners {
      .menu-items-wrapper {
        @media screen and (min-width: 1024px) {
          left: calc(50% - 160px);
        }
      }
    }

    .footer {
      .footer-item-heading {
        text-align: right;
      }

      .footer-follow {
        .footer-item-heading {
          @media screen and ${device.laptop} {
            text-align: center;
          }
        }
      }

      .footer-item-heading-arrow {
        @media screen and (max-width: 600px) {
          right: initial;
          left: 0;
        }
      }
  
      .contact-text {
        text-align: right;
      }
    }

    .close-icon {
      right: initial;
      left: 0;
    }

    .section-page {
      .search_area {
        .search_input {
          padding: 16px 16px 16px 48px;
          text-align: right;
        }
  
        .search_icon {
          right: initial;
          left: 16px;
        }
      }

      .sidebar {
        h4 {
          text-align: right;
        }

        .post-date {
          padding-left: 0;
          padding-right: 20px;
          background-position: right;
        }
      }
    }
    
    article {
      text-align: right !important;
    }
    
    .content ul li:before {
      padding-left: 15px;
      padding-right: 0;
    }

    .post-content {
      .content {
        padding-left: 0;
        padding-right: 88px;

        @media screen and ${device.laptop} {
          padding-right: 0;
        }
      }

      .info-content {
        > span {
          &:not(:first-child) {
            margin-right: 20px;
          }

          &:not(:last-child) {
            margin-right: 0;
          }
        }
        
        .share-buttons {
          margin-left: 0;
          margin-right: auto;
        }

        .share-button {
          &:not(:last-child) {
            margin-right: 0;
            margin-left: 8px;
          }
        }
      }
    }

    .in-the-press-content {
      .post-title {
        a {
          text-align: right;
        }
      }

      .post-text {
        text-align: right;
      }

      .press-url {
        margin-left: 24px;
        margin-right: 0;
      }
    }

    .in-the-press-list {
      .in-the-press-date {
        padding-right: 20px;
        padding-left: 0;
        background-position: right;
      }
    }

    .search-content {
      .breadcrumbs {
        li {
          &:not(:first-child) {
            direction: initial;
          }
        }
      }

      .post-title {
        text-align: right;
      }
    }

    .main-sidebar {
      .in-the-press-title {
        text-align: right;
      }
    }

    .category-posts-title {
      margin-left: 32px;
      margin-right: 0;

      @media screen and ${device.laptop} {
        margin-left: 0;
      }
    }

    .recent-posts-title {
      @media screen and ${device.laptop} {
        text-align: right;
      }
    }

    .card-info-item {
      &:not(:first-child) {
        margin-right: 20px;
      }

      &:not(:last-child) {
        margin-right: 0;
      }
    }

    .newsletter-title {
      margin-right: 0;
      margin-left: 56px;
      max-width: 204px;

      @media screen and ${device.laptop} {
        margin: 0 0 32px;
      }
    }

    .newsletter-body {
      form {
        input {
          border-right: 1px solid #aaaaaa;
          border-left: none;
          border-radius: 0 3px 3px 0;
        }

        button {
          border-radius: 3px 0 0 3px;
        }

        .error-text {
          left: initial;
          right: 0;
        }
      }
    }
    
    .newsletter-text {
      text-align: right;
    }

    .download-block-btns {
      .download-block-btn {
        &.mac-os,
        &.linux,
        &.windows {
          &::before {
            margin-right: 0;
            margin-left: 8px;

            @media screen and ${device.tablet} {
              margin-left: 6px;
              width: 23px;
              min-width: 23px;
            }
          }
        }
      }
    }

    .category-topics-list {
      .internal-link {
        padding-left: 0;
        padding-right: 36px;
        background-position-x: right;
      }
    }

    .btn-scroll-top {
      @media screen and ${device.laptop} {
        right: initial;
        left: 0;
      }
    }

    .main-title,
    .category-title,
    .author-title,
    .author-info-title,
    .author-posts-title,
    .tag-title {
      text-align: right;
    }

    .author-card {
      margin-right: 0;
      margin-left: 56px;

      @media screen and (max-width: 896px) {
        margin-left: 0;
      }
    }

    .author-avatar {
      @media screen and (max-width: 896px) {
        margin-right: 0;
        margin-left: 32px;
      }
    }

    .author-info-avatar {
      left: initial;
      right: 0;

      @media screen and (max-width: 592px) {
        right: initial;
      }
    }

    .author-info-wrapper {
      padding-left: initial;
      padding-right: 144px;

      @media screen and (max-width: 592px) {
        padding-right: 0;
      }
    }

    .author-info-role {
      text-align: right;
    }

    .author-info-description {
      padding-left: initial;
      padding-right: 144px;
      text-align: right;

      @media screen and (max-width: 592px) {
        padding-right: 0;
      }
    }

    .tag-list {
      justify-content: end;

      .tag-items {
        padding-right: 0;
        padding-left: 12px;

        @media screen and ${device.tablet} {
          padding-left: 0;
        }
      }

      .tag-share {
        margin: 10px 0;

        @media screen and ${device.tablet} {
          margin: 0;
        }
  
        .share-buttons {
          justify-content: left;

          @media screen and ${device.tablet} {
            justify-content: initial;
          }
        }
  
        .share-button {
          &:not(:last-child) {
            margin-right: 0;
            margin-left: 8px;
          }
        }
      }
    }

    .modal {
      .modal-close-btn {
        right: initial;
        left: 0;
      }
    }
  }
`;

export default StyledLayout;
