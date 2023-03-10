import styled from "styled-components";
import { device } from "@components/utils/devices";
import calendarIcon from "@public/images/icons/calendar.svg";

const StyledInThePressPost = styled.div`
  .meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 11px;
  }

  .press-url {
    display: inline-block;
    margin-right: 24px;
    border-radius: 3px;
    font-size: 12px;
    line-height: 16px;
    color: #616161;
    padding: 4px 16px;
    background-color: #f2f2f2;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .date {
    padding-left: 20px;
    font-size: 13px;
    line-height: 21px;
    color: #919192;
    background-image: url(${calendarIcon.src});
    background-repeat: no-repeat;
    background-size: 12px 12px;
    background-position: 0 5px;
  }

  .post-title {
    display: block;
    margin-bottom: 24px;
    color: #333333;
    text-decoration: none;

    h2 {
      font-size: 24px;
      line-height: 32px;
      text-decoration: none;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      cursor: pointer;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .post-text {
    font-size: 16px;
    line-height: 26px;
  }

  @media ${device.laptop} {
    .post-title {
      h2 {
        -webkit-line-clamp: 3;
      }
    }
  }

  @media (max-width: 592px) {
    .post-title {
      h2 {
        font-size: 18px;
        line-height: 21px;
      }
    }

    .post-text {
      font-size: 14px;
      line-height: 26px;
    }
  }
`;

export default StyledInThePressPost;
