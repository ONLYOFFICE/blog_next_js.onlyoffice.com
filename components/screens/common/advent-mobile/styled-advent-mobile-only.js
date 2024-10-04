import styled from "styled-components";

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
        margin: 0 24px 0 0;

        &:before {
          content: '';
          display: block;
          z-index: 1000;
          background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/logo/free_mobile_app.svg");
          background-repeat: no-repeat;
          background-size: contain;
          height: 40px;
          width: 40px;
          min-width: 40px;
          margin-right: 16px;

          @media (max-width: 592px) {
            width: 48px;
            height: 48px;
            position: absolute;
            top: -24px;
            margin-right: 0;
          }
        }

        @media (max-width: 592px) {
          padding: 55px 0 25px;
          font-size: 16px;
          line-height: 21px;
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
          text-align: center;

          &:hover {
            background: #FF865C;
            border: 1px solid #FF865C;
          }

          @media (max-width: 592px) {
            padding: 10px 12px;
            margin-right: 0;
            margin-bottom: 8px;
            line-height: 15px;
          }
        }

        .mobile_mess_cross {
          background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/logo/mobile_mess_cross.svg");
          background-repeat: no-repeat;
          width: 24px;
          height: 24px;
          cursor: pointer;

          @media (max-width: 592px) {
            margin-bottom: 16px;
          }
        }

        @media (max-width: 592px) {
          flex-direction: column-reverse;
          align-items: flex-end;
          margin-right: 0;
        }
      }

      @media (max-width: 592px) {
        padding: 0px;
        max-width: 100%;
      }
    }

    @media (max-width: 592px) {
      border-radius: 10px 10px 0 0;
      margin-bottom: 0;
      padding: 0 16px;
    }
  }

  @media (max-width: 800px) {
    width: calc(100% - 64px);
  }

  @media (max-width: 592px) {
    width: 100%;
  }
`

export default StyledAdventMobileOnly;