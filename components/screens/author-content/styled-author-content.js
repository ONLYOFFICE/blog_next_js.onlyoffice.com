import styled from "styled-components";
import { device } from "@components/utils/devices";
import Section from "@components/common/section";

const StyledAuthorContent = styled(Section)`
  padding: 88px 0 80px;
  background-color: #F9F9F9;

  .author-title {
    margin-bottom: 80px;
    font-size: 48px;
    line-height: 64px;
    letter-spacing: -0.03em;

    @media screen and ${device.laptop} {
      margin-bottom: 72px;
    }

    @media screen and (max-width: 896px) {
      font-size: 44px;
      line-height: 59px;
      letter-spacing: -0.02em;
    }

    @media screen and (max-width: 592px) {
      margin-bottom: 24px;
      font-size: 28px;
      line-height: 37px;
      letter-spacing: -0.02em;
    }
  }

  .author-wrapper {
    display: flex;
    align-items: start;

    @media screen and (max-width: 896px) {
      flex-direction: column;
    }
  }

  .author-inner {
    width: 100%;
  }

  .author-card {
    box-sizing: border-box;
    border: 1px solid #E2E2E2;
    border-radius: 8px;
    padding: 64px;
    margin-right: 56px;
    width: 100%;
    max-width: 328px;
    background-color: #FFFFFF;
    text-align: center;

    @media screen and ${device.laptop} {
      padding: 64px 44px;
      max-width: 288px;
    }

    @media screen and (max-width: 896px) {
      display: flex;
      padding: 48px;
      margin-bottom: 64px;
      margin-right: 0;
      max-width: 100%;
      text-align: initial;
    }

    @media screen and (max-width: 592px) {
      padding: 24px 16px;
      margin-bottom: 40px;
    }
  }

  .author-avatar {
    display: flex;
    margin-bottom: 32px;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;

    img {
      object-fit: cover;
    }

    @media screen and (max-width: 896px) {
      margin-bottom: 0;
      margin-right: 32px;
      width: 160px;
      height: 160px;
    }

    @media screen and (max-width: 592px) {
      width: 112px;
      height: 112px;
    }
  }

  .author-name {
    margin-bottom: 8px;
    letter-spacing: -0.02em;
    color: #444444;
    text-align: center;

    @media screen and (max-width: 896px) {
      text-align: initial;
    }

    @media screen and (max-width: 592px) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  .author-role {
    font-size: 16px;
    line-height: 24px;
    color: #AAAAAA;

    &:not(:last-child) {
      margin-bottom: 32px;

      @media screen and (max-width: 592px) {
        margin-bottom: 16px;
      }
    }

    @media screen and (max-width: 592px) {
      font-size: 13px;
      line-height: 20px;
    }
  }

  .author-social-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      display: inline-flex;

      &:not(:last-child) {
        margin-right: 16px;
      }
    }

    a {
      display: inline-flex;

      div {
        display: inline-flex;
      }

      svg {
        path {
          fill: #AAAAAA;
        }
      }

      &.author-social-facebook {
        &:hover {
          svg {
            path {
              fill: #41479B;
            }
          }
        }
      }

      &.author-social-twitter {
        &:hover {
          svg {
            path {
              fill: #000000;
            }
          }
        }
      }
    }

    @media screen and (max-width: 896px) {
      justify-content: initial;
    }
  }

  .author-info {
    margin-bottom: 112px;

    @media screen and ${device.tablet} {
      margin-bottom: 64px;
    }

    @media screen and (max-width: 592px) {
      margin-bottom: 40px;
    }
  }

  .author-info-title {
    border-bottom: 1px solid #E2E2E2;
    padding-bottom: 31px;
    margin-bottom: 32px;
    letter-spacing: -0.02em;

    @media screen and ${device.tablet} {
      font-size: 22px;
      line-height: 29px;
      letter-spacing: -0.01em;
    }

    @media screen and (max-width: 592px) {
      padding-bottom: 15px;
      margin-bottom: 16px;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.02em;
    }
  }

  .author-info-text {
    font-size: 16px;
    line-height: 24px;

    @media screen and (max-width: 592px) {
      font-size: 13px;
      line-height: 20px;
    }
  }
  
  .author-posts-title {
    border-bottom: 1px solid #E2E2E2;
    padding-bottom: 31px;
    margin-bottom: 32px;
    letter-spacing: -0.02em;

    @media screen and ${device.tablet} {
      font-size: 22px;
      line-height: 29px;
      letter-spacing: -0.01em;
    }

    @media screen and (max-width: 592px) {
      padding-bottom: 15px;
      margin-bottom: 16px;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.02em;
    }
  }

  .author-posts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    @media screen and (max-width: 592px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
    }
  }

  .load-more-posts {
    grid-column: span 2;
    justify-self: initial;

    @media screen and (max-width: 592px) {
      grid-column: span 1;
    }
  }

  @media screen and ${device.laptop} {
    padding: 72px 0 88px;
  }

  @media screen and (max-width: 592px) {
    padding: 48px 0;
  }
`;

export default StyledAuthorContent;
