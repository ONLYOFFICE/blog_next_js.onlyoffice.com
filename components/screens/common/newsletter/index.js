import StyledNewsletter from "./styled-newsletter";
import StyledNewsletterConfirm from "./styled-newsletter-confirm";
import { useState } from "react";
import Heading from "@components/common/heading";
import TextInput from "@components/common/text-input";
import Text from "@components/common/text";
import ExternalLink from "@components/common/external-link";

const Newsletter = ({ t }) => {
  const [searchItem, setSearchItem] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  };

  return (
    <>
      <StyledNewsletter className="newsletter">
        <div className="newsletter-wrapper">
          <Heading className="newsletter-title" level={2}>{t("Newsletter")}</Heading>

          <div className="newsletter-body">
            <TextInput 
              type="text" 
              placeholder={t("Your e-mail*")} 
              labelButton={t("Subscribe")} 
              withButton={true} 
              onChange={onSearch}
              value={searchItem}
            />
            <Text className="newsletter-text">{t('By clicking "Subscribe", you agree to the')} <ExternalLink href="https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.205081872.1209754540.1675664554-2135282031.1669802332">{t("rules for using the service and processing personal data.")}</ExternalLink></Text>
          </div>
        </div>
      </StyledNewsletter>

      <StyledNewsletterConfirm className="newsletter-confirm">
        <Heading level={4}>{t("Confirm your subscription")}</Heading>
        <Text as="p">{t("We sent an email message with confirmation to your email address")}</Text>
      </StyledNewsletterConfirm>
    </>
  );
};

export default Newsletter;
