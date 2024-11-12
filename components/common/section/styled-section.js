import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledSection = styled.section`
  .section-page {
    box-sizing: border-box;
    max-width: 1200px;
    padding: 0 40px;
    margin: 0 auto;

    @media screen and ${device.laptop} {
      max-width: 816px;
    }

    @media screen and ${device.mobile} {
      padding: 0 16px;
    }
  }
`;

export default StyledSection;
