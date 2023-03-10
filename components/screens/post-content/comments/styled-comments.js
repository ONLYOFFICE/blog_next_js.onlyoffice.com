import styled from "styled-components";

const StyledComments = styled.div`
  max-width: 736px;
  padding-top: 119px;
  margin: -5px auto 0;
  font-size: 12px;

  .comments-title {
    font-size: 18px;
    line-height: 23px;
    text-transform: uppercase;
  }

  .comments-wrapper {
    padding: 0;
    margin: 0 0 34px;
    list-style-type: none;

    .comment-parent {
      margin-left: 57px;
    }
  }

  .comment-wrap {
    padding-top: 24px;
  }

  .comment-author {
    display: flex;

    img {
      margin-right: 17px;
    }
  }

  .comment-author-header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .comment-author-title {
    font-size: 14px;
    line-height: 160%;
    color: #3d4a6b;
  }

  .sep {
    font-weight: 700;
    font-size: 11px;
    color: #999999;
    padding: 0 3px;
    margin: 0 3px;
  }

  .comment-reply-link {
    color: #999999;
    font-size: 11px;
    font-weight: 700;
    text-decoration: none;
  }

  .comment-date {
    margin-top: 4px;
    font-size: 11px;
    line-height: 160%;
    color: #999999;
  }

  .comment-body {
    margin-left: 57px;

    p {
      margin: 0;
      font-size: 13px;
      color: #333333;
      line-height: 21px;
    }

    a {
      color: #FF6F3D;
    }
  }

  .respond-title {
    margin-bottom: 32px;
    text-shadow: 0 1px 0 #fff;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 24px;
    color: #333;
  }

  #commentform {
    display: grid;
    justify-items: start;
    gap: 21px;
  }

  .recaptcha-wrapper {
    .error-text {
      font-size: 11px;
      color: #cb0000;
    }
  }

  .comments-button {
    margin-top: 3px;
    padding: 18px 20px;
    font-size: 13px;
    font-weight: 600;
  }
`;

export default StyledComments;
