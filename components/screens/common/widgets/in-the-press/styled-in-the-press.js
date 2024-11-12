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
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: #333333;

      &:hover {
        text-decoration: underline;
      }
    }

    .in-the-press-date {
      ${props => props.locale === "ar" ? "padding-right: 20px;" : "padding-left: 20px;"}
      margin-top: 8px;
      font-size: 13px;
      line-height: 21px;
      color: #919192;
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/calendar.svg");
      background-repeat: no-repeat;
      background-size: 12px 12px;
      background-position: ${props => props.locale === "ar" ? "right" : "0 5px"};
    }
  }

  .view-all {
    display: inline-flex;
  }
`;

export default StyledInThePress;
