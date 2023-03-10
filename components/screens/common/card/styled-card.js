import styled from "styled-components";
import { device } from "@components/utils/devices";
import calendarIcon from "@public/images/icons/calendar.svg";
import authorIcon from "@public/images/icons/author.svg";

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
    }

    .card-title {
      min-height: initial;

      .external-link {
        font-weight: 700;
        color: #333;
        font-size: 24px;
        line-height: 32px;
        text-decoration: none;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }

    .card-info {
      margin-top: initial;
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
  }

  .card-body {
    display: flex;
    flex-direction: column;
    padding: 24px 24px 32px;
    height: 100%;
  }

  .card-title {
    display: inline-flex;
    margin-bottom: 14px;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    
    .external-link {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #333333;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
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

    .external-link {
      font-size: 13px;
      line-height: 21px;
      color: #919192;
      text-decoration: none;
    }

    &:not(:last-child) {
      margin-right: 20px;
    }

    &.card-date {
      background-image: url(${calendarIcon.src});
    }

    &.card-author {
      background-image: url(${authorIcon.src});

      &:hover {
        .external-link {
          span {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media ${device.tablet} {
    &.main-post {
      .card-title {
        margin-bottom: 10px;

        a {
          -webkit-line-clamp: 3;
        }
      }

      .card-info {
        &:not(:last-child) {
          margin-bottom: 9px;
        }
      }

      .card-description {
        -webkit-line-clamp: 3;
      }
    }

    .card-body {
      padding: 24px;
    }

    .card-title {
      margin-bottom: 16px;
      min-height: initial;
    }
  }

  @media (max-width: 592px) {
    &.main-post {
      .card-img {
        padding-bottom: 50%;
      }

      .card-title {
        .external-link {
          font-size: 16px;
          line-height: 21px;
        }
      }

      .card-description {
        font-size: 14px;
        line-height: 26px;
      }
    }

    .card-img {
      padding-bottom: 50.28%;
    }

    .card-info-item {
      &:not(:last-child) {
        margin-right: 16px;
      }
    }

    .card-title {
      .external-link {
        font-size: 16px;
        line-height: 21px;
      }
    }

    .card-body {
      padding: 21px 22px 21px;
    }
  }
`;

export default StyledCard;
