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
    justify-content: center;
    padding: 54px 97px 37px;
    margin: 0 auto;
    width: 100%;
  }

  .newsletter-title {
    margin-top: 7px;
    margin-right: 56px;
    width: 100%;
    max-width: 180px;
  }

  .newsletter-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 586px;

    form {
      position: relative;
      display: flex;

      input {
        box-sizing: border-box;
        height: 56px;
        border: 1px solid #aaaaaa;
        border-radius: 3px;
        border-right: none;
        border-bottom-right-radius: initial;
        border-top-right-radius: initial;
        padding: 16px;
        font-size: 14px;
        line-height: 280%;
        color: #333;
      }

      button {
        padding: 19px 12px;
        border-radius: 0px 3px 3px 0px;
        min-width: 122px;
        font-family: "Open Sans", sans-serif;
        font-size: 13px;
        line-height: 17px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #ffffff;
      }

      .error-text {
        position: absolute;
        top: 56px;
        left: 0;
        color: #ff0c3e;
        font-size: 12px;
        line-height: 19px;
      }
    }
  }

  .newsletter-text {
    margin-top: 14px;
    font-size: 13px;
    line-height: 21px;
    color: #333333;
    cursor: default;
    pointer-events: none;
    text-decoration: none;

    u {
      cursor: pointer;
      pointer-events: initial;
    }
  }

  @media ${device.laptop} {
    .newsletter-wrapper {
      flex-direction: column;
      align-items: center;
      padding: 32px 16px;
    }

    .newsletter-title {
      margin: 0 0 32px;
      font-size: 20px;
      line-height: 27px;
      letter-spacing: -0.01em;
      text-align: center;
    }

    .newsletter-body {
      form {
        button {
          font-size: 0;
          min-width: 56px;
          background-image: url(${unionIcon.src});
          background-position: 50% 50%;
          background-repeat: no-repeat;
        }
      }
    }

    .newsletter-text {
      text-align: center;
    }
  }

  @media (max-width: 592px) {
    box-shadow: initial;
    margin: 0 -16px;

    .newsletter-body {
      form {
        input,
        button {
          height: 48px;
        }

        .error-text {
          top: 48px;
          font-size: 10px;
        }
      }
    }

    .newsletter-text {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export default StyledNewsletter;
