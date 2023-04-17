import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledFollowUs = styled.div`
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 23px;
  background-color: #f9f9f9;

  h4 {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
  }

  .social-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, 30px);
    gap: 24px;

    .social-link {
      width: 24px;
      height: 24px;

      > div {
        filter: grayscale(0);
      }
    }

    .wdgt-wechat,
    .wdgt-line {
      width: 24px;
      height: 24px;
      min-width: 24px;
      filter: grayscale(0);
    }
  }

  @media ${device.laptop} {
    h4 {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.01em;
    }
  }

  @media ${device.tablet} {
    .social-links {
      grid-template-columns: repeat(auto-fit, 28px);
    }
  }
`;

export default StyledFollowUs;
