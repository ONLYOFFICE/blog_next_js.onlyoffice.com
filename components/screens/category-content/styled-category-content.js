import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";

const StyledCategoryContent = styled(Section)`
  padding: 32px 0 103px;
  background-color: #F5F5F5;

  .breadcrumbs {
    margin-bottom: 48px;

    @media screen and ${device.mobile} {
      margin-bottom: 32px;
    }
  }

  h1 {
    margin-bottom: 80px;
    font-weight: 700;
    font-size: 40px;
    line-height: 53px;
    letter-spacing: -0.02em;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #333;

    @media screen and ${device.laptop} {
      margin-bottom: 40px;
    }

    @media screen and ${device.mobile} {
      margin-bottom: 18px;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.01em;
    }
  }

  .category-posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 64px 32px;

    @media screen and ${device.laptop} {
      grid-template-columns: repeat(2, 1fr);
      gap: 48px 32px;
    }

    @media screen and ${device.tablet} {
      gap: 32px;
    }

    @media screen and ${device.mobile} {
      grid-template-columns: initial;
    }
  }

  .download-block,
  .newsletter,
  .newsletter-confirm {
    grid-column: span 3;

    @media screen and ${device.laptop} {
      grid-column: span 2;
    }

    @media screen and ${device.mobile} {
      grid-column: initial;
    }
  }

  .card-img {
    @media screen and ${device.mobile} {
      padding-bottom: 50.35%;
    }
  }

  @media screen and ${device.laptop} {
    padding: 32px 0 80px;
  }

  @media screen and ${device.mobile} {
    padding: 32px 0 64px;
  }
`;

export default StyledCategoryContent;
