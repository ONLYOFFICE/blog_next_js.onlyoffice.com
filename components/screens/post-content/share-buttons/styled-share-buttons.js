import styled from "styled-components";

const StyledRecentPosts = styled.div`
  display: flex;
  align-items: center;

  .share-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;

    img {
      width: 20px;
      height: 20px;
    }

    &:not(:last-child) {
      margin-right: 8px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default StyledRecentPosts;
