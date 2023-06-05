import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";

const StyledPostContent = styled(Section)`
  padding: 32px 0 0;
  overflow: hidden;

  .title {
    margin: 0 0 32px;
    font-size: 40px;
    line-height: 53px;
    text-align: center;
    letter-spacing: -0.02em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #333333;
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
      margin-right: 20px;
      background-size: 12px;
      background-position: left 5px;
      background-repeat: no-repeat;

      &.date {
        background-image: url("https://static-blog.onlyoffice.com/images/icons/calendar.svg");
      }

      &.author {
        background-image: url("https://static-blog.onlyoffice.com/images/icons/author.svg");
      }

      &.comments {
        background-image: url("https://static-blog.onlyoffice.com/images/icons/comment.svg");
      }

      &.views {
        background-image: url("https://static-blog.onlyoffice.com/images/icons/views.svg");
        background-size: 14px 10px;
      }
    }

    .internal-link {
      display: inline-flex;

      .external-link {
        font-size: 13px;
        line-height: 21px;
        color: #919192;
        text-decoration: none;
      }

      &:hover {
        .external-link {
          text-decoration: underline;
        }
      }
    }

    .share-buttons {
      margin-left: auto;
    }
  }

  .content {
    margin: 50px auto 40px;
    max-width: 736px;
  }

  article {
    h1, h2, h3, h4, h5, h6 {
      letter-spacing: -0.02em;
      font-style: normal;
      font-weight: 700;
      margin-bottom: 32px;
      line-height: 133%;
    }

    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 24px;
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

    a img.alignnone, p img.alignnone {
      margin: 5px 20px 20px 0;
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

    blockquote {
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
        background-image: url("https://static-blog.onlyoffice.com/images/icons/link.svg");
        background-size: 23px;
        background-position: 0 50%;
        background-repeat: no-repeat;
        margin-top: 0 !important;
      }

      p {
        line-height: 22px;

        &:last-child {
          margin-bottom: 0;
        }
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
        font-family: 'Open Sans', sans-serif, Arial;
        font-weight: 400;
      }

      @media (min-width: 768px) {
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
    margin: 80px 0;
  }

  .tag-items {
    padding-right: 12px;
    width: 70%;
  }

  .tag-share {
    margin: 10px 0 10px auto;
    width: 30%;

    .share-buttons {
      justify-content: right;
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
    opacity 0;

    &.active {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1, 1); 
    }

    .modal-img {
      max-width: 80vw;
      max-height: 80vh;
    }

    .modal-close-btn {
      position: absolute;
      top: -30px;
      right: -30px;
      width: 23px;
      height: 23px;
      cursor: pointer;
      z-index: 1003;

      &:before {
        content: "";
        background-color: #fff;
        position: absolute;
        height: 2px;
        width: 31px;
        top: 11px;
        transform: rotate(-45deg);
        left: -4px;
        z-index: 1004;
      }

      &:after {
        content: "";
        background-color: #fff;
        position: absolute;
        height: 2px;
        width: 31px;
        top: 11px;
        transform: rotate(45deg);
        left: -4px;
        z-index: 1004;
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

  @media ${device.laptop} {
    .content {
      margin: 70px auto 80px;
    }

    article {
      iframe {
        width: 100%;
      }
    }
  }

  @media ${device.tablet} {
    padding: 24px 0 0;

    .content {
      margin: 24px auto;
    }

    .title {
      font-size: 32px;
      letter-spacing: -0.01em;
      text-align: initial;
    }

    article {
      h1, h2, h3, h4, h5, h6 {
        letter-spacing: -0.01em;
      }
      
      h2 {
        font-size: 30px;
      }

      h3 {
        font-size: 22px;
      }

      .useful-links {
        margin: 44px 0;
      }
    }

    .info-content {
      .share-buttons {
        margin-top: 24px;
        margin-left: initial;
        width: 100%;
      }
    }

    .tag-list {
      flex-direction: column;
      margin: 44px 0;
    }

    .tag-items {
      padding-right: 0;
      margin-bottom: 27px;
    }

    .tag-items,
    .tag-share {
      width: 100%;
    }

    .tag-share {
      margin: 0;

      .share-buttons {
        justify-content: initial;
      }
    }

    .join-discussion {
      margin: 44px auto 0;

      a {
        font-size: 13px;
        line-height: 133%;
        letter-spacing: .04em;
      }
    }
  }

  @media (max-width: 592px) {
    .title {
      margin-bottom: 24px;
      font-size: 24px;
      line-height: 32px;
    }

    .info-content {
      span {
        margin-right: 16px;

        &.comments,
        &.views {
          display: none;
        }
      }
    }

    article {
      p {
        font-size: 14px;
        line-height: 26px;

        img.alignnone {
          margin: 0;
        }
      }

      img {
        height: 100%;
        margin: 0;
      }

      iframe {
        height: 235px;
      }

      h2 {
        font-size: 20px;
      }

      h3 {
        font-size: 18px;
      }

      .useful-links h3 {
        font-size: 18px;
      }

      .button {
        padding: 16px 20px;
      }
    }

    .modal {
      .modal-img {
        max-width: 90vw;
        max-height: 90vh;
      }

      .modal-close-btn {
        top: -30px;
        right: 0;
  
        &:before,
        &:after {
          width: 20px;
          left: 0;
        }
      }
    }
  }
`;

export default StyledPostContent;
