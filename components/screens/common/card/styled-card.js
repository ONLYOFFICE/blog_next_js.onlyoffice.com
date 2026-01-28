import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #EFEFEF;
  border-radius: 5px;
  overflow: hidden;
  background-color: #FFFFFF;
  transition: box-shadow 0.3s;

  &:not(.main-post) {
    &:hover {
      box-shadow: 0px 7px 25px rgb(85 85 85 / 15%);
    }
  }

  &.main-post {
    box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
    border: none;

    .card-img {
      padding-bottom: 50.273%;

      @media screen and ${device.mobile} {
        padding-bottom: 50%;
      }
    }

    .card-title {
      min-height: initial;

      .internal-link {
        font-weight: 700;
        color: #333;
        font-size: 24px;
        line-height: 32px;
        text-decoration: none;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        @media screen and ${device.tablet} {
          -webkit-line-clamp: 3;
        }

        @media screen and ${device.mobile} {
          font-size: 16px;
          line-height: 21px;
        }
      }

      @media screen and ${device.tablet} {
        margin-bottom: 10px;
      }
    }

    .card-info {
      margin-top: initial;

      &:not(:last-child) {
        @media screen and ${device.tablet} {
          margin-bottom: 9px;
        }
      }
    }

    .card-description {
      font-size: 16px;
      line-height: 26px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
  
      p {
        margin: 0;
      }

      @media screen and ${device.tablet} {
        -webkit-line-clamp: 3;
      }

      @media screen and ${device.mobile} {
        font-size: 14px;
        line-height: 26px;
      }
    }
  }

  .card-img {
    position: relative;
    display: block;
    padding-bottom: 50.8%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media screen and ${device.mobile} {
      padding-bottom: 50.28%;
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    padding: 24px 24px 32px;
    height: 100%;

    @media screen and ${device.tablet} {
      padding: 24px;
    }

    @media screen and ${device.mobile} {
      padding: 21px 22px 21px;
    }
  }

  .card-title {
    display: inline-flex;
    margin-bottom: 14px;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    
    .internal-link {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #333333;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      &:hover,
      &:focus {
        text-decoration: underline;
      }

      @media screen and ${device.mobile} {
        font-size: 16px;
        line-height: 21px;
      }
    }

    @media screen and ${device.tablet} {
      margin-bottom: 16px;
      min-height: initial;
    }
  }

  .card-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: auto;

    &:not(:last-child) {
      margin-bottom: 13px;
    }
  }

  .card-info-item {
    display: inline-flex;
    padding-left: 20px;
    font-size: 13px;
    line-height: 21px;
    color: #919192;
    background-repeat: no-repeat;
    background-size: 12px 12px;
    background-position: 0 50%;

    .internal-link {
      font-size: 13px;
      line-height: 21px;
      color: #919192;
    }

    &:not(:last-child) {
      ${props => props.$locale === "ar" ? "margin-left: 20px;" : "margin-right: 20px;"}

      @media screen and ${device.mobile} {
        ${props => props.$locale === "ar" ? "margin-left: 16px;" : "margin-right: 16px;"}
      }
    }

    &.card-date {
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/calendar.svg");
    }

    &.card-author {
      display: initial;
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/author.svg");

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default StyledCard;
