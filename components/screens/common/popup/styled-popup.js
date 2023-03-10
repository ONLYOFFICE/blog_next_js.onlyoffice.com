import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledPopup = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(119, 119, 119, 0.5);
  opacity: 0;
  visibility: hidden;
  z-index: 1001;
  transition: opacity 0.3s, visibility 0.3s;
  
  &.is-open {
    opacity: 1;
    visibility: visible;
  }

  .content {
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 1040px;
  }

  .close-icon {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    width: 31px;
    height: 31px;
    cursor: pointer;
    z-index: 1003;
    cursor: pointer;

    &:before,
    &:after {
      content: "";
      background-color: #fff;
      position: absolute;
      height: 2px;
      width: 31px;
      transform: rotate(45deg);
      border-radius: 1px;
      top: 14px;
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
`;

export default StyledPopup;
