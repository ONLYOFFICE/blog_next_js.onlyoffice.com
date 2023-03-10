import StyledPopup from "./styled-popup";

const Popup = ({ t, popupActive, setPopupActive, children, ...rest }) => {
  return (
    <StyledPopup className={`${popupActive ? "is-open" : ""}`} onClick={() => setPopupActive(!popupActive)} {...rest}>
      <div onClick={(e) => e.stopPropagation()} className="content">
        <span onClick={() => setPopupActive(!popupActive)} className="close-icon"></span>
        {children}
      </div>
    </StyledPopup>
  );
};

export default Popup;
