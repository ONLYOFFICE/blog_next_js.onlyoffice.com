import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledAdventMobileOnly = styled.div`        
    position: fixed;
    max-width: 736px;
    margin: 0 auto;
    left: 50%;
    transform: translate(-50%, 0%);
    bottom: 0;
    z-index: 1000;
    width: 100%;        

        .mobile_mess {
        background: rgba(51, 51, 51, 0.9);
        z-index: 1000;
        box-sizing: border-box;
        border-radius: 5px;
        margin-bottom: 12px;
        display: block;
        padding: 32px;

            .container {
            display: flex;
            justify-content: space-between;
            align-items: center;

                .mobile_mess_text {
                    color: #FFFFFF;
                    font-size: 18px;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    display: flex;
                    align-items: center;
                    margin: 0;

                    &:before {
                        content: '';
                        display: block;
                        z-index: 1000;
                        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/logo/free_mobile_app.svg");
                        background-repeat: no-repeat;
                        background-size: contain;
                        height: 40px;
                        width: 40px;
                        padding-right: 16px;
                    }
                }

                .mobile_mess_buttons {
                    display: flex;
                    align-items: center;

                        .mobile_mess_button {
                            background-color: #FF6F3D;
                            border: 1px solid #FF6F3D;
                            color: #ffffff;
                            text-transform: uppercase;
                            font-size: 13px;
                            font-weight: 600;
                            line-height: 100%;
                            padding: 11px 16px;
                            text-decoration: none;
                            margin-right: 16px;
                            border-radius: 3px;

                            &:hover {
                                background: #FF865C;
                                border: 1px solid #FF865C;
                            }
                        }

                    .mobile_mess_cross {
                        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/logo/mobile_mess_cross.svg");
                        background-repeat: no-repeat;
                        width: 24px;
                        height: 24px;
                    }
                }
            }           
        }
    @media (max-width: 800px){
        width: calc(100% - 64px);
        }
        @media (max-width: 592px){
        width: 100%;
            .mobile_mess{
                border-radius: 10px 0px 0px;
                margin-bottom: 0;
                padding: 12px 16px 16px 16px;
                .container{
                    padding: 0px;
                    max-width: 100%;
                    align-items: flex-end;
                    .mobile_mess_text{
                        font-size: 16px;
                        margin-bottom: 8px;
                        &:before {
                            width: 48px;
                            height: 48px;
                            position: absolute;
                            top: -24px;
                        }
                    }
                    .mobile_mess_buttons{
                        flex-direction: column-reverse;
                        align-items: flex-end !important;
                        margin-right: 0;
                        .mobile_mess_button{
                            margin-right: 0 !important;
                        }
                        .mobile_mess_cross{
                            margin-bottom: 10px;
                        }
                    }
                }
                
            }
        }    
`

export default StyledAdventMobileOnly;