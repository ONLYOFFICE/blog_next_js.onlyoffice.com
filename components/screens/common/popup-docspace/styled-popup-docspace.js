import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledPopupDocSpace = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(119, 119, 119, 0.5);  
  z-index: 1001;
  transition: opacity 0.3s, visibility 0.3s;
  
  .modal_wrapper {
    box-sizing: border-box;
    max-width: 1120px;
    width: 100%;
    padding: 56px 91px;
    background: #FFFFFF;
    position: relative;

    .close_btn {
      position: absolute;
      width: 16px;
      height: 16px;
      background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/docspace-block/close.svg");
      top: 16px;
      right: 15px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    .modal_content {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 32px;
      align-items: center;

      .modal_text {
        width: 100%;
      }

      .modal_img {
        width: 324px;
        height: 180px;
        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/docspace-block/popup_picture_1.gif");
        background-size: cover;

        @media screen and ${device.laptop} {
          width: 162px;
          height: 90px;
        }

        @media screen and ${device.mobile} {
          width: 162px;
          height: 90px;
        }
      }

      .docspace_block_title {
        margin-top: 32px;

        span {
          color: #FF6F3D;
          font-weight: 700;
        }

        @media screen and ${device.laptop} {
          text-align: center;
          margin-top: 0;
        }

        @media screen and ${device.mobile} {
          margin-top: 0;
        }
      }

      .docspace_block_subheader {
        margin-top: 16px;

        @media screen and ${device.laptop} {
          margin-top: 8px;
          text-align: center;
        }

        @media screen and ${device.mobile} {
          margin-top: 8px;
        }
      }

      .docspace_block_wrapper {
        margin-top: 32px;

        form {
          display: flex;
          position: relative;

          input {
            box-sizing: border-box;
            height: 56px;
            border: 1px solid #aaaaaa;
            border-image: initial;
            border-radius: ${props => props.locale === "ar" ? "0 3px 3px 0" : "3px 0 0 3px"};
            ${props => props.locale === "ar" ? "border-left: none;" : "border-right: none;"}
            padding: 16px;
            font-size: 14px;
            line-height: 280%;
            color: rgb(51, 51, 51);

            @media screen and ${device.mobile} {
              height: 48px;
            }
          }

          .error-message {            
            position: absolute;
            top: 60px;
            ${props => props.locale === "ar" ? "right: 0;" : "left: 0;"}
            color: #ff0c3e;
            font-size: 12px;
            line-height: 19px;

            @media screen and ${device.mobile} {
              top: 48px;
              font-size: 10px;
            }
          }

          .docspace_block_btn {
            background: #FF6F3D;
            color: #FFFFFF;
            min-width: 140px;
            border-radius: ${props => props.locale === "ar" ? "3px 0 0 3px" : "0 3px 3px 0"};
            font-size: 13px;
            font-weight: 600;
            line-height: 17.29px;
            text-align: center;
            border: none;
            text-transform: uppercase;

            &:hover {
              cursor: pointer;
              background-color: #ff865c;
              color: #ffffff;
              opacity: 1;
            }

            @media screen and ${device.laptopM} {
              padding: 0;
            }

            @media screen and ${device.laptop} {
              border-radius: ${props => props.locale === "ar" && "0 3px 3px 0"};
              transform: ${props => props.locale === "ar" && "rotate(180deg)"};
            }

            @media screen and ${device.mobile} {
              &.arrow {
                width: 48px;
                min-width: 48px;
                height: 48px;
                position: relative;
                padding: 0;
                font-size: 0;

                &:before {
                  content: "";
                  position: absolute;
                  width: 24px;
                  height: 24px;
                  background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/docspace-block/arrow.svg");
                  top: 12px;
                  left: 12px;
                }
              }
            }
          }
        }
      }

      @media screen and ${device.laptop} {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        justify-items: center;
        gap: 24px;
      }

      @media screen and ${device.mobile} {
        gap: 24px;
      }
    }

    @media screen and ${device.laptopM} {
      max-width: calc(100% - 40px);
      padding: 56px 26px;
    }

    @media screen and ${device.laptop} {
      max-width: calc(100% - 40px);
      padding: 32px 53px;
    }

    @media screen and ${device.mobile} {
      max-width: calc(100% - 40px);
      padding: 24px 24px;
    }
  }
`;

export default StyledPopupDocSpace;
