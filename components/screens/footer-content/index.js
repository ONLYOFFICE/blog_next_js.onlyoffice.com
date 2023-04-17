import StyledFooter from "./styled-footer";
import { useState } from "react";
import FooterItem from "./footer-item";
import SocialLinks from "@components/screens/common/social-links";
import ExternalLink from "@components/common/external-link";
import Text from "@components/common/text";
import Popup from "@components/screens/common/popup";
import Newsletter from "@components/screens/common/newsletter";

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
          <ExternalLink href="/for-small-business.aspx" className="footer-link" label={t("SMBs")} alt={t("SMBs")} />
          <ExternalLink href="/for-enterprises.aspx" className="footer-link" label={t("Enterprises")} alt={t("Enterprises")} />
          <ExternalLink href="/home-use.aspx" className="footer-link" label={t("Home use")} alt={t("Home use")} />
          <ExternalLink href="/for-developers.aspx" className="footer-link" label={t("Developers")} alt={t("Developers")} />
          <ExternalLink href="/for-hosting-providers.aspx" className="footer-link" label={t("Hosting providers")} alt={t("Hosting providers")} />
          <ExternalLink href="/for-government.aspx" className="footer-link" label={t("Government")} alt={t("Government")} />
          <ExternalLink href="/healthcare.aspx" className="footer-link" label={t("Healthcare")} alt={t("Healthcare")} />
          <ExternalLink href="/for-research.aspx" className="footer-link" label={t("Research")} alt={t("Research")} />
          <ExternalLink href="/education.aspx" className="footer-link" label={t("Education")} alt={t("Education")} />
          <ExternalLink href="/nonprofit-organizations.aspx" className="footer-link" label={t("Nonprofits")} alt={t("Nonprofits")} />
        </FooterItem>
      </div>
      <div className="footer-item-group">
        <FooterItem dis heading={t("Perform your tasks")} className="byindustry">
          <ExternalLink href="/text-file-converter.aspx" className="footer-link" label={t("Convert text files")} alt={t("Convert text files")} />
          <ExternalLink href="/spreadsheet-converter.aspx" className="footer-link" label={t("Convert spreadsheets")} alt={t("Convert spreadsheets")} />
          <ExternalLink href="/presentation-converter.aspx" className="footer-link" label={t("Convert presentations")} alt={t("Convert presentations")} />
          <ExternalLink href="/pdf-converter.aspx" className="footer-link" label={t("Convert PDFs")} alt={t("Convert PDFs")} />
        </FooterItem>
      </div>
      <div className="footer-item-group">
        <FooterItem dis heading={t("Support")} className="support">
          <ExternalLink href="/support-contact-form.aspx" className="footer-link" label={t("Support contact form")} alt={t("Support contact form")} />
          <ExternalLink href="https://forum.onlyoffice.com/" className="footer-link" label={t("Forum")} alt={t("Forum")} />
          <ExternalLink href="/demo-order.aspx" className="footer-link" label={t("Order demo")} alt={t("Order demo")} />
          <ExternalLink href="/webinars.aspx" className="footer-link" label={t("Webinars")} alt={t("Webinars")} />
          <ExternalLink href="/training-courses.aspx" className="footer-link" label={t("Training courses")} alt={t("Training courses")} />
        </FooterItem>
        <FooterItem dis heading={t("Resources")} className="resources">
          <ExternalLink href="https://helpcenter.onlyoffice.com/index.aspx" className="footer-link" label={t("Help Center")} alt={t("Help Center")} />
          <ExternalLink href="/app-directory.aspx" className="footer-link" label={t("App Directory")} alt={t("App Directory")} />
          {
            language !== "zh-hans" &&
            <ExternalLink href="/document-editor-comparison.aspx" className="footer-link" label={t("Compare to other suites")} alt={t("Compare to other suites")} />
          }
          <ExternalLink href="/contribute.aspx" className="footer-link" label={t("Contribute")} alt={t("Contribute")} />
          <ExternalLink href="/legalterms.aspx" className="footer-link" label={t("Legal notice")} alt={t("Legal notice")} />
        </FooterItem>
      </div>
      <div className="footer-item-group">
        {
          language !== "zh-hans" &&
          <FooterItem dis heading={t("Comparison")} className="comparison">
            <ExternalLink href="/best-microsoft-office-alternative.aspx" className="footer-link" label={t("ONLYOFFICE Docs vs MS Office Online")} alt={t("ONLYOFFICE Docs vs MS Office Online")} />
            <ExternalLink href="/best-google-docs-alternative.aspx" className="footer-link" label={t("ONLYOFFICE Docs vs Google Docs")} alt={t("ONLYOFFICE Docs vs Google Docs")} />
            <ExternalLink href="/best-zoho-docs-alternative.aspx" className="footer-link" label={t("ONLYOFFICE Docs vs Zoho Docs")} alt={t("ONLYOFFICE Docs vs Zoho Docs")} />
            <ExternalLink href="/best-libreoffice-alternative.aspx" className="footer-link" label={t("ONLYOFFICE Docs vs LibreOffice")} alt={t("ONLYOFFICE Docs vs LibreOffice")} />
            <ExternalLink href="/best-wps-alternative.aspx" className="footer-link" label={t("ONLYOFFICE Docs vs WPS")} alt={t("ONLYOFFICE Docs vs WPS")} />
            <ExternalLink href="/best-adobe-alternative.aspx" className="footer-link" label={t("ONLYOFFICE Docs vs Adobe Acrobat")} alt={t("ONLYOFFICE Docs vs Adobe Acrobat")} />
          </FooterItem>
        }
        <FooterItem dis heading={t("Contact us")} className="contacts">
          <Text className="contact-text">
            {t("Sales questions")}
            &nbsp;
            <ExternalLink className="footer-link-contact" label={t("sales@onlyoffice.com")} href="mailto:sales@onlyoffice.com" alt={t("sales@onlyoffice.com")} />
          </Text>
          <Text className="contact-text">
            {t("Partner inquiries")}
            &nbsp;
            <ExternalLink className="footer-link-contact" label={t("partners@onlyoffice.com")} href="mailto:partners@onlyoffice.com" alt={t("partners@onlyoffice.com")} />
          </Text>
          <Text className="contact-text">
            {t("Press inquiries")}
            &nbsp;
            <ExternalLink className="footer-link-contact" label={t("press@onlyoffice.com")} href="mailto:press@onlyoffice.com" alt={t("press@onlyoffice.com")} />
          </Text>
          <ExternalLink href="/call-back-form.aspx" className="footer-link" label={t("Request a call")} alt={t("Request a call")} />
        </FooterItem>
      </div>

      <div className="footer-item-group last">
        <FooterItem heading={`${t("Follow us on")}:`} className="follow">
          <SocialLinks language={language} handlerSetModal={handlerSetModal} isFooterContent={isFooterContent} />
        </FooterItem>

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
