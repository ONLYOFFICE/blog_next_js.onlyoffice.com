import styled from "styled-components";

const StyledSearchArea = styled.form`
  position: relative;

  .search-input {
    box-sizing: border-box;
    border: 1px solid #AAAAAA;
    border-radius: 3px;
    padding: ${props => props.locale === "ar" ? "16px 16px 16px 48px" : "16px 48px 16px 16px"};
    width: 100%;
    height: 56px;
    font-size: 16px;
    line-height: 22px;
    color: #333333;
    outline: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }

    &::placeholder {
      color: #AAAAAA;
    }

    &:focus + .input-label,
    &.focus + .input-label {
      top: 0;
      font-size: 12px;
      left: 0;
      color: #cccccc;
    }

    &:hover:not(:focus) {
      border-color: #666666;
    }

    &:focus {
      border-color: #666666;
    }
  }

  .input-label {
    position: absolute;
    top: 30%;
    left: 0;
    padding: 0px 15px;
    margin: 0;
    font-size: 16px;
    line-height: 22px;
    color: #AAAAAA;
    width: calc(100% - 40px);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    z-index: 2;
    transition: top 0.2s ease-in-out 0s, font-size 0.2s ease-in-out 0s, left 0.2s ease-in-out 0s;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    ${props => props.locale === "ar" ? "left: 16px;" : "right: 16px;"}
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    z-index: 1;

    img {
      width: 20px;
      height: 20px;
    }
  }

  .search-img,
  .close-icon {
    display: flex;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: center;
  }

  .search-img {
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/search-icon.react.svg");
  }

  .close-icon {
    ${props => props.locale === "ar" ? "left: 0;" : "right: initial;"}
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/close-icon.svg");
    cursor: pointer;
  }
`;

export default StyledSearchArea;
