import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledFollowUs = styled.div`
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 23px;
  background-color: #f9f9f9;

  h3 {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;

    @media screen and ${device.laptop} {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.01em;
    }
  }
`;

export default StyledFollowUs;
