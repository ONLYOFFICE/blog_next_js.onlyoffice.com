import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledSection = styled.section`
  height: 100%;
  display: ${(props) => props.display || "block"};
  position: ${(props) => props.position || "relative"};
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "10px 0"};
  background: ${(props) => props.background || "transparent"};

  .section-page {
    box-sizing: border-box;
    padding: 0 32px;
    max-width: 1184px;
    margin: 0px auto;
  }

  @media ${device.laptopM} {
    margin: ${(props) => props.margin || "0px"};
    padding: ${(props) => props.padding || "0px"};

    .section-page {
      width: 100%;
      max-width: ${(props) => props.maxWidth};
    }
  }

  @media ${device.laptop} {
    margin: ${(props) => props.tabletMargin || "0px"};
    padding: ${(props) => props.tabletPadding || "25px 0px"};

    .section-page {
      max-width: ${(props) => props.maxWidthLaptop || "800px"};
    }
  }

  @media (max-width: 592px) {
    margin: ${(props) => props.mobileLMargin || "0px"};
    padding: ${(props) => props.mobileLPadding || "50px 0px"};

    .section-page {
      padding: 0 16px;
    }
  }
`;

export default StyledSection;
