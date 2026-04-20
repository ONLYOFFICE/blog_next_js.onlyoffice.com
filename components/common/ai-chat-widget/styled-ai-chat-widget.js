import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 80%, 100% { opacity: 0.3; }
  40% { opacity: 1; }
`;

export const StyledChatToggle = styled.button`
  position: fixed;
  bottom: 13px;
  right: 16px;
  width: 52px;
  height: 52px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  overflow: visible;
  z-index: 1000;

  /* FAB SVG viewBox is 74x74 with the visible 56x56 rect at x=9,y=1; the rest is shadow
     padding. Render the SVG oversized (52 * 74/56 ≈ 68.71px) and offset so its visible
     rect aligns with the 52x52 button — keeps button dimensions constant across states. */
  > svg {
    position: absolute;
    display: block;
    overflow: visible;
    width: 68.71px;
    height: 68.71px;
    top: -0.93px;
    right: -8.36px;
  }

  &.is-open {
    border-radius: 8px;
    background-color: #FF6F3D;
    color: #fff;

    &:hover {
      opacity: 0.9;
    }

    > svg {
      width: 70%;
      height: 70%;
      top: 15%;
      right: auto;
      left: 15%;
    }
  }

  @media (max-width: 768px) {
    z-index: 9999;
  }
`;

export const StyledChatWindow = styled.div`
  position: fixed;
  bottom: 95px;
  right: 16px;
  width: ${(props) => (props.$expanded ? "640px" : "400px")};
  height: calc(100dvh - 260px);
  max-height: calc(100dvh - 260px);
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
  font-family: "Sora", "Open Sans", sans-serif;
  color: #17223B;
  transition: width 0.2s ease-in-out;
  overscroll-behavior: contain;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100dvh;
    max-height: 100dvh;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 0;
    z-index: 999999;
  }
`;

export const StyledChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border-bottom: 1px solid #E4E7EE;
  border-radius: 12px 12px 0 0;
  background: #fff;

  .chat-header-title {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #17223B;

    svg {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }
  }

  .chat-header-actions {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .chat-header-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    color: #5A6B8C;
    transition: color 0.2s;

    &:hover {
      color: #17223B;
    }

    svg {
      width: 18px;
      height: 18px;
    }

    @media (max-width: 768px) {
      &.chat-header-expand {
        display: none;
      }
    }
  }
`;

export const StyledChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 0;
`;

export const StyledHero = styled.div`
  padding: 26px 22px 10px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  .hero-heading {
    margin: 0;
    font-family: "Sora", "Open Sans", sans-serif;
    font-size: 22px;
    font-weight: 600;
    color: #17223B;
    line-height: 1.25;
  }

  .hero-subtitle {
    margin: 0;
    font-size: 13.5px;
    font-weight: 400;
    color: #5A6B8C;
    line-height: 1.5;
  }
`;

export const StyledCategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;

  button {
    background: #fff;
    color: #5A6B8C;
    border: 1px solid #DDE1E8;
    border-radius: 999px;
    padding: 6px 12px;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.15s, color 0.15s, border-color 0.15s;

    &:hover {
      border-color: #B7C0D0;
      color: #17223B;
    }

    &.active {
      background: #FFE7DC;
      color: #E85A28;
      border-color: #FFE7DC;
    }
  }
`;

export const StyledSuggestedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 2px;

  button {
    text-align: left;
    background: #fff;
    border: 1px solid #DDE1E8;
    border-radius: 8px;
    padding: 10px 14px;
    font-family: inherit;
    font-size: 13.5px;
    font-weight: 500;
    color: #17223B;
    line-height: 1.35;
    cursor: pointer;
    transition: background-color 0.15s, border-color 0.15s;

    &:hover {
      border-color: #B7C0D0;
      background: #FDFDFD;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const StyledMessage = styled.div`
  font-size: 13.5px;
  line-height: 1.5;
  color: #17223B;

  &.user-message {
    align-self: flex-end;
    background: #FF6F3D;
    color: #fff;
    padding: 8px 14px;
    border-radius: 12px 12px 2px 12px;
    max-width: 85%;
    word-break: break-word;
  }

  &.ai-message {
    align-self: flex-start;
    background: #F4F5F7;
    padding: 10px 14px;
    border-radius: 12px 12px 12px 2px;
    max-width: 90%;
    word-break: break-word;

    p {
      margin: 0 0 8px 0;

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      color: #FF6F3D;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    ul, ol {
      margin: 4px 0;
      padding-left: 20px;
    }

    li {
      margin-bottom: 4px;
    }
  }
`;

export const StyledSources = styled.div`
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #E4E7EE;
  font-size: 12px;

  .sources-title {
    font-weight: 600;
    color: #5A6B8C;
    margin-bottom: 4px;
  }

  .source-link {
    display: block;
    color: #FF6F3D;
    text-decoration: none;
    padding: 2px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledTypingIndicator = styled.div`
  display: flex;
  gap: 4px;
  padding: 8px 14px;
  align-self: flex-start;

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #5A6B8C;
    animation: ${pulse} 1.2s infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

export const StyledChatInput = styled.form`
  display: flex;
  gap: 8px;
  padding: 12px 20px 4px;

  input {
    flex: 1;
    border: 1.5px solid #FF6F3D;
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 13.5px;
    font-family: "Sora", "Open Sans", sans-serif;
    color: #17223B;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 111, 61, 0.08);
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
      border-color: #E85A28;
      box-shadow: 0 0 0 3px rgba(255, 111, 61, 0.16);
    }

    &::placeholder {
      color: #8391A8;
    }
  }

  button {
    background: #FF6F3D;
    border: none;
    border-radius: 8px;
    width: 40px;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    &:hover:not(:disabled) {
      background: #E5633A;
    }

    &:disabled {
      background: #E8EEF9;
      cursor: not-allowed;
    }

    svg {
      width: 16px;
      height: 16px;
      fill: #fff;
    }
  }
`;

export const StyledDisclaimer = styled.p`
  margin: 8px 20px 12px;
  font-size: 11.5px;
  font-weight: 400;
  color: #3B6FE0;
  text-align: center;
  line-height: 1.3;
`;
