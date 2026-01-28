import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";

const StyledRecentPosts = styled(Section)`
  position: relative;
  padding: 64px 0 120px;
  background-color: #F5F5F5;

  h2 {
    margin-bottom: 56px;
    font-weight: 700;
    font-size: 32px;
    line-height: 133%;
    text-align: center;
    letter-spacing: -0.02em;
    font-feature-settings: "tnum" on, "lnum" on;
    color: #333333;

    @media screen and ${device.mobile} {
      margin-bottom: 24px;
      font-size: 24px;
      letter-spacing: -0.02em;
      text-align: ${props => props.$locale === "ar" ? "right" : "left"};
    }
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

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

  @media screen and ${device.laptop} {
    padding: 32px 0 64px;
  }

  @media screen and ${device.mobile} {
    padding: 45px 0 64px;
  }
`;

export default StyledRecentPosts;
