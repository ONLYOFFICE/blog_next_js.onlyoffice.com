import styled from "styled-components";

const StyledInput = styled.div`
  width: 100%;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  &.error {
    input {
      border-color: #cb0000;
    }
  }

  .label {
    display: block;
    font-size: 11px;
    color: #333333;

    span {
      color: #c30;
    }
  }

  input {
    font-size: 16px;
    line-height: 22px;
    color: #333;
    width: 100%;
    border: 1px solid #e1e1e1;
    outline: none;
  }

  .error-text {
    font-size: 11px;
    color: #cb0000;
  }
`;

export default StyledInput;
