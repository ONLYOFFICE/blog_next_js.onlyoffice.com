import styled from "styled-components";
import productReleasesIcon from "@public/images/category-topics/product-releases.svg";
import forDevelopersIcon from "@public/images/category-topics/for-developers.svg";
import forBusinessIcon from "@public/images/category-topics/for-business.svg";
import forEducationIcon from "@public/images/category-topics/for-education.svg";

const StyledCategoryTopics = styled.div`
  padding: 24px;
  background-color: #FFFFFF;
  border: 1px solid #EFEFEF;
  box-shadow: 0px 7px 15px rgba(85, 85, 85, 0.1);
  border-radius: 5px;
  max-width: 352px;

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
      display: block;
      padding-left: 36px;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #333333;
      text-decoration: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background-repeat: no-repeat;
      background-size: 24px 24px;
      background-position-x: 0;

      &:hover {
        color: #FF6F3D;
      }

      &.product-releases {
        background-image: url(${productReleasesIcon.src});
      }

      &.for-developers {
        background-image: url(${forDevelopersIcon.src});
      }

      &.for-business {
        background-image: url(${forBusinessIcon.src});
      }

      &.for-education {
        background-image: url(${forEducationIcon.src});
      }
    }
  }
`;

export default StyledCategoryTopics;
