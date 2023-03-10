import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";

const StyledInThePressContent = styled(Section)`
  padding: 32px 0 103px;

  .breadcrumbs {
    margin-bottom: 48px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: auto 31.429%;
    align-items: start;
    gap: 32px;
  }

  .main-title {
    margin-bottom: 40px;
    font-size: 32px;
    line-height: 133%;
    letter-spacing: -0.01em;
    font-feature-settings: 'tnum' on,'lnum' on;
  }

  .posts {
    display: grid;
    gap: 40px;
  }

  .sidebar {
    display: grid;
    gap: 36px;
  }

  .newsletter {
    .newsletter-wrapper {
      padding: 54px 37px 37px;
    }

    .newsletter-title {
      margin-right: 24px;
    }
  }

  .in-the-press-load-more {
    grid-column: initial;
  }

  @media ${device.laptop} {
    padding: 32px 0 80px;

    .wrapper {
      grid-template-columns: initial;
    }

    .sidebar {
      display: none;
    }
  }

  @media (max-width: 592px) {
    .breadcrumbs {
      margin-bottom: 32px;
    }

    .posts {
      gap: 67px;
    }

    .main-title {
      margin-bottom: 43px;
      font-size: 24px;
    }

    .newsletter {
      background-color: #f8f8f8;
    }
  }
`;

export default StyledInThePressContent;
