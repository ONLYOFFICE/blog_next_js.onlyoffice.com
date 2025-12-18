import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledNewsletterConfirm = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 43px 26px 67px;
  color: #333;
  background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/newsletter-confirm.svg");
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: 50% 43px;
  border: 1px solid rgba(189,189,189,.6);
  box-shadow: 0px 7px 25px rgb(85 85 85 / 15%);

  h3 {
    margin-top: 72px;
    font-weight: 600;
    font-size: 24px;
    line-height: 133%;
    letter-spacing: -0.01em;
    text-align: center;

    @media screen and ${device.mobile} {
      font-size: 18px;
    }
  }

  p {
    display: block;
    margin-top: 16px;
    font-size: 14px;
    line-height: 160%;
    text-align: center;
  }

  @media screen and ${device.mobile} {
    margin: 0 -16px;
    padding: 32px 16px;
    box-shadow: initial;
    border: none;
  }
`;

export default StyledNewsletterConfirm;
