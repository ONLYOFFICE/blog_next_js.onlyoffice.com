import StyledPopupDocSpace from "./styled-popup-docspace";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import Input from "@components/common/input";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

const PopupDocSpace = ({ t, locale, onClose, ...rest }) => {

    const href = `https://www.onlyoffice.com${
        locale === "en" || locale === "el" || locale === "hi" || locale === "ar" || locale === "sr" || locale === "hy" ? "" :
        locale === "zh-hans" ? "/zh" :
        locale === "pt-br" ? "/pt" : 
        `/${locale}`
      }/docspace-registration.aspx?utm_source=blog&utm_medium=popup&utm_campaign=docspace_registration_popup`

    const [inputEmailUsed, setInputEmailUsed] = useState(false);
    const { handleSubmit, formState: { errors }, control, getValues, trigger } = useForm();

    const handleButtonClick = async () => {
        const isValid = await trigger("email"); // Проверяем валидность email

        if (isValid) {
        const email = getValues("email");
        localStorage.setItem('email', email);
        window.location.href = `${href}`;
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();  // Отменяем стандартное поведение формы
        handleButtonClick(); // Вызываем логику обработки клика
    };
    return (
        <StyledPopupDocSpace>            
            <div className="modal_wrapper">
            <div className="close_btn" onClick={onClose}></div>
                <div className="modal_content">
                    <div className="modal_img"></div>
                    <div className="madal_text">
                    <Heading className="docspace_block_title" level={3}  dangerouslySetInnerHTML={{ __html: t("Create your")}}></Heading>
                        <Text className="docspace_block_subheader">
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
                                type="submit" // Заменяем на кнопку
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
