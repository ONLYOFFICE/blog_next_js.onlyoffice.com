import styled from "styled-components";
import Section from "@components/common/section";
import arrowRightIcon from "@public/images/icons/arrow-right.svg";

const StyledMainContent = styled(Section)`
  padding: 40px 0 120px;
  background-color: #F5F5F5;

  .main-block {
    display: grid;
    grid-template-columns: auto 31.429%;
    margin-bottom: 60px;
    grid-gap: 32px;
  }

  .main-sidebar {
    display: grid;
    row-gap: 32px;
  }

  .wrapper-posts {
    display: grid;
    gap: 72px;
  }

  .category-posts-top {
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    a {
      display: inline-flex;
    }
  }

  .category-posts-title {
    margin-right: 32px;
    font-size: 32px;
    line-height: 43px;
    letter-spacing: -0.02em;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #333333;
  }

  .view-all {
    padding-right: 15px;
    font-size: 14px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #333333;
    background-image: url(${arrowRightIcon.src});
    background-repeat: no-repeat;
    background-position: right 50%;
  }

  .category-posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .category-posts-btn {
    margin-top: 40px;
    justify-self: center;
    grid-column: span 3;
    padding: 17px 22px;
    font-family: "Open Sans", sans-serif;
    font-size: 13px;
    line-height: 17px;
    letter-spacing: 0.04em;
  }
`;

export default StyledMainContent;
