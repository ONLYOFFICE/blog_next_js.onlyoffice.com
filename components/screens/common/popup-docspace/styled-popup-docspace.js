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
  
  .modal_wrapper{
    box-sizing: border-box;
    max-width: 1120px;
    width: 100%;
    padding: 56px 91px;
    background: #FFFFFF;
    position: relative;
    .close_btn{
    position: absolute;
    width: 16px;
    height: 16px;
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/docspace-block/close.svg");
    top: 16px;
    right: 15px;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
  }

    .modal_content{
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 32px;
        align-items: center;
        .modal_img{
            width: 324px;
            height: 180px;
            background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/docspace-block/popup_picture_1.gif");
            background-size: cover;
        }
        .docspace_block_title{
            margin-top: 32px;
            text-align: left;
            span {
            color: #FF6F3D;
            font-weight: 700;
            }
            }
            .docspace_block_subheader {
            margin-top: 16px;
            text-align: center;
            }
            .docspace_block_wrapper {
            margin-top: 32px;
            form{
                display: flex;
                position: relative;
                input{
                box-sizing: border-box;
                height: 56px;
                border-top: 1px solid rgb(170, 170, 170);
                border-bottom: 1px solid rgb(170, 170, 170);
                border-left: 1px solid rgb(170, 170, 170);
                border-image: initial;
                border-top-left-radius: 3px;
                border-bottom-left-radius: 3px;
                border-right: none;
                border-bottom-right-radius: initial;
                border-top-right-radius: initial;
                padding: 16px;
                font-size: 14px;
                line-height: 280%;
                color: rgb(51, 51, 51);
                
                }
                .error-message{            
                    position: absolute;
                    top: 60px;
                    left: 0;
                    color: #ff0c3e;
                    font-size: 12px;
                    line-height: 19px;
                }

                .docspace_block_btn{
                background: #FF6F3D;
                color: #FFFFFF;
                width: 140px;
                border-radius: 0px 3px 3px 0px;
                font-size: 13px;
                font-weight: 600;
                line-height: 17.29px;
                text-align: center;
                border: none;
                :hover {
                    cursor: pointer;
                    background-color: #ff865c;
                    color: #ffffff;
                    opacity: 1;
                }
                }
            }
        }
    }
  }
  @media ${device.laptopM}{
        .modal_wrapper{
            max-width: calc(100% - 40px);
            padding: 56px 26px !important;
            .docspace_block_btn{
                padding: 0 !important;
            }
        }
    }
    @media ${device.laptop}{
        .modal_wrapper{
            max-width: calc(100% - 40px);
            padding: 32px 53px !important;
            .modal_content{
                grid-template-columns: 1fr;
                grid-template-rows: auto 1fr;
                justify-items: center;
                gap: 24px;
                .modal_img{
                    width: 162px;
                    height: 90px;
                }
                .docspace_block_title{
                    text-align: center;
                    margin-top: 0;
                }
                .docspace_block_subheader{
                    margin-top: 8px;
                }
            }
        }
    }
    @media ${device.mobile}{
        .modal_wrapper{
            max-width: calc(100% - 40px);
            padding: 24px 24px !important;
            .modal_content{
                gap: 24px;
                .modal_img{
                    width: 162px;
                    height: 90px;
                }
                .docspace_block_title{
                    margin-top: 0;
                }
                .docspace_block_subheader{
                    margin-top: 8px;
                }
                input {
                    height: 48px !important;
                }
                .docspace_block_btn{
                    &.arrow{
                    width: 48px !important;
                    height: 48px !important;
                    text-indent: -9999px;
                    position: relative;
                    padding: 0;
                    &:before{
                        content: "";
                        position: absolute;
                        width: 24px !important;
                        height: 24px !important;
                        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/docspace-block/arrow.svg");
                        top:12px;
                        left:12px;
                    }
        
                }
            }
        }
    }
    
  
`;

export default StyledPopupDocSpace;
