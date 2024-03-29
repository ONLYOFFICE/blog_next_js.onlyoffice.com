import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";

const StyledSearchContent = styled(Section)`
  padding: 40px 0 80px;

  .breadcrumbs {
    margin-bottom: 40px;
  }

  .search_area {
    margin-bottom: 40px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: auto 31.429%;
    align-items: start;
    gap: 32px;
  }

  .posts {
    display: grid;
    gap: 61px;
  }

  .sidebar {
    display: grid;
    gap: 36px;
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
    background-image: url("https://static-blog.onlyoffice.com/images/404_errors.svg");
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
      animation: cssload-spin 1025ms infinite linear;
    }
  }

  @keyframes cssload-spin {
    100%{ transform: translate(-50%, -50%) rotate(360deg); }
  }

  @media ${device.laptop} {
    padding: 40px 0 88px;

    .wrapper {
      grid-template-columns: initial;
      gap: 48px;
    }
  }

  @media (max-width: 592px) {
    .group-input,
    .search_input {
      height: 56px;
    }

    .sidebar {
      gap: 48px;
    }
  }
`;

export default StyledSearchContent;
