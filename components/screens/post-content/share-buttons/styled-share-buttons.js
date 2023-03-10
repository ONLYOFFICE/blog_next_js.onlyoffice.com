import styled from "styled-components";

const StyledRecentPosts = styled.div`
  display: flex;
  align-items: center;

  .share-button {
    width: 24px;
    height: 24px;

    svg {
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

  .external-link {
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-size: 24px 24px;
    background-position: center center;

    > div > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default StyledRecentPosts;
