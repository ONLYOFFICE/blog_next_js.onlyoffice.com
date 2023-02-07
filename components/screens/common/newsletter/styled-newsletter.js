import styled from "styled-components";

const StyledNewsletter = styled.div`
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  border-radius: 5px;
  background-color: #FFFFFF;
  
  .newsletter-wrapper {
    display: flex;
    gap: 57px;
    padding: 54px 200px 37px 97px;
    margin: 0 auto;
    width: 100%;
    max-width: 823px;
  }

  .newsletter-title {
    margin-top: 7px;
  }

  .newsletter-body {
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
`;

export default StyledNewsletter;
