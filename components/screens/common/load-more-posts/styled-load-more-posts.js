import styled, { keyframes } from "styled-components";
import { device } from "@components/utils/devices";

const loadSpin = keyframes`
  100%  { 
    transform: translate(-50%, -50%) rotate(360deg); 
  }
`;

const StyledLoadMorePosts = styled.div`
  grid-column: span 3;
  justify-self: center;

  .load-more-btn,
  .load-more-mobile-btn {
    position: relative;
    padding: 18px 20px;
    min-width: 124px;

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
      animation: ${loadSpin} 1025ms infinite linear;
      transition: border 0.3s;
      opacity: 0;
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

  .load-more-btn {
    &.show {
      @media screen and ${device.laptop} {
        display: block;
        width: 100%;
      }
    }

    @media screen and ${device.laptop} {
      display: none;
    }
  }

  .load-more-mobile-btn {
    display: none;

    @media screen and ${device.laptop} {
      display: block;
      justify-self: center;
    }

    @media screen and ${device.mobile} {
      width: 100%;
    }
  }

  @media screen and ${device.laptop} {
    grid-column: span 2;
  }

  @media screen and ${device.mobile} {
    grid-column: initial;
    justify-self: initial;
  }
`;

export default StyledLoadMorePosts;
