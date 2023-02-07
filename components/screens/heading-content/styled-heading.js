import styled, { css } from "styled-components";

const StyledHeadingTablet = css`
  grid-template-columns: auto 152px auto;
  justify-content: space-between;
  height: 48px;

  .nav-items-mobile {
    display: block;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
    div {
      svg {
        rect {
          fill: ${(props) => (props.template ? "black" : "white")};
        }
      }
    }
    cursor: pointer;
  }

  .nav-item-links {
    border-right: 1px solid #e5e5e5;
  }

  .nav-item-logo {
    display: block;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
    text-align: center;
    margin: 0 auto;
    width: 152px;
    height: 28px;
  }

  .nav-item-lng {
    display: block;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;

    .nav-item-tel {
      display: none;
    }
  }
`;

const StyledHeading = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 28px 0 24px;
  height: 70px;
  background: #F5F5F5;
  border-bottom: 1px solid #d9d9d9;

  .nav-item-logo {
    width: 154px;
    height: 28px;
  }

  .nav-item-links {
    position: absolute;
    left: 50%;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
    max-width: 936px;
    height: 70px;
    transform: translateX(-50%);
  }

  .nav-items-mobile {
    display: none;
  }

  @media (max-width: 1150px) {
    ${StyledHeadingTablet};
  }
`;

export default StyledHeading;
