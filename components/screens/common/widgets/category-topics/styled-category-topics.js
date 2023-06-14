import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledCategoryTopics = styled.div`
  padding: 23px;
  background-color: #FFFFFF;
  border: 1px solid #EFEFEF;
  box-shadow: 0px 7px 15px rgba(85, 85, 85, 0.1);
  border-radius: 5px;

  .category-topics-title {
    margin: 0 0 24px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #333333;
  }

  .category-topics-list {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }

    .internal-link {
      display: flex;
      padding-left: 36px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background-repeat: no-repeat;
      background-size: 24px 24px;
      background-position-x: 0;

      span {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #333333;
        text-decoration: none;
      }

      &:hover {
        span {
          color: #FF6F3D;
        }
      }

      &.product-releases {
        background-image: url("https://static-blog.onlyoffice.com/images/category-topics/product-releases.svg");
      }

      &.for-developers {
        background-image: url("https://static-blog.onlyoffice.com/images/category-topics/for-developers.svg");
      }

      &.for-business {
        background-image: url("https://static-blog.onlyoffice.com/images/category-topics/for-business.svg");
      }

      &.for-education {
        background-image: url("https://static-blog.onlyoffice.com/images/category-topics/for-education.svg");
      }
    }
  }

  @media ${device.tablet} {
    .category-topics-title {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.01em;
    }

    .category-topics-list {
      .internal-link {
        span {
          font-size: 14px;
        }
      }
    }
  }
`;

export default StyledCategoryTopics;
