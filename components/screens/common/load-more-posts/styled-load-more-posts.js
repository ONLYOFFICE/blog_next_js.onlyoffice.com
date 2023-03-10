import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledLoadMorePosts = styled.div`
  grid-column: span 3;
  justify-self: center;

  .load-more-btn,
  .load-more-mobile-btn {
    position: relative;
    padding: 18px 20px;
    min-width: 124px;
    min-height: 56px;
    font-family: "Open Sans", sans-serif;
    font-size: 13px;
    line-height: 17px;
    letter-spacing: 0.04em;
  }

  .load-more-loading-btn {
    box-sizing: border-box;
    position: relative;
    padding: 18px 20px;
    min-width: 124px;
    min-height: 56px;
    border: 1px solid #AAAAAA;
    border-radius: 3px;

    &:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 18px;
      height: 18px;
      margin: 0 auto;
      border: 2px solid #444444;
      border-radius: 75%;
      border-right-color: transparent;
      transform: translate(-50%, -50%);
      animation: cssload-spin 1025ms infinite linear;
    }
    
    @keyframes cssload-spin {
      100%{ transform: translate(-50%, -50%) rotate(360deg); }
    }
  }

  .load-more-mobile-btn {
    display: none;
  }

  @media ${device.laptop} {
    grid-column: span 2;

    .load-more-btn {
      display: none;

      &.show {
        display: block;
        width: 100%;
      }
    }

    .load-more-mobile-btn {
      display: block;
      justify-self: center;
    }
  }

  @media (max-width: 600px) {
    .load-more-loading-btn {
      min-height: 56px;
    }
  }

  @media (max-width: 592px) {
    grid-column: initial;
    justify-self: initial;

    .load-more-loading-btn {
      min-width: 100%;
    }

    .load-more-mobile-btn,
    .load-more-loading-btn {
      width: 100%;
    }
  }
`;

export default StyledLoadMorePosts;
