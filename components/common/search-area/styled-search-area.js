import styled from "styled-components";

const StyledSearchArea = styled.div`
  .search_container {
    position: relative;
  }

  .search_input {
    border: 1px solid #AAAAAA;
    border-radius: 3px;
    padding: 16px 48px 16px 16px;
    background-color: #F9F9F9;
  }

  .input-label {
    font-size: 16px;
    line-height: 22px;
    color: #AAAAAA;
  }

  .search_icon {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    z-index: 1;
  }

  .close-icon {
    cursor: pointer;
  }
`;
export default StyledSearchArea;
