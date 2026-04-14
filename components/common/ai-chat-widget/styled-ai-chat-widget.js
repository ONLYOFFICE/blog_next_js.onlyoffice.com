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
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #FF6F3D;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: background-color 0.2s, transform 0.2s;
  z-index: 9999;

  &:hover {
    background-color: #E5633A;
    transform: scale(1.05);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;

export const StyledChatWindow = styled.div`
  position: fixed;
  bottom: 92px;
  right: 24px;
  width: 400px;
  max-height: 520px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  z-index: 9999;
  animation: ${fadeIn} 0.2s ease-out;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 480px) {
    width: calc(100vw - 16px);
    right: 8px;
    bottom: 84px;
    max-height: calc(100vh - 120px);
  }
`;

export const StyledChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #E2E2E2;
  border-radius: 12px 12px 0 0;
  background: #F9F9F9;

  .chat-header-title {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }

  .chat-header-close {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    color: #808080;
    transition: color 0.2s;

    &:hover {
      color: #333;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const StyledChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 200px;
  max-height: 340px;
`;

export const StyledMessage = styled.div`
  font-size: 13px;
  line-height: 1.5;
  color: #333;

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
    background: #F5F5F5;
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
  border-top: 1px solid #E2E2E2;
  font-size: 12px;

  .sources-title {
    font-weight: 600;
    color: #808080;
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
    background: #808080;
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
  padding: 12px 20px;
  border-top: 1px solid #E2E2E2;

  input {
    flex: 1;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 13px;
    font-family: "Open Sans", sans-serif;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: #FF6F3D;
    }

    &::placeholder {
      color: #AAAAAA;
    }
  }

  button {
    background: #FF6F3D;
    border: none;
    border-radius: 8px;
    padding: 8px 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background-color 0.2s;

    &:hover:not(:disabled) {
      background: #E5633A;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    svg {
      width: 18px;
      height: 18px;
      fill: #fff;
    }
  }
`;
