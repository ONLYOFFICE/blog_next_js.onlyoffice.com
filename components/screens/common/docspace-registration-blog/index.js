import StyledDocSpaceBlock from "./styled-docspace-registration-block.js";
import { useRef } from "react";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import Input from "@components/common/input/index.js";
import { useForm, Controller } from "react-hook-form";
import parse from "html-react-parser";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const DocSpaceRegistrationBlock = ({ t, locale, ...rest }) => {
    const href = `${process.env.NEXT_PUBLIC_SITE_URL}${
        locale === "en" || locale === "el" || locale === "hi" || locale === "ar" || locale === "sr" || locale === "hy" ? "" :
        locale === "zh-hans" ? "/zh" :
        locale === "pt-br" ? "/pt" :
        `/${locale}`
      }/signup?utm_source=blog&utm_medium=banner&utm_campaign=docspace_registration_banner`
  const linkRef = useRef(null);
  const { formState: { errors }, control, getValues, trigger } = useForm();

  const handleLinkClick = (e) => {
    const email = getValues("email") || "";

    if (!emailPattern.test(email)) {
      e.preventDefault();
      trigger("email");
      return;
    }

    localStorage.setItem("email", email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    linkRef.current?.click();
  };

  return (
    <StyledDocSpaceBlock className={locale} $locale={locale} {...rest}>
      <div className="docspace_block_icons">
        <div className="docspace_block_icon doc"></div>
        <div className="docspace_block_icon spreadsheet"></div>
        <div className="docspace_block_icon presentation"></div>
        <div className="docspace_block_icon pdf_form"></div>
        <div className="docspace_block_icon pdf"></div>
      </div>
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
                value: emailPattern,
                message: `${t("Email is incorrect")}`,
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Input
                  className={errors.email ? "error" : ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  name="email"
                  autoComplete="email"
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
          <a
            ref={linkRef}
            href={href}
            onClick={handleLinkClick}
            className="docspace_block_btn arrow"
            id="blog_docspace_registration"
          >
            {t("Create now")}
          </a>
        </form>
      </div>
    </StyledDocSpaceBlock>
  );
};

export default DocSpaceRegistrationBlock;
