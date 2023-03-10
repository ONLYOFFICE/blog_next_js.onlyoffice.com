import styled from "styled-components";

const StyledTextarea = styled.div`
  width: 100%;

  &.error {
    textarea {
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

  textarea {
    display: block;
    width: 100%;
    height: 200px;
    margin: 0 auto;
    padding: 2px 1px;
    overflow: auto;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    background-color: #fff;
    border: 1px solid #e1e1e1;
    outline: none;
    resize: vertical;
  }

  .error-text {
    font-size: 11px;
    color: #cb0000;
  }
`;
export default StyledTextarea;
