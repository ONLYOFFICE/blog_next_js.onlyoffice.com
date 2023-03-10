import styled from "styled-components";
import { device } from "@components/utils/devices";
import cloudBlock from "@public/images/cloud-block.svg";
import cloudBlockMini from "@public/images/cloud-block-mini.svg";

const StyledCloudBlock = styled.div`
  box-sizing: border-box;
  position: relative;
  padding-top: 10px;
  width: 100%;
  height: 300px;
  background: url(${cloudBlock.src}) no-repeat 50% 10px;
  background-size: 689px 186px;
  background-color: #f8f8f8;

  .button {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 25px;
    display: inline-block;
    font-weight: 600;
    font-size: 13px;
    line-height: 160%;
    text-decoration: none;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #fff;
    background-color: #ff6f3d;
    border-radius: 3px;
    padding: 18px 20px;
    margin: auto;
    max-width: 240px;

    &:hover {
      background-color: #ff865c;
    }
  }

  @media ${device.laptop} {
    .button {
      padding: 12px 20px;
    }
  }

  @media ${device.tablet} {
    background-position: 50% 25%;
    background-size: 95%;
    background-color: #f8f8f8;
  }

  @media (max-width: 592px) {
    margin: 0 -16px;
    width: initial;
    height: 252px;
    padding-top: 39px;
    background-color: #f8f8f8;
    background-image: url(${cloudBlockMini.src});
    background-position: 50% 39px;
    background-repeat: no-repeat;
    background-size: 272px 122.78px;

    .button {
      bottom: 32px;
    }
  }
`;

export default StyledCloudBlock;
