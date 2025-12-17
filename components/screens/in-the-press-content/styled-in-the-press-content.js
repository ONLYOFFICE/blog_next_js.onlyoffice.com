import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";

const StyledInThePressContent = styled(Section)`
  padding: 32px 0 103px;

  .breadcrumbs {
    margin-bottom: 48px;

    @media screen and ${device.mobile} {
      margin-bottom: 32px;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: auto 31.429%;
    align-items: start;
    gap: 32px;

    @media screen and ${device.laptop} {
      grid-template-columns: initial;
    }
  }

  .main-title {
    margin-bottom: 40px;
    font-size: 32px;
    line-height: 133%;
    letter-spacing: -0.01em;
    font-feature-settings: "tnum" on,"lnum" on;

    @media screen and ${device.mobile} {
      margin-bottom: 43px;
      font-size: 24px;
    }
  }

  .posts {
    display: grid;
    gap: 64px;

    @media screen and ${device.mobile} {
      gap: 67px;
    }
  }

  .sidebar {
    display: grid;
    gap: 36px;

    @media screen and ${device.laptop} {
      display: none;
    }
  }

  .newsletter {
    .newsletter-wrapper {
      padding: 54px 37px 37px;
    }

    .newsletter-title {
      ${props => props.$locale === "ar" ? "margin-left: 24px;" : "margin-right: 24px;"}

      @media screen and ${device.laptop} {
        ${props => props.$locale === "ar" ? "margin-left: 0;" : "margin-right: 0;"}
      }
    }

    @media screen and ${device.mobile} {
      background-color: #f8f8f8;
    }
  }

  .in-the-press-load-more {
    grid-column: initial;
  }

  @media screen and ${device.laptop} {
    padding: 32px 0 80px;
  }
`;

export default StyledInThePressContent;
