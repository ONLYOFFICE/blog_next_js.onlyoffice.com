import styled from "styled-components";

const StyledInThePress = styled.div`
  border: 1px solid #EFEFEF;
  border-radius: 5px;
  padding: 24px;
  height: 100%;
  background-color: #F9F9F9;

  .in-the-press-title {
    padding: 0;
    margin: 0 0 24px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #333333;
    text-transform: uppercase;
  }

  .in-the-press-list {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      margin-bottom: 24px;
    }

    a {
      font-size: 14px;
      line-height: 19px;

      span {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-decoration: none;
        color: #333333;
      }

      &:hover {
        span {
          text-decoration: underline;
        }
      }
    }

    .in-the-press-date {
      padding-left: 20px;
      margin-top: 8px;
      font-size: 13px;
      line-height: 21px;
      color: #919192;
      background-image: url("https://static-blog.onlyoffice.com/images/icons/calendar.svg");
      background-repeat: no-repeat;
      background-size: 12px 12px;
      background-position: 0 5px;
    }
  }

  .view-all {
    display: inline-flex;
  }
`;

export default StyledInThePress;
