import styled from "styled-components";

const StyledText = styled.span`
  margin: 0;
  padding: 0;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "14px")};
  font-weight: ${(props) => (props.$fontWeight && props.$fontWeight)};
  line-height: ${(props) => (props.$lineHeight ? props.$lineHeight : "21px")};
  color: ${(props) => (props.$color ? props.$color : "#333333")};
`;

export default StyledText;
