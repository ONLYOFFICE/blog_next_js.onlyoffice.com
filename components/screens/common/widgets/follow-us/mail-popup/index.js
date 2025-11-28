import StyledMailPopup from "./styled-mail-popup";
import { useState } from "react";

const MailPopup = ({ t, locale, popupIsOpen, setPopupIsOpen }) => {
  const [formComplete, setFormComplete] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validFirstName, setValidFirstName] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState(t("Email is empty"));
  const [isLoading, setIsLoading] = useState(false);

  const localeNormalizeMap = {
    "el": "",
    "hi": "",
    "ar": "",
    "hy": "",
    "zh-hans": "zh",
    "pt-br": "pt",
  };

  const normalizeLocale = (loc) => localeNormalizeMap[loc] || loc;

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const nameIsValid = (name) => {
    return name.length > 0;
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    setValidEmail(emailIsValid(e.target.value));
  };

  const handleNameInput = (e) => {
    const name = e.target.value;
    setFirstName(name);
    setValidFirstName(nameIsValid(name));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setEmailError(!validEmail);
    setFirstNameError(!validFirstName);

    if (!firstName) {
      setFirstNameError(true);
    };

    if (!email) {
      setEmailError(true);
    };

    setEmailErrorText(email.length === 0 ? t("Email is empty") : t("Email is incorrect"));

    if (validFirstName && validEmail) {
      setIsLoading(true);

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_MAIN_SITE_BASE_DOMAIN}/api/sendsubscription`, {
          method: "POST",
          body: JSON.stringify({
            firstName: firstName,
            email: email,
            type: "Common",
            locale: normalizeLocale(locale)
          })
        });
        
        if (response.status === 200) {
          setFormComplete(true);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Subscription failed", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCloseForm = () => {
    if (formComplete === true) {
      setFormComplete(false);
    };

    setValidEmail(false);
    setValidFirstName(false);
    setPopupIsOpen(false); 
    setEmail("");
    setFirstName("");
    setEmailError(false);
    setFirstNameError(false);
  };

  return (
    <StyledMailPopup onClick={() => handleCloseForm()} className={`mail-popup ${popupIsOpen ? "show" : ""}`}>
      <div className="mail-popup-container">
        <div className="mail-popup-wrapper">
          <div onClick={(e) => e.stopPropagation()} className="mail-popup-body">
            <div className="mail-popup-header">
              <div className={`mail-popup-title ${locale}`}>{t("Don't Miss an Update!")}</div>
              <button onClick={() => handleCloseForm()} className="mail-popup-close-btn"></button>
            </div>
            {formComplete ? (
              <div className="mail-popup-success">
                <div className="mail-popup-success-text">{t("We sent an email message with confirmation to your email address.")}</div>
                <button onClick={() => handleCloseForm()} className="mail-popup-success-btn">{t("OK")}</button>
              </div>
            ) : (
              <div className="mail-popup-form">
                <div className="mail-popup-text">{t("Get the latest ONLYOFFICE news delivered to your inbox")}</div>
                <form onSubmit={handleFormSubmit} className="mail-popup-inputs">
                  <div className="mail-popup-input-wrapper">
                    <input onChange={handleNameInput} className={`mail-popup-input ${firstNameError ? "error" : ""}`} value={firstName} name="firstName" placeholder={t("First name")} />
                    {firstNameError && (
                      <div className="mail-popup-error-text">{t("First name is empty")}</div>
                    )}
                  </div>
                  <div className="mail-popup-input-wrapper">
                    <input onChange={handleEmailInput} className={`mail-popup-input ${emailError ? "error" : ""}`} value={email} name="email" placeholder={t("Your email")} />
                    {emailError && (
                      <div className="mail-popup-error-text">{emailErrorText}</div>
                    )}
                  </div>
                  <button className={`mail-popup-btn ${isLoading ? "loading" : ""}`} disabled={isLoading}>{t("Subscribe")}</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledMailPopup>
  );
};

export default MailPopup;