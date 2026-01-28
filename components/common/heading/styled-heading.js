import styled from "styled-components";

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${(props) => 
    props.$size === 1 ? "40px" : 
    props.$size === 2 ? "32px" :
    props.$size === 3 ? "24px" :
    props.$size === 4 ? "18px" :
    props.$size === 5 ? "14px" :
    props.$size === 6 ? "14px" : "40px"
  };
  line-height: ${(props) => 
    props.$size === 1 ? "53px" : 
    props.$size === 2 ? "38px" :
    props.$size === 3 ? "32px" :
    props.$size === 4 ? "24px" :
    props.$size === 5 ? "19px" :
    props.$size === 6 ? "19px" : "53px"
  };
  font-weight: 700;
  color: #333333;
`;

export default StyledHeading;
