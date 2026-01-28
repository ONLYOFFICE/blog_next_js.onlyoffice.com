import styled from "styled-components";

const StyledButton = styled.button`
  border: ${(props) => props.$typeButton === "transparent" ? "1px solid #AAAAAA" : "none"};
  border-radius: 3px;
  padding: 19px 24px;
  font-size: 13px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0.04em;
  min-height: 56px;
  color: ${(props) => props.$typeButton === "transparent" ? "#444444" : "#FFFFFF"};
  background-color: ${(props) => props.$typeButton === "transparent" ? "transparent" : "#FF6F3D"};
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${(props) => props.$typeButton === "transparent" ? "border-color 0.3s, color 0.3s" : "background-color 0.3s"};

  &:hover {
    ${(props) => props.$typeButton === "transparent" ? 
      ` 
        border-color: #FF6F3D; 
        color: #FF865C;
      `
    :
      "background-color: #FF865C;" 
    };
  }

  &:active {
    ${(props) => props.$typeButton === "transparent" ? 
      ` 
        border-color: #444444; 
        color: #444444;
      `
    :
      "background-color: #FF6F3D;" 
    };
  }

  &:disabled {
    cursor: default;
    ${(props) => props.$typeButton === "transparent" ? 
      ` 
        border-color: #E5E5E5; 
        color: #C7C7C7;
      `
    :
      "background-color: #FFD4C5;" 
    };
  }
`;

export default StyledButton;
