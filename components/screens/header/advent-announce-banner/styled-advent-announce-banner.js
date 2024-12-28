import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledAdventAnnounceBanner = styled.div`
  .advent-announce-banner-wrapper {
    &.is-open {
      @media screen and ${device.laptop} {
        transform: ${props => props.locale === "ar" ? "translate3d(-429px, 0, 0)" : "translate3d(429px, 0, 0)"};
        transition: transform 0.2s cubic-bezier(0.16, 0.68, 0.43, 0.99);
      }

      @media screen and ${device.mobile} {
        transform: ${props => props.locale === "ar" ? "translate3d(calc(64px - 100vw), 0, 0)" : "translate3d(calc(100vw - 64px), 0, 0)"};
      }

      @media screen and ${device.mobileM} {
        transform: ${props => props.locale === "ar" ? "translate3d(calc(32px - 100vw), 0, 0)" : "translate3d(calc(100vw - 32px), 0, 0)"};
      }
    }
  }

  &.active {
    ~ header {
      @media screen and ${device.laptop} {
        overflow-x: hidden;
      }
    }
  }

  @media screen and ${device.laptop} {
    overflow-x: hidden;
  }
`;

export default StyledAdventAnnounceBanner;