import styled from "styled-components";

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${(props) => 
    props.level === 1 ? "40px" : 
    props.level === 2 ? "32px" :
    props.level === 3 ? "24px" :
    props.level === 4 ? "18px" :
    props.level === 5 ? "14px" :
    props.level === 6 ? "14px" : "40px"
  };
  line-height: ${(props) => 
    props.level === 1 ? "53px" : 
    props.level === 2 ? "38px" :
    props.level === 3 ? "32px" :
    props.level === 4 ? "24px" :
    props.level === 5 ? "19px" :
    props.level === 6 ? "19px" : "53px"
  };
  font-weight: 700;
  color: #333333;
`;

export default StyledHeading;
