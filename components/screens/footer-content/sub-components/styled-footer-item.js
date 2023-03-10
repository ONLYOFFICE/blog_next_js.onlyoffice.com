import styled, { css } from "styled-components";
import { device } from "@components/utils/devices";

const StyledFooterTablet = css`
  display: block;
  padding: 0;
  border-bottom: 1px solid #e5e5e5;

  .footer-item-heading {
    padding: 20px 0 19px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.4s linear 0s;
  }

  .footer-link {
    font-size: 12px;
    line-height: 20px;
  }

  .footer-item-heading-arrow {
    display: block;
    position: absolute;
    right: 0;
    top: 14px;
    z-index: -1;
    transition: 0.3s linear;
    &.up {
      transform: rotate(180deg);
    }
  }

  .footer-items-group {
    display: grid;
    position: initial;
    margin-bottom: 0px;
    overflow: hidden;
    transition: margin-top 0.5s ease;

    ${(props) =>
      props.isOpen
        ? css`
            display: grid;
            grid-gap: 12px;
            margin: 10px 0 18px;
            position: initial;
            height: 100%;
            max-height: 100%;
          `
        : css`
            position: initial;
            margin-bottom: 0px;
            margin-top: 0px;
            max-height: 0px;
          `}
  }
`;

const StyledFooterItem = styled.div`
  display: grid;
  position: relative;
  padding: 0 0 40px;
  white-space: break-spaces;

  .footer-items-group {
    display: grid;
    row-gap: 8px;
    max-height: 100%;
  }

  .footer-link {
    color: #333;
    font-size: 13px;
    line-height: 18px;
    text-decoration: none;
    -webkit-transition: color 0.2s, border 0.5s;
    -moz-transition: color 0.2s, border 0.5s;
    -o-transition: color 0.2s, border 0.5s;
    transition: color 0.2s, border 0.5s;

    &:hover {
      color: #ff6f3d;
    }

    &[href*="/call-back-form.aspx"] {
      font-weight: 700;
    }
  }

  .footer-item-heading {
    font-size: 12px;
    line-height: 12px;
    padding: 0 0 14px;
    font-weight: 700;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .footer-item-heading-arrow {
    display: none;
  }

  @media ${device.tablet} {
    ${StyledFooterTablet};
  }
`;

export default StyledFooterItem;
