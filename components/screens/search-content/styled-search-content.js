import styled, { keyframes } from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";

const loadSpin = keyframes`
  100%  { 
    transform: translate(-50%, -50%) rotate(360deg); 
  }
`;

const StyledSearchContent = styled(Section)`
  padding: 40px 0 80px;

  .breadcrumbs {
    margin-bottom: 40px;
    
    li {
      &:not(:first-child) {
        direction: ${props => props.locale === "ar" && "initial"};
      }
    }
  }

  .search-area {
    margin-bottom: 40px;
  }

  .search-input {
    @media screen and ${device.mobile} {
      height: 56px;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: auto 31.429%;
    align-items: start;
    gap: 32px;

    @media screen and ${device.laptop} {
      grid-template-columns: initial;
      gap: 48px;
    }
  }

  .posts {
    display: grid;
    gap: 61px;
  }

  .sidebar {
    display: grid;
    gap: 36px;

    @media screen and ${device.mobile} {
      gap: 48px;
    }
  }

  .search-posts {
    grid-column: initial;
  }

  .no-results {
    h3 {
      font-weight: 600;
      font-size: 18px;
      line-height: 133%;
      text-align: center;
      letter-spacing: -.01em;
      margin: 0 15px 40px;
    }
  }

  .no-results-bg {
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/404_errors.svg");
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    width: auto;
    height: 340px;
  }

  .loading {
    position: relative;
    width: 100%;
    height: 56px;

    &:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 18px;
      height: 18px;
      margin: 0 auto;
      border: 2px solid #444444;
      border-radius: 75%;
      border-right-color: transparent;
      transform: translate(-50%, -50%);
      animation: ${loadSpin} 1025ms infinite linear;
    }
  }

  @media screen and ${device.laptop} {
    padding: 40px 0 88px;
  }
`;

export default StyledSearchContent;
