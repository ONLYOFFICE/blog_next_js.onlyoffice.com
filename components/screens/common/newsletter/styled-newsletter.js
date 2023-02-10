import styled from "styled-components";
import { device } from "@components/utils/devices";
import unionIcon from "@public/images/icons/union.svg";

const StyledNewsletter = styled.div`
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  border-radius: 5px;
  background-color: #FFFFFF;
  
  .newsletter-wrapper {
    box-sizing: border-box;
    display: flex;
    padding: 54px 97px 37px;
    margin: 0 auto;
    width: 100%;
  }

  .newsletter-title {
    margin-top: 7px;
    margin-right: 56px;
  }

  .newsletter-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 586px;

    .group-input {
      input {
        padding: 16px;

        &:placeholder {
          font-size: 16px;
          line-height: 24px;
          color: #AAAAAA;
        }
      }

      button {
        padding: 19px 12px;
        border-radius: 0 3px 3px 0;
        min-width: 122px;
        font-family: "Open Sans", sans-serif;
        font-size: 13px;
        line-height: 17px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #FFFFFF;
      }
    }
  }

  .newsletter-text {
    margin-top: 14px;
    font-size: 13px;
    line-height: 21px;

    a {
      display: initial;
      font-size: 13px;
      line-height: 21px;
      color: #333333;
    }
  }

  @media ${device.laptop} {
    .newsletter-wrapper {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 32px 16px;
    }

    .newsletter-title {
      margin: 0 0 32px;
      font-size: 20px;
      line-height: 27px;
      letter-spacing: -.01em;
    }

    .newsletter-body {
      .group-input {
        button {
          font-size: 0;
          min-width: 56px;
          background-image: url(${unionIcon.src});
          background-position: 50% 50%;
          background-repeat: no-repeat;
        }
      }
    }
  }

  @media (max-width: 592px) {
    box-shadow: initial;
    margin: 0 -16px;

    .newsletter-body {
      .group-input {
        button {
          height: 48px;
        }
      }
    }

    .newsletter-text {
      text-align: center;
    }

    .newsletter-text,
    .newsletter-text a {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export default StyledNewsletter;
