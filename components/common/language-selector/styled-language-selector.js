import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  position: relative;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  transition: transform .2s cubic-bezier(.16,.68,.43,.99);

  .flag-image {
    padding-right: 5px;
  }

  .arrow-image,
  .flag-image {
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .flag-image,
  .language-item-link {
    display: block;
    width: 24px;
    height: 24px;
    text-decoration: none;
    background-image: url("https://static-blog.onlyoffice.com/images/icons/flags.png");
    background-repeat: no-repeat;

    &.fr {
      background-position-y: -48px;
    }

    &.de {
      background-position-y: -72px;
    }

    &.es {
      background-position-y: -96px;
    }

    &.pt-br {
      background-position-y: -120px;
    }

    &.it {
      background-position-y: -144px;
    }

    &.cs {
      background-position-y: -168px;
    }

    &.ja {
      background-position-y: -216px;
    }

    &.zh-hans {
      background-position-y: -240px;
    }
  }

  .arrow-image {
    margin-bottom: 4px;
    outline: none;
    -webkit-tap-highlight-color: transparent;

    &.is-open {
      transform: translateY(6px) rotate(180deg);
    }
  }

  .title-lng {
    display: inline-block;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    color: #333;
    padding-left: 8px;
    vertical-align: middle;
    text-transform: uppercase;
    width: fit-content;
  }
`;

const StyledPanelView = styled.div`
  position: absolute;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: max-content;
  max-width: 43px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  z-index: 100;
  padding: 6px;
  top: 30px;
  left: -2px;
`;

const StyledItem = styled.div`
  outline: none;
  -webkit-tap-highlight-color: transparent;
  .language-item-image {
    margin-top: -1px;
  }

  .title-lng:hover {
    color: #ff865c;
    cursor: pointer;
  }
`;

export { StyledItem, StyledPanelView };
