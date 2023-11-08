import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";

const StyledRecentPosts = styled(Section)`
  position: relative;
  padding: 64px 0 120px;
  background-color: #F5F5F5;

  h3 {
    margin-bottom: 56px;
    font-weight: 700;
    font-size: 32px;
    line-height: 133%;
    text-align: center;
    letter-spacing: -0.02em;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #333333;
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  @media ${device.laptop} {
    padding: 32px 0 64px;

    .posts {
      grid-template-columns: repeat(2, 1fr);
      gap: 48px 32px;
    }
  }

  @media ${device.tablet} {
    .posts {
      gap: 32px;
    }
  }

  @media (max-width: 592px) {
    padding: 45px 0 64px;

    h3 {
      margin-bottom: 24px;
      font-size: 24px;
      letter-spacing: -0.02em;
      text-align: left;
    }

    .posts {
      grid-template-columns: initial;
    }
  }
`;

export default StyledRecentPosts;
