import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
  left: 0;
  width: 100%;
  z-index: 1000;

  @media ${device.laptop} {
    overflow-x: hidden;
  }
`;

export default StyledHeader;
