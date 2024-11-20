import styled from "styled-components";

const StyledTag = styled.div`
  display: inline-block;
  background-color: #F2F2F2;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 3px;

  .internal-link {
    display: inline-flex;
    padding: 6px 16px;
    font-size: 14px;
    line-height: 22px;
    color: #616161;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default StyledTag;
