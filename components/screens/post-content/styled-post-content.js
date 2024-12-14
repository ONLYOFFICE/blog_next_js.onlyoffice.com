import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";

const StyledPostContent = styled(Section)`
  position: initial;
  padding: 32px 0 0;

  .title {
    margin: 0 0 32px;
    font-size: 40px;
    line-height: 53px;
    text-align: center;
    letter-spacing: -0.02em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #333333;
    overflow: initial;

    @media screen and ${device.tablet} {
      font-size: 32px;
      letter-spacing: -0.01em;
      text-align: initial;
    }

    @media screen and ${device.mobile} {
      margin-bottom: 24px;
      font-size: 24px;
      line-height: 32px;
    }
  }

  .info-content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 13px;
    line-height: 21px;
    color: #919192;

    > span {
      padding-left: 20px;
      background-size: 12px;
      background-position: left center;
      background-repeat: no-repeat;

      &:not(:last-child) {
        ${props => props.locale === "ar" ? "margin-left: 20px;" : "margin-right: 20px;"}
      }

      &.date {
        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/calendar.svg");
      }

      &.outdated {
        color: #CB0000;
        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/outdated.svg");
        background-size: 20px;
        background-position: left 1px;
        padding-left: 28px;
      }
    }

    .internal-link {
      display: inline-flex;
      font-size: 13px;
      line-height: 21px;
      color: #919192;

      &:hover {
        text-decoration: underline;
      }
    }

    .author {
      display: initial;
      padding-left: 20px;
      background-size: 12px;
      background-position: left center;
      background-repeat: no-repeat;
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/author.svg");

      &:not(:last-child) {
        ${props => props.locale === "ar" ? "margin-left: 20px;" : "margin-right: 20px;"}
      }
    }

    .share-buttons {
      ${props => props.locale === "ar" ? "margin-right: auto;" : "margin-left: auto;"}

      @media screen and ${device.tablet} {
        margin-top: 24px;
        ${props => props.locale === "ar" ? "margin-right: initial;" : "margin-left: initial;"}
        width: 100%;
      }
    }
  }

  .content {
    position: relative;
    margin: 50px auto 40px;
    ${props => props.locale === "ar" ? "padding-right: 88px;" : "padding-left: 88px;"}
    display: flex;
    justify-content: space-between;
    max-width: 824px;

    .wrap {
      width: 100%;
      max-width: 736px;
    }

    ul li:before {
      padding-left: ${props => props.locale === "ar" && "15px"};
      padding-right: ${props => props.locale === "ar" && "0"};
    }

    @media screen and ${device.laptop} {
      margin: 70px auto 80px;
      ${props => props.locale === "ar" ? "padding-right: 0;" : "padding-left: 0;"}
    }

    @media screen and ${device.tablet} {
      margin: 24px auto;
    }
  }

  .btn-scroll-top {
    position: sticky;
    top: calc(100% - 76px);
    ${props => props.locale === "ar" ? "left: 0;" : "right: 0;"}
    padding: 0;
    width: 56px;
    height: 56px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    z-index: 10;

    span {
      display: inline-flex;
      border-radius: 2px;
      width: 32px;
      height: 32px;
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/arrow-up.svg");
      background-repeat: no-repeat;
      background-position: center center;
      background-color: #cccccc;
      transition: background-color 0.3s;
    }

    &:hover {
      span {
        background-color: #aaaaaa;
      }
    }

    @media screen and ${device.laptop} {
      position: fixed;
      bottom: 0;
      right: 0;
      top: initial;
    }
  }

  article {
    h1, h2, h3, h4, h5, h6 {
      letter-spacing: -0.02em;
      font-style: normal;
      font-weight: 700;
      margin-bottom: 32px;
      line-height: 133%;

      @media screen and ${device.tablet} {
        letter-spacing: -0.01em;
      }
    }

    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 32px;

      @media screen and ${device.tablet} {
        font-size: 30px;
      }

      @media screen and ${device.mobile} {
        font-size: 20px;
      }
    }

    h3 {
      font-size: 24px;

      @media screen and ${device.tablet} {
        font-size: 22px;
      }

      @media screen and ${device.mobile} {
        font-size: 18px;
      }
    }

    h4 {
      font-size: 18px;
    }

    h5 {
      font-size: 14px;
    }

    h6 {
      font-size: 16px;
    }

    p {
      margin: 24px 0;
      font-size: 16px;
      line-height: 26px;
      color: #333;

      @media screen and ${device.mobile} {
        font-size: 14px;
        line-height: 26px;
      }
    }

    .wp-caption {
      margin: 0;
      background: #fff;
      border: 1px solid #f0f0f0;
      max-width: 100%;
      padding: 5px 3px 10px;
      text-align: center;

      img {
        border: 0 none;
        height: auto;
        margin: 0;
        max-width: 98.5%;
        padding: 0;
        width: auto;
      }
    }

    .wp-caption-text {
      font-size: 13px;
      line-height: 13px;
    }

    .wp-video {
      max-width: 640px;
      width: 100% !important;
  
      > video {
        width: 100%;
      }
    }

    img {
      object-fit: contain;
      height: auto;
      max-width: 100%;

      &.img-popup {
        cursor: pointer;
      }

      &.aligncenter {
        margin: 0 auto;
      }

      @media screen and ${device.mobile} {
        margin: 0;
      }
    }

    figure {
      box-sizing: border-box;
      object-fit: contain;
      max-width: 100%;

      &.aligncenter {
        margin: 16px auto;
      }

      &.wp-action {
        max-width: 100%;
      }
    }

    .aligncenter {
      display: block;
    }

    a {
      color: #333;

      &:hover {
        text-decoration: none;
      }
    }

    ul, ol {
      padding: 0;
      margin: 0;

      li {
        list-style-type: none;
        font-size: 16px;
        line-height: 160%;
        margin: 16px 0;
  
        &:before {
          color: #ff6f3d;
          content: "♦";
          transform: rotate(-45deg);
          padding-right: 15px;
        }
      }
    }

    ol {
      counter-reset: wslist1;

      li {
        &:before {
          color: #FF6F3D;
          content: counter(wslist1)".";
          counter-increment: wslist1;
          padding-right: 15px;
          font-weight: 600;
          width: 5.73px;
          height: 5.72px;
        }
      }
    }

    iframe {
      @media screen and ${device.laptop} {
        width: 100%;
      }

      @media screen and ${device.mobile} {
        height: 235px;
      }
    }

    blockquote:not([class]) {
      border-left: 3px solid #ff6f3d;
      margin: 1.5em 0;
      padding: 0.5em 10px 0.5em 24px;
      quotes: "“" "”";

      &:before {
        content: open-quote;
        line-height: .1em;
        margin-right: 0.4em;
        vertical-align: 0.1em;
      }

      &:after {
        content: close-quote;
        line-height: .1em;
        margin-left: 0.4em;
        vertical-align: 0.1em;
      }

      p {
        display: inline;
      }
    }

    .button {
      display: inline-block;
      font-weight: 600;
      font-size: 13px;
      line-height: 160%;
      text-decoration: none;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #FFFFFF;
      background-color: #FF6F3D;
      border-radius: 3px;
      padding: 18px 20px;

      &.black {
        background-color: #444444;

        &:hover {
          background-color: #555555;
        }
      }

      &.white {
        color: #444444;
        background-color: #FFFFFF;
        border: 1px solid #AAAAAA;
        padding: 17px 20px;

        &:hover {
          background-color: #FFFFFF;
          color: #FF6F3D;
          border: 1px solid #FF6F3D;
        }
      }

      &:hover {
        background-color: #ff865c;
      }

      @media screen and ${device.mobile} {
        padding: 16px 20px;
      }
    }

    .useful-links {
      margin: 64px 0;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 40px 32px;
      background-color: #f9f9f9;

      h3 {
        font-size: 24px;
        line-height: 33px;
        color: #333;
        padding-left: 35px;
        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/link.svg");
        background-size: 23px;
        background-position: 0 50%;
        background-repeat: no-repeat;
        margin-top: 0 !important;

        @media screen and ${device.mobile} {
          font-size: 18px;
        }
      }

      p {
        line-height: 22px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      @media screen and ${device.tablet} {
        margin: 44px 0;
      }
    }

    .fluentform {
      font-family: inherit;

      * {
        box-sizing: border-box;
      }

      textarea {
        max-width: 100%;
      }

      input, select, button, textarea {
        font-family: "Open Sans", sans-serif, Arial;
        font-weight: 400;
      }

      @media screen and ${device.tablet} {
        .frm-fluent-form .ff-t-container {
          display: flex;
          gap: 15px;
          width: 100%;
        }

        .frm-fluent-form .ff-t-cell:first-of-type {
          padding-left: 0;
        }

        .frm-fluent-form .ff-t-cell:last-of-type {
          flex-grow: 1;
          padding-right: 0;
        }

        .frm-fluent-form .ff-t-cell {
          display: flex;
          flex-direction: column;
          vertical-align: inherit;
          width: 100%;
        }

        .ff-el-group {
          margin-bottom: 20px;
        }

        .clearfix:after, .clearfix:before, .ff-el-group:after, .ff-el-group:before, .ff-el-repeat .ff-el-input--content:after, .ff-el-repeat .ff-el-input--content:before, .ff-step-body:after, .ff-step-body:before {
          content: " ";
          display: table;
        }

        .ff-el-input--label {
          display: inline-block;
          margin-bottom: 5px;
          position: relative;
        }

        .ff-el-group.ff-el-form-top .ff-el-input--label {
          display: inline-block;
          float: none;
          margin-bottom: 5px;
          text-align: left;
        }

        label {
          font-weight: 400;
        }

        .ff-el-input--label label {
          display: inline-block;
          font-weight: 600;
          line-height: inherit;
          margin-bottom: 0;
        }

        .ff-el-group.ff-el-form-top .ff-el-input--content {
          margin-bottom: 0;
          margin-left: auto;
        }

        .ff-el-form-control {
          background-clip: padding-box;
          background-image: none;
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
          color: #495057;
          display: block;
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 0;
          max-width: 100%;
          padding: 6px 12px;
          transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
          width: 100%;

          &:focus {
            background-color: #fff;
            border-color: #80bdff;
            color: #495057;
            outline: none;
          }
        }

        .clearfix:after, .ff-el-group:after, .ff-el-repeat .ff-el-input--content:after, .ff-step-body:after {
          clear: both;
        }

        .ff_btn_style {
          border: 1px solid transparent;
          border-radius: 4px;
          cursor: pointer;
          display: inline-block;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          padding: 6px 12px;
          position: relative;
          text-align: center;
          transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
          user-select: none;
          vertical-align: middle;
          white-space: nowrap;
        }

        form.fluent_form_3 .ff-btn-submit {
          background-color: #409EFF;
          color: #ffffff;
        }
      }
    }
  }

  .entry-content {
    margin-top: 24px;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;

    td {
      border-collapse: collapse;
      border-spacing: 0;
    }

    th {
      font-size: 13px;
      font-weight: 700;
    }

    td {
      font-size: 13px;
    }
  }

  .tag-list {
    display: flex;
    justify-content: ${props => props.locale === "ar" && "end"};
    margin: 80px 0;

    @media screen and ${device.tablet} {
      flex-direction: column;
      margin: 44px 0;
    }
  }

  .tag-items {
    ${props => props.locale === "ar" ? "padding-left: 12px;" : "padding-right: 12px;"}
    width: 70%;

    @media screen and ${device.tablet} {
      ${props => props.locale === "ar" ? "padding-left: 0;" : "padding-right: 0;"}
      margin-bottom: 27px;
      width: 100%;
    }
  }

  .tag-share {
    margin: ${props => props.locale === "ar" ? "10px auto 10px 0" : "10px 0 10px auto"};
    width: 30%;

    .share-buttons {
      justify-content: ${props => props.locale === "ar" ? "left" : "right"};

      @media screen and ${device.tablet} {
        justify-content: initial;
      }
    }

    @media screen and ${device.tablet} {
      margin: 0;
      width: 100%;
    }
  }

  .join-discussion {
    margin: 64px auto 0;

    a {
      display: block;
      text-align: center;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 133%;
      letter-spacing: -0.02em;
      color: #444444;
      text-decoration: none;
      padding: 16px 24px;
      width: 100%;
      border: 1px solid #CCCCCC;
      box-sizing: border-box;
      border-radius: 3px;
      transition: color .1s linear, border-color .1s linear;

      &:hover {
        color: #FF6F3D;
        border: 1px solid #FF6F3D;
      }

      @media screen and ${device.tablet} {
        font-size: 13px;
        line-height: 133%;
        letter-spacing: 0.04em;
      }
    }

    @media screen and ${device.tablet} {
      margin: 44px auto 0;
    }
  }

  .modal {
    position: fixed;
    top: 50%;
    max-height: 80%;
    left: 50%;
    transform: translate(-50%, 0) scale(0,0);
    z-index: 10001;
    transition: transform .1s ease;
    opacity: 0;

    &.active {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1, 1); 
    }

    .modal-img {
      max-width: 80vw;
      max-height: 80vh;
      object-fit: contain;

      @media screen and ${device.mobile} {
        max-width: 90vw;
        max-height: 90vh;
      }
    }

    .modal-close-btn {
      position: absolute;
      top: -30px;
      ${props => props.locale === "ar" ? "left: -30px;" : "right: -30px;"}
      width: 23px;
      height: 23px;
      cursor: pointer;
      z-index: 1003;

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 11px;
        left: -4px;
        width: 31px;
        height: 2px;
        background-color: #fff;
        z-index: 1004;

        @media screen and ${device.mobile} {
          width: 20px;
          left: 0;
        }
      }

      &:before {
        transform: rotate(-45deg);
      }

      &:after {
        transform: rotate(45deg);
      }

      @media screen and ${device.mobile} {
        top: -30px;
        right: 0;
      }
    }
  }

  .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(119 119 119 / 50%);
    z-index: 10000;

    &.active {
      display: block;
    }
  }

  @media screen and ${device.tablet} {
    padding: 24px 0 0;
  }
`;

export default StyledPostContent;
