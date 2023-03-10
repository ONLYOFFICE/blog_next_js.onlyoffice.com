import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";

const StyledCategoryContent = styled(Section)`
  padding: 32px 0 103px;
  background-color: #F5F5F5;

  .breadcrumbs {
    margin-bottom: 48px;
  }

  h1 {
    margin-bottom: 80px;
    font-weight: 700;
    font-size: 40px;
    line-height: 53px;
    letter-spacing: -0.02em;
    font-feature-settings: 'pnum' on,'lnum' on;
    color: #333;
  }

  .category-posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 64px 32px;
  }

  .download-block,
  .newsletter,
  .newsletter-confirm {
    grid-column: span 3;
  }

  @media ${device.laptop} {
    padding: 32px 0 80px;

    h1 {
      margin-bottom: 40px;
    }

    .category-posts {
      grid-template-columns: repeat(2, 1fr);
      gap: 48px 32px;
    }

    .download-block,
    .newsletter,
    .newsletter-confirm {
      grid-column: span 2;
    }
  }

  @media ${device.tablet} {
    .category-posts {
      gap: 32px;
    }
  }

  @media (max-width: 592px) {
    padding: 32px 0 64px;

    .breadcrumbs {
      margin-bottom: 32px;
    }

    h1 {
      margin-bottom: 18px;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.01em;
    }

    .category-posts {
      grid-template-columns: initial;
    }

    .download-block,
    .newsletter,
    .newsletter-confirm {
      grid-column: initial;
    }

    .card-img {
      padding-bottom: 50.35%;
    }
  }
`;

export default StyledCategoryContent;
