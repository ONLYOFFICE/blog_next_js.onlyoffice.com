import StyledNewsletter from "./styled-newsletter";
import StyledNewsletterConfirm from "./styled-newsletter-confirm";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Heading from "@components/common/heading";
import Input from "@components/common/input";
import Button from "@components/common/button";
import Text from "@components/common/text";
import ExternalLink from "@components/common/external-link";

const Newsletter = ({ t }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [inputEmailUsed, setInputEmailUsed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, formState: { errors }, control } = useForm();

  const onSubmit = async (data) => {
    if (inputEmailUsed === false) {
      setIsLoading(true);
    }

    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(data)
    });

    if (response.status === 200) {
      setIsSuccess(true);
    } else {
      setInputEmailUsed(true);
      setIsLoading(false);
    };
  };

  return (
    <>
      {
        isSuccess ?
          <StyledNewsletterConfirm className="newsletter-confirm">
            <Heading level={4}>{t("Confirm your subscription")}</Heading>
            <Text as="p">{t("We sent an email message with confirmation to your email address")}</Text>
          </StyledNewsletterConfirm>
        :
          <StyledNewsletter className="newsletter">
            <div className="newsletter-wrapper">
              <Heading className="newsletter-title" level={2}>{t("Newsletter")}</Heading>

              <div className="newsletter-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller name="email" control={control} 
                    rules={{
                      required: { value: true, message: `${t("Email is empty")}` },
                      pattern: { 
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, 
                        message: `${t("Email is incorrect")}`
                      }
                    }}
                    render={({ field: { onChange, onBlur } }) => (
                      <Input 
                        className={errors.email && "error"}
                        onChange={(e) => {
                          onChange(e);
                          setInputEmailUsed(false);
                        }}
                        onBlur={onBlur}
                        name="email"
                        placeholder={`${t("Your e-mail")}*`}
                        errorText={errors.email && errors.email.message || inputEmailUsed && t("Email is used")} 
                      />
                    )}
                  />
                  <Button className={`${isLoading ? "loading" : ""}`} label={t("Subscribe")} />
                </form>
                <ExternalLink className="newsletter-text" href="https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.205081872.1209754540.1675664554-2135282031.1669802332">{t('NewsletterSubscribeText')} <u>{t("NewsletterSubscribeLink")}</u></ExternalLink>
              </div>
            </div>
          </StyledNewsletter>
        }
    </>
  );
};

export default Newsletter;
