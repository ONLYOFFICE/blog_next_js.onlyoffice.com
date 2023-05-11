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
    transition-duration: initial;
    transition: color 0.3s, border-color 0.3s;

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
      transition: border 0.3s;
      opacity: 0;
    }
    
    @keyframes cssload-spin {
      100%{ transform: translate(-50%, -50%) rotate(360deg); }
    }

    &.loading {
      font-size: 0;

      &:after {
        opacity: 1;
      }
    }

    &:hover {
      &:after {
        border-color: #ff6f3d;
        border-right-color: transparent;
      }
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

  @media (max-width: 592px) {
    grid-column: initial;
    justify-self: initial;

    .load-more-mobile-btn {
      width: 100%;
    }
  }
`;

export default StyledLoadMorePosts;
