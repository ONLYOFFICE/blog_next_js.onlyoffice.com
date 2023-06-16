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

  const hrefLang = `https://onlyoffice.com${
    language === "en" ? "" : 
    language === "zh-hans" ? "/zh" : 
    language === "pt-br" ? "/pt" : `/${language}` 
  }`;

  return (
    <StyledFooter className={language} language={language}>
      <div className="footer-item-group">
        <FooterItem dis heading={t("Solutions")} className="bysize no_tablet_view">
          <ExternalLink href={`${hrefLang}/for-small-business.aspx`} className="footer-link" label={t("SMBs")} />
          <ExternalLink href={`${hrefLang}/for-enterprises.aspx`} className="footer-link" label={t("Enterprises")} />
          <ExternalLink href={`${hrefLang}/home-use.aspx`} className="footer-link" label={t("Home use")} />
          <ExternalLink href={`${hrefLang}/for-developers.aspx`} className="footer-link" label={t("Developers")} />
          <ExternalLink href={`${hrefLang}/for-hosting-providers.aspx`} className="footer-link" label={t("Hosting providers")} />
          <ExternalLink href={`${hrefLang}/for-government.aspx`} className="footer-link" label={t("Government")} />
          <ExternalLink href={`${hrefLang}/healthcare.aspx`} className="footer-link" label={t("Healthcare")} />
          <ExternalLink href={`${hrefLang}/for-research.aspx`} className="footer-link" label={t("Research")} />
          <ExternalLink href={`${hrefLang}/education.aspx`} className="footer-link" label={t("Education")} />
          <ExternalLink href={`${hrefLang}/nonprofit-organizations.aspx`} className="footer-link" label={t("Nonprofits")} />
        </FooterItem>
      </div>
      <div className="footer-item-group">
        <FooterItem dis heading={t("Features")} className="byindustry">
          <ExternalLink href={`${hrefLang}/document-editor.aspx`} className="footer-link" label={t("Document Editor")} />
          <ExternalLink href={`${hrefLang}/spreadsheet-editor.aspx`} className="footer-link" label={t("Spreadsheet Editor")} />
          <ExternalLink href={`${hrefLang}/presentation-editor.aspx`} className="footer-link" label={t("Presentation Editor")} />
          <ExternalLink href={`${hrefLang}/form-creator.aspx`} className="footer-link" label={t("Form creator")} />
          <ExternalLink href={`${hrefLang}/pdf-reader.aspx`} className="footer-link" label={t("PDF reader & converter")} />
          <ExternalLink href={`${hrefLang}/security.aspx`} className="footer-link" label={t("Security")} />
          <ExternalLink href={`${hrefLang}/accessibility.aspx`} className="footer-link" label={t("Accessibility")} />
          <ExternalLink href={`${hrefLang}/app-directory/chatgpt`} className="footer-link" label={t("AI helper")} />
          <ExternalLink href={`${hrefLang}/app-directory`} className="footer-link" label={t("App Directory")} />
        </FooterItem>
        <FooterItem dis heading={t("Connectors")} className="byindustry">
          <ExternalLink href={`${hrefLang}/office-for-nextcloud.aspx`} className="footer-link" label={t("Nextcloud")} />
          <ExternalLink href={`${hrefLang}/office-for-moodle.aspx`} className="footer-link" label={t("Moodle")} />
          <ExternalLink href={`${hrefLang}/office-for-odoo.aspx`} className="footer-link" label={t("Odoo")} />
          <ExternalLink href={`${hrefLang}/office-for-wordpress.aspx`} className="footer-link" label={t("WordPress")} />
          <ExternalLink href={`${hrefLang}/all-connectors.aspx`} className="footer-link" label={t("Others")} />
        </FooterItem>
        <FooterItem dis heading={t("Support")} className="support tablet_view_only">
          <ExternalLink href={`${hrefLang}/support-contact-form.aspx`} className="footer-link" label={t("Support contact form")} />
          <ExternalLink href="https://forum.onlyoffice.com/" className="footer-link" label={t("Forum")} />
          <ExternalLink href={`${hrefLang}/demo-order.aspx`} className="footer-link" label={t("Order demo")} />
          <ExternalLink href={`${hrefLang}/webinars.aspx`} className="footer-link" label={t("Webinars")} />
          <ExternalLink href={`${hrefLang}/training-courses.aspx`} className="footer-link" label={t("Training courses")} />
        </FooterItem>
      </div>
      <div className="footer-item-group">
        <FooterItem dis heading={t("Solutions")} className="bysize tablet_view_only">
          <ExternalLink href={`${hrefLang}/for-small-business.aspx`} className="footer-link" label={t("SMBs")} />
          <ExternalLink href={`${hrefLang}/for-enterprises.aspx`} className="footer-link" label={t("Enterprises")} />
          <ExternalLink href={`${hrefLang}/home-use.aspx`} className="footer-link" label={t("Home use")} />
          <ExternalLink href={`${hrefLang}/for-developers.aspx`} className="footer-link" label={t("Developers")} />
          <ExternalLink href={`${hrefLang}/for-hosting-providers.aspx`} className="footer-link" label={t("Hosting providers")} />
          <ExternalLink href={`${hrefLang}/for-government.aspx`} className="footer-link" label={t("Government")} />
          <ExternalLink href={`${hrefLang}/healthcare.aspx`} className="footer-link" label={t("Healthcare")} />
          <ExternalLink href={`${hrefLang}/for-research.aspx`} className="footer-link" label={t("Research")} />
          <ExternalLink href={`${hrefLang}/education.aspx`} className="footer-link" label={t("Education")} />
          <ExternalLink href={`${hrefLang}/nonprofit-organizations.aspx`} className="footer-link" label={t("Nonprofits")} />
        </FooterItem>
        <FooterItem dis heading={t("Support")} className="support no_tablet_view">
          <ExternalLink href={`${hrefLang}/support-contact-form.aspx`} className="footer-link" label={t("Support contact form")} />
          <ExternalLink href="https://forum.onlyoffice.com/" className="footer-link" label={t("Forum")} />
          <ExternalLink href={`${hrefLang}/demo-order.aspx`} className="footer-link" label={t("Order demo")} />
          <ExternalLink href={`${hrefLang}/webinars.aspx`} className="footer-link" label={t("Webinars")} />
          <ExternalLink href={`${hrefLang}/training-courses.aspx`} className="footer-link" label={t("Training courses")} />
          <ExternalLink href="https://helpcenter.onlyoffice.com/index.aspx" className="footer-link" label={t("Help Center")} />
        </FooterItem>
        <FooterItem dis heading={t("Resources")} className="resources">
          <ExternalLink href={`https://onlyoffice.com/blog/${language === "en" ? "" : language}`} className="footer-link" label={t("Blog")} />
          <ExternalLink href={`${hrefLang}/whitepapers.aspx`} className="footer-link" label={t("White papers")} />
          <ExternalLink href={`${hrefLang}/contribute.aspx`} className="footer-link" label={t("Contribute")} />
          <ExternalLink href={`${hrefLang}/vacancies.aspx`} className="footer-link" label={t("Jobs")} />
          <ExternalLink href={`${hrefLang}/events.aspx`} className="footer-link" label={t("Events")} />
          <ExternalLink href={`${hrefLang}/legalterms.aspx`} className="footer-link" label={t("Legal notice")} />
        </FooterItem>
      </div>
      <div className="footer-item-group">
        {
          language !== "zh-hans" &&
          <FooterItem dis heading={t("Comparison")} className="comparison">
            <ExternalLink href={`${hrefLang}/best-microsoft-office-alternative.aspx`} className="footer-link" label={t("ONLYOFFICE Docs vs MS Office Online")} />
            <ExternalLink href={`${hrefLang}/best-google-docs-alternative.aspx`} className="footer-link" label={t("ONLYOFFICE Docs vs Google Docs")} />
            <ExternalLink href={`${hrefLang}/best-zoho-docs-alternative.aspx`} className="footer-link" label={t("ONLYOFFICE Docs vs Zoho Docs")} />
            <ExternalLink href={`${hrefLang}/best-libreoffice-alternative.aspx`} className="footer-link" label={t("ONLYOFFICE Docs vs LibreOffice")} />
            <ExternalLink href={`${hrefLang}/best-wps-alternative.aspx`} className="footer-link" label={t("ONLYOFFICE Docs vs WPS")} />
            <ExternalLink href={`${hrefLang}/best-adobe-alternative.aspx`} className="footer-link" label={t("ONLYOFFICE Docs vs Adobe Acrobat")} />
            <ExternalLink href={`${hrefLang}/best-hancom-alternative.aspx`} className="footer-link" label={t("ONLYOFFICE Docs vs Hancom")} />
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
