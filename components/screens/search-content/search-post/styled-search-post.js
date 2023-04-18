import styled from "styled-components";
import { device } from "@components/utils/devices";
import calendarIcon from "@public/images/icons/calendar.svg";
import authorIcon from "@public/images/icons/author.svg";

const StyledSearchPost = styled.div`
  .meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }

  .date,
  .author {
    padding-left: 20px;
    font-size: 13px;
    line-height: 21px;
    color: #919192;
    text-decoration: none;
    background-repeat: no-repeat;
    background-size: 12px 12px;
    background-position: 0 5px;
  }

  .date {
    margin-right: 20px;
    background-image: url(${calendarIcon.src});
  }

  .author {
    background-image: url(${authorIcon.src});

    &:hover {
      text-decoration: underline;
    }
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
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      cursor: pointer;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .post-text {
    margin: 0;
    font-size: 16px;
    line-height: 26px;

    p {
      margin: 0;
    }
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
        font-size: 20px;
        line-height: 133%;
      }
    }

    .date {
      margin-right: 16px;
    }

    .post-text {
      font-size: 14px;
      line-height: 26px;
    }
  }
`;

export default StyledSearchPost;
