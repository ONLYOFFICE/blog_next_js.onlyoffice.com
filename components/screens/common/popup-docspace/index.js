import StyledPopupDocSpace from "./styled-popup-docspace";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import Input from "@components/common/input";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import parse from "html-react-parser";

const PopupDocSpace = ({ t, locale, onClose, ...rest }) => {
    const modalRef = useRef(null);  

    const href = `https://www.onlyoffice.com${
        locale === "en" || locale === "el" || locale === "hi" || locale === "ar" || locale === "sr" || locale === "hy" ? "" :
        locale === "zh-hans" ? "/zh" :
        locale === "pt-br" ? "/pt" : 
        `/${locale}`
      }/docspace-registration?utm_source=blog&utm_medium=popup&utm_campaign=docspace_registration_popup`

    const [inputEmailUsed, setInputEmailUsed] = useState(false);
    const { handleSubmit, formState: { errors }, control, getValues, trigger } = useForm();

    const handleButtonClick = async () => {
        const isValid = await trigger("email"); 
        if (isValid) {
            const email = getValues("email");
            localStorage.setItem("email", email);
            window.location.href = `${href}`;
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();  
        handleButtonClick(); 
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <StyledPopupDocSpace $locale={locale}>            
            <div className="modal_wrapper" ref={modalRef}>
                <div className="close_btn" onClick={onClose}></div>
                <div className="modal_content">
                    <div className="modal_img"></div>
                    <div className="modal_text">
                        <Heading className="docspace_block_title" level={3}>
                            {parse(t("Create your"))}
                        </Heading>
                        <Text className="docspace_block_subheader" as="p">
                            {t("View, edit and collaborate on docs, sheets, slides, forms, and PDF files online.")}
                        </Text>
                        <div className="docspace_block_wrapper">
                            <form onSubmit={handleFormSubmit}>
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{
                                        required: { value: true, message: `${t("Email is empty")}` },
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                                            message: `${t("Email is incorrect")}`,
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <>
                                            <Input
                                                className={errors.email ? "error" : ""}
                                                onChange={(e) => {
                                                    onChange(e);
                                                    setInputEmailUsed(false);
                                                }}
                                                onBlur={onBlur}
                                                name="email"
                                                placeholder={`${t("Enter your email*")}`}
                                                value={value}
                                            />
                                            {errors.email && (
                                                <Text className="error-message">
                                                    {errors.email.message}
                                                </Text>
                                            )}
                                        </>
                                    )}
                                />
                                <button
                                    type="submit"
                                    className="docspace_block_btn arrow"
                                    id="blog_docspace_registration"
                                >
                                    {t("Create now")}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </StyledPopupDocSpace>
    );
};

export default PopupDocSpace;
