import styled from "styled-components";
import { device } from "@components/utils/devices";

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
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/calendar.svg");

    @media screen and ${device.mobile} {
      margin-right: 16px;
    }
  }

  .author {
    display: inline-flex;
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/author.svg");
    color: #919192;

    &:hover {
      text-decoration: underline;
    }
  }

  .post-title {
    a {
      color: #333333;
      font-size: 24px;
      line-height: 32px;
      text-decoration: none;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      cursor: pointer;

      &:hover,
      &:focus {
        text-decoration: underline;
      }

      @media screen and ${device.laptop} {
        -webkit-line-clamp: 3;
      }

      @media screen and ${device.mobile} {
        font-size: 20px;
        line-height: 133%;
      }
    }

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  .post-text {
    display: block;
    margin: 0;
    font-size: 16px;
    line-height: 26px;
    white-space: initial;

    p {
      margin: 0;
    }

    @media screen and ${device.mobile} {
      font-size: 14px;
      line-height: 26px;
    }
  }

  .search-excerpt {
    font-style: italic;
  }
`;

export default StyledSearchPost;
