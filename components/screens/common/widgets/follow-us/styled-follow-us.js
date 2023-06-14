import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledFollowUs = styled.div`
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 23px;
  background-color: #f9f9f9;

  h4 {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
  }

  .social-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, 30px);
    gap: 24px;

    &.zh-hans {
      gap: 24px;
    }

    &.ja,
    &.zh-hans {
      @media (max-width: 600px) {
        column-gap: 24px;
      }
    }

    .social-link {
      width: 24px;
      height: 24px;
      filter: grayscale(0);
      border-radius: initial;

      &.subscribe-mail {
        background-position-x: -434px;
      }
  
      &.facebook {
        background-position-x: 0;
      }
  
      &.twitter {
        background-position-x: -40px;
      }
  
      &.linkedin {
        background-position-x: -80px;
      }
  
      &.youtube {
        background-position-x: -120px;
      }
  
      &.blog {
        background-position-x: -200px;
      }
  
      &.medium {
        background-position-x: -240px;
      }
  
      &.instagram {
        background-position-x: -280px;
      }
  
      &.github {
        background-position-x: -320px;
      }
  
      &.fosstodon {
        background-position-x: -397px;
      }
  
      &.kuaishou {
        background-position-x: -554px;
      }
  
      &.xiaohongshu {
        background-position-x: -594px;
      }
  
      &.csdn {
        background-position-x: -674px;
      }
  
      &.toutiao {
        background-position-x: -634px;
      }

      &.bilibili {
        background-position-x: -714px;
      }
    }

    .wdgt-wechat,
    .wdgt-line {
      width: 24px;
      height: 24px;
      min-width: 24px;
      filter: grayscale(0);
    }
  }

  @media ${device.laptop} {
    h4 {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.01em;
    }
  }

  @media ${device.tablet} {
    .social-links {
      grid-template-columns: repeat(auto-fit, 28px);
    }
  }
`;

export default StyledFollowUs;
