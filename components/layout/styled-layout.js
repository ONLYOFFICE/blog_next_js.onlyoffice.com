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

    .advent-announce-banner-wrapper {
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

    .nav-selector-wrapper {
      z-index: 2;
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

          @media screen and ${device.laptop} {
            border-radius: 0 3px 3px 0;
            transform: rotate(180deg);
          }
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
    .tag-title {
      text-align: right;
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

    .card-title {
      text-align: initial;
    }

    .docspace_block_wrapper,
    .modal_wrapper .modal_content .docspace_block_wrapper {
      form {
        input {
          border-right: 1px solid #aaaaaa;
          border-left: none;
          border-radius: 0 3px 3px 0;
        }

        .docspace_block_btn {
          border-radius: 3px 0 0 3px;

          @media screen and ${device.laptop} {
            border-radius: 0 3px 3px 0;
            transform: rotate(180deg);
          }
        }

        .error-message {
          left: initial;
          right: 0;
        }
      }
    }

    .mobile_mess {
      .mobile_mess_text {
        &:before {
          margin-right: initial;
          margin-left: 16px;

          @media (max-width: 592px) {
            margin-left: initial;
          }
        }
      }

      .container .mobile_mess_buttons .mobile_mess_button {
        margin-right: initial;
        margin-left: 16px;

        @media (max-width: 592px) {
          margin-left: initial;
        }
      }
    }
  }
`;

export default StyledLayout;
