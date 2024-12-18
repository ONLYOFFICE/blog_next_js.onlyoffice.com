import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledInThePressPost = styled.div`
  .meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 11px;
  }

  .press-url {
    display: inline-block;
    ${props => props.locale === "ar" ? "margin-left: 24px;" : "margin-right: 24px;"}
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
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/calendar.svg");
    background-repeat: no-repeat;
    background-size: 12px 12px;
    background-position: 0 5px;
  }

  .post-title {
    a {
      color: #333333;
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
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
        font-size: 18px;
        line-height: 21px;
      }
    }

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  .post-text {
    margin: 0;
    font-size: 16px;
    line-height: 26px;
    color: #333333;

    @media screen and ${device.mobile} {
      font-size: 14px;
      line-height: 26px;
    }
  }
`;

export default StyledInThePressPost;
