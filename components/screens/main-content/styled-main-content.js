import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";

const StyledMainContent = styled(Section)`
  padding: 40px 0 82px;
  background-color: #F5F5F5;

  .search-area {
    margin-bottom: 40px;

    @media screen and ${device.mobile} {
      margin-bottom: 32px;
    }
  }

  .search-input {
    background-color: #f9f9f9;

    &:focus {
      background-color: transparent;
    }

    @media screen and ${device.mobile} {
      height: 56px;
    }
  }

  .input-label {
    @media screen and ${device.mobile} {
      top: 30%;
    }
  }

  .main-block {
    display: grid;
    grid-template-columns: auto 31.429%;
    margin-bottom: 60px;
    grid-gap: 32px;

    @media screen and ${device.laptop} {
      grid-template-columns: initial;
      margin-bottom: 44px;
    }
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

    @media screen and ${device.laptop} {
      gap: 48px;
    }
  }

  .category-posts-top {
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    a {
      display: inline-flex;

      @media screen and ${device.laptop} {
        display: none;
      }
    }

    @media screen and ${device.tablet} {
      margin-bottom: 18px;
    }
  }

  .category-posts-title {
    ${props => props.locale === "ar" ? " margin-left: 32px;" : "margin-right: 32px;"}
    font-size: 32px;
    line-height: 43px;
    letter-spacing: -0.02em;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #333333;

    @media screen and ${device.laptop} {
      ${props => props.locale === "ar" ? " margin-left: 0;" : "margin-right: 0;"}
    }

    @media screen and ${device.mobile} {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.01em;
    }
  }

  .view-all {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #333333;
    
    &:after {
      content: "";
      ${props => props.locale === "ar" ? "margin-right: 10px;" : "margin-left: 10px;"}
      width: 4px;
      height: 8px;
      transform: ${props => props.locale === "ar" && "rotate(180deg)"};
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/arrow-right.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }

    &:hover {
      text-decoration-line: none;
    }
  }

  .category-posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    .category-posts-btn {
      grid-column: span 3;
      justify-self: center;

      @media screen and ${device.laptop} {
        grid-column: span 2;
      }

      @media screen and ${device.mobile} {
        grid-column: initial;
        justify-self: initial;
      }
    }

    @media screen and ${device.laptop} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and ${device.mobile} {
      grid-template-columns: initial;
    }
  }

  .category-more-posts {
    a {
      @media screen and ${device.mobile} {
        width: 100%;
      }
    }

    @media screen and ${device.laptop} {
      display: flex;
      justify-content: center;
      margin-top: 32px;
    }
  }

  .more-posts-btn {
    display: none;
    box-sizing: border-box;
    padding: 18px 22px;
    min-height: 54px;
    border: 1px solid #aaa;
    border-radius: 3px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #333;
    text-align: center;

    &:hover {
      border-color: #f25620;
      color: #f25620; 
    }

    @media screen and ${device.laptop} {
      display: inline-block;
    }

    @media screen and ${device.mobile} {
      display: flex;
      justify-content: center;
    }
  }
`;

export default StyledMainContent;
