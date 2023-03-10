import styled from "styled-components";
import newsletterConfirm from "@public/images/icons/newsletter-confirm.svg";

const StyledNewsletterConfirm = styled.div`
  display: none;
  position: relative;
  box-sizing: border-box;
  padding: 43px 26px 67px;
  color: #333;
  background-image: url(${newsletterConfirm.src});
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: 50% 43px;
  border: 1px solid rgba(189,189,189,.6);
  box-shadow: 0px 7px 25px rgb(85 85 85 / 15%);

  h4 {
    margin-top: 72px;
    font-weight: 600;
    font-size: 24px;
    line-height: 133%;
    letter-spacing: -0.01em;
    text-align: center;
  }

  p {
    display: block;
    margin-top: 16px;
    font-size: 14px;
    line-height: 160%;
    text-align: center;
  }

  @media (max-width: 592px) {
    margin: 0 -16px;
    padding: 32px 16px;
    box-shadow: initial;
    border: none;

    h4 {
      font-size: 18px;
    }
  }
`;

export default StyledNewsletterConfirm;
