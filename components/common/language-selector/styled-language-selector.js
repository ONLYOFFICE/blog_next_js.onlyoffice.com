import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  position: relative;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  .arrow-image,
  .flag-image {
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .arrow-image {
    padding-left: 8px;
    margin-bottom: 4px;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .title-lng {
    display: inline-block;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    color: #333;
    padding-left: 8px;
    vertical-align: middle;
    text-transform: uppercase;
    width: fit-content;
  }
`;

const StyledPanelView = styled.div`
  position: absolute;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: max-content;
  max-width: 43px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  z-index: 100;
  padding: 6px 6px 6px 12px;
  top: 35px;
  left: -11px;
`;

const StyledItem = styled.div`
  outline: none;
  -webkit-tap-highlight-color: transparent;
  .language-item-image {
    margin-top: -1px;
  }
  .language-item-link {
    display: block;
    margin: 2px 0 8px;
    padding: 1px 8px 1px 1px;
    width: 100%;
    text-decoration: none;
  }
  .title-lng:hover {
    color: #ff865c;
    cursor: pointer;
  }
`;

export { StyledItem, StyledPanelView };
