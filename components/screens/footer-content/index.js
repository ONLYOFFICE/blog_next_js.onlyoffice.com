import StyledFooter from "./styled-footer";
import { useState } from "react";
import FooterItem from "./footer-item";
import SocialLinks from "@components/screens/common/social-links";
import ExternalLink from "@components/common/external-link";
import Text from "@components/common/text";
import Popup from "@components/screens/common/popup";
import Newsletter from "@components/screens/common/newsletter";
import Heading from "@components/common/heading";

const date = new Date();
const currentYear = date.getFullYear();

const Footer = ({ t, language }) => {
  const isFooterContent = true;
  const [popupActive, setPopupActive] = useState(false);
  const handlerSetModal = () => {
    setPopupActive(true);
  };

  return (
    <StyledFooter className={language} language={language}>
      <div className="footer-item-group">
        <FooterItem dis heading={t("Solutions")} className="bysize">
          <ExternalLink href="/for-small-business.aspx" className="footer-link" label={t("SMBs")} />
          <ExternalLink href="/for-enterprises.aspx" className="footer-link" label={t("Enterprises")} />
          <ExternalLink href="/home-use.aspx" className="footer-link" label={t("Home use")} />
          <ExternalLink href="/for-developers.aspx" className="footer-link" label={t("Developers")} />
          <ExternalLink href="/for-hosting-providers.aspx" className="footer-link" label={t("Hosting providers")} />
          <ExternalLink href="/for-government.aspx" className="footer-link" label={t("Government")} />
          <ExternalLink href="/healthcare.aspx" className="footer-link" label={t("Healthcare")} />
          <ExternalLink href="/for-research.aspx" className="footer-link" label={t("Research")} />
          <ExternalLink href="/education.aspx" className="footer-link" label={t("Education")} />
          <ExternalLink href="/nonprofit-organizations.aspx" className="footer-link" label={t("Nonprofits")} />
        </FooterItem>
      </div>
      <div className="footer-item-group">
        <FooterItem dis heading={t("Features")} className="byindustry">
          <ExternalLink href="/document-editor.aspx" className="footer-link" label={t("Document Editor")} />
          <ExternalLink href="/spreadsheet-editor.aspx" className="footer-link" label={t("Spreadsheet Editor")} />
          <ExternalLink href="/presentation-editor.aspx" className="footer-link" label={t("Presentation Editor")} />
          <ExternalLink href="/form-creator.aspx" className="footer-link" label={t("Form creator")} />
          <ExternalLink href="/pdf-reader.aspx" className="footer-link" label={t("PDF reader & converter")} />
          <ExternalLink href="/security.aspx" className="footer-link" label={t("Security")} />
          <ExternalLink href="/app-directory" className="footer-link" label={t("App Directory")} />
        </FooterItem>
      </div>
      <div className="footer-item-group">
        <FooterItem dis heading={t("Support")} className="support">
          <ExternalLink href="/support-contact-form.aspx" className="footer-link" label={t("Support contact form")} />
          <ExternalLink href="https://forum.onlyoffice.com/" className="footer-link" label={t("Forum")} />
          <ExternalLink href="/demo-order.aspx" className="footer-link" label={t("Order demo")} />
          <ExternalLink href="/webinars.aspx" className="footer-link" label={t("Webinars")} />
          <ExternalLink href="/training-courses.aspx" className="footer-link" label={t("Training courses")} />
        </FooterItem>
        <FooterItem dis heading={t("Resources")} className="resources">
          <ExternalLink href="https://helpcenter.onlyoffice.com/index.aspx" className="footer-link" label={t("Help Center")} />
          {
            language !== "zh-hans" &&
            <ExternalLink href="/document-editor-comparison.aspx" className="footer-link" label={t("Compare to other suites")} />
          }
          <ExternalLink href="/contribute.aspx" className="footer-link" label={t("Contribute")} />
          <ExternalLink href="/legalterms.aspx" className="footer-link" label={t("Legal notice")} />
        </FooterItem>
      </div>
      <div className="footer-item-group">
        {
          language !== "zh-hans" &&
          <FooterItem dis heading={t("Comparison")} className="comparison">
            <ExternalLink href="/best-microsoft-office-alternative.aspx" className="footer-link" label={t("ONLYOFFICE Docs vs MS Office Online")} />
            <ExternalLink href="/best-google-docs-alternative.aspx" className="footer-link" label={t("ONLYOFFICE Docs vs Google Docs")} />
            <ExternalLink href="/best-zoho-docs-alternative.aspx" className="footer-link" label={t("ONLYOFFICE Docs vs Zoho Docs")} />
            <ExternalLink href="/best-libreoffice-alternative.aspx" className="footer-link" label={t("ONLYOFFICE Docs vs LibreOffice")} />
            <ExternalLink href="/best-wps-alternative.aspx" className="footer-link" label={t("ONLYOFFICE Docs vs WPS")} />
            <ExternalLink href="/best-adobe-alternative.aspx" className="footer-link" label={t("ONLYOFFICE Docs vs Adobe Acrobat")} />
          </FooterItem>
        }
        <FooterItem dis heading={t("Contact us")} className="contacts">
          <Text className="contact-text">
            {t("Sales questions")}
            &nbsp;
            <ExternalLink className="footer-link-contact" label={t("sales@onlyoffice.com")} href="mailto:sales@onlyoffice.com" />
          </Text>
          <Text className="contact-text">
            {t("Partner inquiries")}
            &nbsp;
            <ExternalLink className="footer-link-contact" label={t("partners@onlyoffice.com")} href="mailto:partners@onlyoffice.com" />
          </Text>
          <Text className="contact-text">
            {t("Press inquiries")}
            &nbsp;
            <ExternalLink className="footer-link-contact" label={t("press@onlyoffice.com")} href="mailto:press@onlyoffice.com" />
          </Text>
          <ExternalLink href="/call-back-form.aspx" className="footer-link" label={t("Request a call")} />
        </FooterItem>
      </div>

      <div className="footer-item-group-last">
        <div className="footer-follow">
          <Heading label={`${t("Follow us on")}${language === "ja" || language === "zh-hans" || language === "fr" ? "" : ":"}`} level={6} className="footer-item-heading" />
          <SocialLinks language={language} handlerSetModal={handlerSetModal} isFooterContent={isFooterContent} />
        </div>

        <div className="footer-copyright-block">
          <span>{t("© Ascensio System SIA", {currentYear})}</span>
          <span>{t("All rights reserved")}</span>
        </div>
      </div>

      <Popup popupActive={popupActive} setPopupActive={setPopupActive}>
        <Newsletter t={t} />
      </Popup>
    </StyledFooter>
  );
};

export default Footer;
