import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";
import arrowRightIcon from "@public/images/icons/arrow-right.svg";

const StyledMainContent = styled(Section)`
  padding: 40px 0 82px;
  background-color: #F5F5F5;

  .search_area {
    margin-bottom: 40px;
  }

  .main-block {
    display: grid;
    grid-template-columns: auto 31.429%;
    margin-bottom: 60px;
    grid-gap: 32px;
  }

  .main-sidebar {
    display: flex;
    flex-direction: column;

    .category-topics {
      margin-bottom: 32px;
    }
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
    padding-right: 10px;
    background-image: url(${arrowRightIcon.src});
    background-repeat: no-repeat;
    background-position: right 6px;

    span {
      font-size: 14px;
      line-height: 19px;
      text-decoration-line: underline;
      color: #333333;
    }
  }

  .category-posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .more-posts-btn {
    display: none;
    box-sizing: border-box;
    padding: 18px 22px;
    min-height: 54px;
    border: 1px solid #aaa;
    border-radius: 3px;

    span {
      text-decoration: none;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #333;
    }

    &:hover {
      border-color: #f25620;

      span {
        color: #f25620; 
      }
    }
  }

  @media ${device.laptop} {
    .main-block {
      grid-template-columns: initial;
      margin-bottom: 44px;
    }

    .wrapper-posts {
      gap: 48px;
    }

    .category-posts-top {
      a {
        display: none;
      }
    }

    .category-posts {
      grid-template-columns: repeat(2, 1fr);
    }

    .category-posts-title {
      margin-right: 0;
    }

    .category-more-posts {
      display: flex;
      justify-content: center;
      margin-top: 32px;
    }

    .more-posts-btn {
      display: inline-block;
    }
  }

  @media ${device.tablet} {
    .category-posts-top {
      margin-bottom: 18px;
    }
  }

  @media (max-width: 592px) {
    .search_area {
      margin-bottom: 32px;
    }

    .group-input,
    .search_input {
      height: 56px;
    }

    .input-label {
      top: 30%;
    }

    .category-posts-title {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.01em;
    }

    .category-posts {
      grid-template-columns: initial;
    }

    .category-more-posts {
      a {
        width: 100%;
      }
    }

    .more-posts-btn {
      display: flex;
      justify-content: center;
    }
  }
`;

export default StyledMainContent;
