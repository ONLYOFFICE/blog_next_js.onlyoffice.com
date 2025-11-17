import styled, { keyframes } from "styled-components";
import { device } from "@components/utils/devices";

const loadSpin = keyframes`
  100%  { 
    transform: translate(-50%, -50%) rotate(360deg); 
  }
`;

const StyledNewsletter = styled.div`
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  border-radius: 5px;
  background-color: #FFFFFF;

  &.hy {
    .newsletter-body form button {
      min-width: 164px;
      @media screen and ${device.mobile} {
        min-width: 56px;
      }
    }

    @media screen and ${device.laptop} {
      .newsletter-body form {
        display: flex;
        flex-direction: column;
        gap: 16px;
        input, input#name {
          max-width: 100%;
        }
        }
      }
  }
  
  .newsletter-wrapper {
    box-sizing: border-box;
    display: flex;
    justify-content: start;
    padding: 54px 56px 37px;
    margin: 0 auto;
    width: 100%;

    @media screen and ${device.laptop} {
      flex-direction: column;
      align-items: center;
      padding: 40px 56px;
    }
    @media screen and ${device.tablet} {
      padding: 32px 16px;
    }
  }

  .newsletter-title {
    margin-top: 7px;
    ${props => props.locale === "ar" ? "margin-left: 56px;" : "margin-right: 56px;"}
    width: 100%;
    max-width: ${props => props.locale === "ar" ? "204px" : "180px"};
    //white-space: nowrap;

    @media screen and ${device.laptop} {
      margin: 0 0 32px;
      letter-spacing: -0.01em;
      text-align: center;
      max-width: 100%;
    }
    @media screen and ${device.mobile} {
      font-size: 20px;
      line-height: 27px;
      margin: 0 0 24px;
    }
  }

  .newsletter-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 776px;

    form {
      position: relative;
      display: grid;
      grid-template-columns: 40% auto;
      column-gap: 16px;
        @media screen and ${device.mobile} {
          display: flex;
          gap: 16px;
          flex-direction: column;
        }
      .email-button-field {
        display: flex;
        position: relative;
        
        @media screen and ${device.mobile} {
          max-width: 100%;
        }
      }

      input {
        background-color: #f9f9f9;
        box-sizing: border-box;
        height: 56px;
        border: 1px solid #aaaaaa;
        border-radius: ${props => props.locale === "ar" ? "0 3px 3px 0" : "3px 0 0 3px"};
        ${props => props.locale === "ar" ? "border-left: none;" : "border-right: none;"}
        padding: 16px;
        font-size: 14px;
        line-height: 280%;
        color: #333;
        max-width: 328px;
        width: 100%;

        &#name {
          border-radius: 3px;
          ${props => props.locale === "ar" ? "border-left: 1px solid #aaaaaa;" : "border-right: 1px solid #aaaaaa;"}
          max-width: 300px;
          @media screen and ${device.mobile} {
          max-width: 100%;
        }
        }
        @media screen and ${device.mobile} {
          height: 48px;
          max-width: 100%;
        }
      }

      button {
        position: relative;
        padding: 19px 12px;
        border-radius: ${props => props.locale === "ar" ? "3px 0 0 3px" : "0 3px 3px 0"};
        min-width: 122px;
        font-family: "Open Sans", sans-serif;
        font-size: 13px;
        line-height: 17px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #ffffff;
        transition: background-color 0.3s, opacity 0.3s;

        &.loading {
          font-size: 0;

          &:after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            width: 18px;
            height: 18px;
            margin: 0 auto;
            border: 2px solid #ffffff;
            border-radius: 75%;
            border-right-color: transparent;
            transform: translate(-50%, -50%);
            animation: ${loadSpin} 1025ms infinite linear;
          }

          @media screen and ${device.mobile} {
            background-image: none;
          }
        }

        @media screen and ${device.mobile} {
          border-radius: ${props => props.locale === "ar" && "0 3px 3px 0"};
          font-size: 0;
          min-width: 56px;
          height: 48px;
          min-height: 48px;
          background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/union.svg");
          background-position: 50% 50%;
          background-repeat: no-repeat;
          transform: ${props => props.locale === "ar" && "rotate(180deg)"};
        }
      }

      .error-text {
        position: absolute;
        top: 56px;
        ${props => props.locale === "ar" ? "right: 0;" : "left: 0;"}
        color: #ff0c3e;
        font-size: 12px;
        line-height: 19px;

        @media screen and ${device.mobile} {
          top: 48px;
          font-size: 10px;
        }
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

    @media screen and ${device.mobile} {
      font-size: 12px;
      line-height: 16px;
      text-align: center;
    }
  }

  @media screen and ${device.mobile} {
    box-shadow: initial;
    margin: 0 -16px;
  }
`;

export default StyledNewsletter;
