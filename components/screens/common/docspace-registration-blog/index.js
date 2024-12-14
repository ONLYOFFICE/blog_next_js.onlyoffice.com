import StyledDocSpaceBlock from "./styled-docspace-registration-block.js";
import { useState } from "react";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";
import Text from "@components/common/text";
import Input from "@components/common/input/index.js";
import { useForm, Controller } from "react-hook-form";

const DocSpaceRegistrationBlock = ({ t, locale, ...rest }) => {
    const href = `https://www.onlyoffice.com${
        locale === "en" || locale === "el" || locale === "hi" || locale === "ar" || locale === "sr" || locale === "hy" ? "" :
        locale === "zh-hans" ? "/zh" :
        locale === "pt-br" ? "/pt" : 
        `/${locale}`
      }/docspace-registration.aspx?utm_source=blog&utm_medium=banner&utm_campaign=docspace_registration_banner`
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

  return (
    <StyledDocSpaceBlock className={locale} locale={locale} {...rest}>
      <div className="docspace_block_icons">
        <div className="docspace_block_icon doc"></div>
        <div className="docspace_block_icon spreadsheet"></div>
        <div className="docspace_block_icon presentation"></div>
        <div className="docspace_block_icon pdf_form"></div>
        <div className="docspace_block_icon pdf"></div>
      </div>
      <Heading className="docspace_block_title" level={3}>
        <div dangerouslySetInnerHTML={{ __html: t("Create your")}}></div>
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
    </StyledDocSpaceBlock>
  );
};

export default DocSpaceRegistrationBlock;
