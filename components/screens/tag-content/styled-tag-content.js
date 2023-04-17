import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";

const StyledTagContent = styled(Section)`
  padding: 32px 0 103px;

  .breadcrumbs {
    margin-bottom: 48px;
  }

  .tag-title {
    margin-bottom: 40px;
    font-size: 32px;
    line-height: 133%;
    letter-spacing: -0.01em;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #333333;
  }

  .tag-name {
    display: inline-block;
    vertical-align: middle;
    color: #616161;
    padding: 6px 16px;
    background-color: #F2F2F2;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    border-radius: 3px;
    text-decoration: none;
    cursor: default;
  }

  .tag-posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 64px 32px;
  }

  @media ${device.laptop} {
    padding: 32px 0 80px;

    .tag-posts {
      grid-template-columns: repeat(2, 1fr);
      gap: 48px 32px;
    }
  }

  @media ${device.tablet} {
    .section-page {
      max-width: 100%;
      padding: 0 40px;
    }

    .tag-posts {
      gap: 32px;
    }
  }

  @media (max-width: 592px) {
    .section-page {
      padding: 0 16px;
    }

    .breadcrumbs {
      margin-bottom: 32px;
    }

    .tag-title {
      font-size: 24px;
    }

    .tag-posts {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default StyledTagContent;
