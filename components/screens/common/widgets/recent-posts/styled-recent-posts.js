import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledRecentPosts = styled.div`
  box-sizing: border-box;
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 23px;
  background-color: #f9f9f9;

  h4 {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .post {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  .post-title {
    display: inline-flex;

    span {
      line-height: 19px;
      color: #000;
      text-decoration: none;
    }

    &:hover {
      span {
        text-decoration: underline;
      }
    }
  }

  .post-img {
    position: relative;
    display: none;
    padding-bottom: 50.8%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .post-date {
    margin-top: 8px;
    padding-left: 20px;
    font-size: 12px;
    line-height: 16px;
    color: #919192;
    background-image: url("https://static-blog.onlyoffice.com/images/icons/calendar.svg");
    background-repeat: no-repeat;
    background-size: 12px 12px;
    background-position: 0 3px;
  }

  @media ${device.laptop} {
    border: none;
    border-top: 1px solid #e0e0e0;
    padding: 80px 0 0;
    background-color: transparent;

    h4 {
      margin-bottom: 56px;
      font-size: 32px;
      line-height: 133%;
      text-align: center;
      letter-spacing: -.02em;
      font-feature-settings: 'tnum'on,'lnum'on;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 48px 32px;
    }

    .post {
      display: flex;
      flex-direction: column;
      border: 1px solid #efefef;
      border-radius: 5px;
      background-color: #fff;
      overflow: hidden;
      transition: box-shadow 0.3s;

      &:last-child {
        display: none;
      }

      &:not(:last-child) {
        margin-bottom: 0;
      }
    }

    .post-body {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      margin-top: auto;
      padding: 24px 24px 32px;

      .internal-link {
        margin-bottom: 8px;
      }
    }

    .post-img {
      display: block;
    }

    .post-title {
      span {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #000;
      }
    }

    .post-date {
      margin-top: auto;
    }
  }

  @media (max-width: 592px) {
    padding: 48px 0 0;

    h4 {
      margin-bottom: 40px;
      font-size: 24px;
      font-weight: 600;
    }

    ul {
      grid-template-columns: initial;
      gap: 32px;
    }

    .post {
      &:last-child {
        display: block;
      }
    }

    .post-img {
      padding-bottom: 50.35%;
    }

    .post-body {
      padding: 21px 22px 21px;
    }

    .post-title {
      span {
        font-size: 16px;
        line-height: 21px;
      }
    }
  }
`;

export default StyledRecentPosts;
