import styled from "styled-components";
import { device } from "../../utils/devices";

const StyledFooter = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 206px 254px 256px 1fr;
  grid-column-gap: 32px;
  padding: 56px 32px 60px;
  margin: 0 auto;
  height: auto;
  max-width: 1120px;

  &.fr {
    grid-template-columns: 206px 256px 248px 1fr;
  }

  &.pt-br {
    grid-template-columns: 206px 253px 253px 1fr;
  }

  &.ja {
    grid-template-columns: 206px 248px 245px 1fr;
  }

  .footer-item-group {
    position: relative;

    &.last {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      grid-column: span 4;
      border-top: 1px solid #e2e2e2;
      margin-top: 24px;
      padding-top: 40px;

      .footer-item-heading {
        line-height: 16px;
        padding: 0 0 16px;
      }
    }
  }

  .footer-link-contact {
    font-size: 13px;
    line-height: 18px;
  }

  .contact-text {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 13px;
    line-height: 18px;
    color: #444444;
  }

  .footer-copyright-block {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    line-height: 26px;
    color: #444444;
    text-align: right;
  }

  .footer-copyright {
    color: #aaaaaa;
    font-size: 13px;
    line-height: 1.4em;
  }

  .footer-item-follow {
    padding-bottom: 0;
  }

  @media ${device.laptopM} {
    grid-template-columns: .65fr .79fr .79fr 1fr;
  }

  @media ${device.laptop} {
    width: auto;
    max-width: 736px;
    vertical-align: top;
    min-width: unset;
    padding: 56px 0 64px;
    justify-content: center;
    grid-template-columns: .6fr .6fr 1fr;
    grid-template-areas:
        "PerformConvert SupportResources ComparisonContactUs"
        "Solutions SupportResources ComparisonContactUs";

    .footer-item-group {
      &:first-child {
        grid-area: Solutions;
      }
  
      &:nth-child(2) {
        grid-area: PerformConvert;
      }
  
      &:nth-child(3) {
        grid-area: SupportResources;
      }
  
      &:nth-child(4) {
        grid-area: ComparisonContactUs;
      }
    }
    
    .footer-item-group.last {
      grid-column: span 3;
      grid-template-columns: initial;
      margin-top: 0;

      .footer-item-follow {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .footer-items-group {
        width: 100%;
      }

      .social-link-links {
        justify-content: center;
      }

      .footer-copyright-block {
        display: block;
        margin: 40px 0 0;
        text-align: center;

        span {
          &:first-child {
            margin-right: 3px;
          }
        }
      }
    }

    .social-links {
      justify-content: center;
    }
  }

  @media ${device.tablet} {
    display: block;
    max-width: 100%;
    padding: 8px 32px 64px;
    margin: 0px;
    grid-template-columns: 1fr;
  
    .footer-item-group.last {
      display: block;
      grid-column: initial;
      padding-top: 40px;
      gap: initial;
    }
  
    .footer-item-follow {
      padding: 32px 0;
      border: none;
  
      .social-link-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
        margin: 0 auto;
        max-width: 100%;
  
        .social-link {
          padding-right: 0px;
          width: 40px;
          height: 40px;
          border: initial;
          border-radius: 50%;
  
          > div {
            border-radius: 50%;
            width: 24px;
            height: 24px;
          }
        }
      }
  
      .footer-copyright {
        padding: 10px 0px 50px 0px;
      }
  
      .footer-items-group {
        max-height: 100% !important;
      }
  
      .footer-item-heading-arrow {
        display: none;
      }
  
      .footer-item-heading {
        display: none;
      }
    }
  
    .contact-text,
    .footer-link-contact {
      font-size: 12px;
      line-height: 20px;
    }
  
    .footer-copyright-block {
      display: flex;
      justify-content: center;
      margin: 0 0 8px;
      line-height: 18px;
      color: #AAAAAA;
    }
  
    .footer-copyright {
      font-size: 13px;
      line-height: 26px;
    }

    .footer-item-group.last {
      border-top: 0px;
    }

    .popup-qr-code.line-qr-code {
      left: -36px;
    }

    .popup-qr-code.wechat-qr-code {
      left: -46px;
    }
  }

  @media (max-width: 592px) {
    padding: 8px 16px 64px;

    .footer-item-group.last {
      padding: 0;

      .footer-item-follow {
        padding: 56px 0 0;
      }

      .social-link-links {
        gap: 24px;
      }

      .footer-copyright-block {
        margin-top: 32px;
        text-align: center;
  
        span {
          display: block;
          font-size: 12px;
          line-height: 26px;
          color: #444;

          &:first-child {
            margin-right: 0;
          }
        }
      }
    }

    .social-links {
      gap: 24px;
    }

    .popup-qr-code.line-qr-code,
    .popup-qr-code.wechat-qr-code {
      left: initial;
    }
  }
`;

export default StyledFooter;
