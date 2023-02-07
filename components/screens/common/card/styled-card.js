import styled from "styled-components";
import calendarIcon from "@public/images/icons/calendar.svg";
import authorIcon from "@public/images/icons/author.svg";

const StyledCard = styled.div`
  border: 1px solid #EFEFEF;
  border-radius: 5px;
  background-color: #FFFFFF;

  &.main-post {
    box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);

    .card-img {
      padding-bottom: 50.382%;
    }

    .card-title {
      min-height: initial;

      a {
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
  }

  .card-title {
    display: inline-flex;
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    min-height: 72px;
    
    a {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #333333;
      text-decoration: none;
    }
  }

  .card-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  .card-info-item {
    padding-left: 20px;
    font-size: 13px;
    line-height: 16px;
    color: #919192;
    background-repeat: no-repeat;
    background-size: 12px 12px;
    background-position: 0 50%;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 20px;
    }

    &.card-date {
      background-image: url(${calendarIcon.src});
    }

    &.card-author {
      background-image: url(${authorIcon.src});
    }
  }

  .card-description {
    font-size: 16px;
    line-height: 26px;

    p {
      margin: 0;
    }
  }
`;

export default StyledCard;
