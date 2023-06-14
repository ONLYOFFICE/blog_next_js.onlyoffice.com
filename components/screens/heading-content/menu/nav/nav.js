import Link from "@components/common/external-link";
import MenuItem from "../menu-item";
import StyledNav from "./styled-nav";
import Text from "@components/common/text";

const Nav = ({ onClick, t, currentLanguage, ...rest }) => {
  const hrefLang = `https://onlyoffice.com${
    currentLanguage === "en" ? "" : 
    currentLanguage === "zh-hans" ? "/zh" : 
    currentLanguage === "pt-br" ? "/pt" : `/${currentLanguage}` 
  }`;

  const oformsHref = `https://oforms.onlyoffice.com/${
    currentLanguage === "zh-hans" ? "zh" : 
    currentLanguage === "it" ? "it" :
    currentLanguage === "fr" ? "fr" :
    currentLanguage === "es" ? "es" :
    currentLanguage === "de" ? "de" :
    currentLanguage === "ja" ? "ja" : ""
  }`;

  return (
    <StyledNav {...rest}>
      <MenuItem heading={t("Products")} id="navitem-products">
        <div className="menu-wrapper">
          <div className="outer-box with-border">
            <div className="dropdown-item-group">
              <Link id="navitem-products-docs" className="dropdown-item" href={`${hrefLang}/office-suite.aspx`}>
                {t("Docs")}
              </Link>
              <Text className="dropdown-item-text">{t("Editors to integrate into your business platform")}</Text>
            </div>
            <div className="dropdown-item-group">
              <Link id="navitem-products-docspace" className="dropdown-item" href={`${hrefLang}/docspace.aspx`}>
                {t("DocSpace")}
              </Link>
              <Text className="dropdown-item-text">{t("Platform to collaborate with your partners and clients")}</Text>
            </div>
            <div className="dropdown-item-group">
              <Link id="navitem-products-workspace" className="dropdown-item" href={`${hrefLang}/workspace.aspx`}>
                {t("Workspace")}
              </Link>
              <Text className="dropdown-item-text">{t("Platform to collaborate with your team")}</Text>
            </div>
            <div className="dropdown-item-group">
              <Link id="navitem-products-connectors" className="dropdown-item" href={`${hrefLang}/all-connectors.aspx`}>
                {t("Connectors")}
              </Link>
              <Text className="dropdown-item-text">{t("Ready-to-use apps to integrate Docs with your platform")}</Text>
            </div>
          </div>
          <div className="outer-box with-border">
            <div id="navitem-products-mob-desktop-apps" className="dropdown-item-label">
              {t("Mobile and desktop apps")}
            </div>
            <Link id="navitem-products-for-desktop" className="dropdown-item" href={`${hrefLang}/desktop.aspx`}>
              {t("For desktop")}
            </Link>
            <Link id="navitem-products-for-ios" className="dropdown-item" href={`${hrefLang}/office-for-ios.aspx`}>
              {t("For iOS")}
            </Link>
            <Link id="navitem-products-for-android" className="dropdown-item" href={`${hrefLang}/office-for-android.aspx`}>
              {t("For Android")}
            </Link>
          </div>
          <div className="outer-box">
            <div className="dropdown-item-label">
              {t("Perform your tasks online")}
            </div>
            <Link id="navitem-products-oforms" className="dropdown-item" href={oformsHref}>
              {t("Find and fill out oforms")}
            </Link>
            <Link id="navitem-products-convert-text" className="dropdown-item" href={`${hrefLang}/text-file-converter.aspx`}>
              {t("Convert text files")}
            </Link>
            <Link id="navitem-products-convert-spreadsheets" className="dropdown-item" href={`${hrefLang}/spreadsheet-converter.aspx`}>
              {t("Convert spreadsheets")}
            </Link>
            <Link id="navitem-products-convert-presentations" className="dropdown-item" href={`${hrefLang}/presentation-converter.aspx`}>
              {t("Convert presentations")}
            </Link>
            <Link id="navitem-products-convert-pdfs" className="dropdown-item" href={`${hrefLang}/pdf-converter.aspx`}>
              {t("Convert PDFs")}
            </Link>
          </div>
        </div>
      </MenuItem>

      <MenuItem heading={t("Enterprise")} id="navitem-enterprise">
        <div className="menu-wrapper">
          <div className="outer-box">
            <Link id="navitem-enterprise-overview" className="dropdown-item" href={`${hrefLang}/for-enterprises.aspx`}>
              {t("Overview")}
            </Link>
            <Link id="navitem-enterprise-docs-enterprise" className="dropdown-item" href={`${hrefLang}/docs-enterprise.aspx`}>
              {t("Docs Enterprise")}
            </Link>
            <Link id="navitem-enterprise-pricing" className="dropdown-item" href={`${hrefLang}/docs-enterprise-prices.aspx`}>
              {t("Pricing")}
            </Link>
            <Link id="navitem-enterprise-get" className="dropdown-item" href={`${hrefLang}/download-docs.aspx`}>
              {t("Get it now")}
            </Link>
          </div>
        </div>
      </MenuItem>

      <MenuItem heading={t("Developers")} id="navitem-developers">
        <div className="menu-wrapper">
          <div className="outer-box">
            <Link id="navitem-developers-docs-dev" className="dropdown-item" href={`${hrefLang}/developer-edition.aspx`}>
              {t("Docs Developer")}
            </Link>
            <Link id="navitem-developers-conversion-api" className="dropdown-item" href={`${hrefLang}/conversion-api.aspx`}>
              {t("Conversion API")}
            </Link>
            <Link id="navitem-developers-doc-builder" className="dropdown-item" href={`${hrefLang}/document-builder.aspx`}>
              {t("Document Builder")}
            </Link>
            <Link id="navitem-developers-api-doc" className="dropdown-item" href="https://api.onlyoffice.com/">
              {t("API Documentation")}
            </Link>
            <Link id="navitem-developers-pricing" className="dropdown-item" href={`${hrefLang}/developer-edition-prices.aspx`}>
              {t("Pricing")}
            </Link>
            <Link id="navitem-developers-get" className="dropdown-item" href={`${hrefLang}/download-docs.aspx?from=downloadintegrationmenu#docs-developer`}>
              {t("Get it now")}
            </Link>
          </div>
          <div className="outer-box bg-grey">
            <Link className="dropdown-item-box" href={`${hrefLang}/see-it-in-action.aspx`}>
              <div id="navitem-developers-see-it" className="dropdown-item-title">
                {t("See it in action!")}
              </div>
              <div id="see-it-div" className="menu-pic-div">
                <div id="see-it-img" className="menu-pic-img"></div>
                <p id="see-it-header" className="menu-pic-header">
                  {t("Curious to know what the interface looks like and try the main functionality?")}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </MenuItem>

      <MenuItem heading={t("Get ONLYOFFICE")} id="navitem-download">
        <div className="menu-wrapper">
          <div className="outer-box with-border">
            <div id="navitem-download-for-business" className="dropdown-item-label">
              {t("For business")}
            </div>
            <div id="navitem-download-docspace" className="dropdown-item">
              {t("DocSpace")}
            </div>
            <div className="inner-box">
              <Link id="navitem-download-enterprise-signup" className="nav-2nd-menu-link" href={`${hrefLang}/docspace-registration.aspx`}>
                {t("Sign up for cloud")}
              </Link>
            </div>
            <div id="navitem-download-docs-enterprise" className="dropdown-item">
              {t("Docs Enterprise")}
            </div>
            <div className="inner-box">
              <Link id="navitem-download-enterprise-signup" className="nav-2nd-menu-link" href={`${hrefLang}/docs-registration.aspx`}>
                {t("Sign up for cloud")}
              </Link>
              <Link id="navitem-download-enterprise-onpremises" className="nav-2nd-menu-link" href={`${hrefLang}/download-docs.aspx?from=downloadintegrationmenu#docs-enterprise`}>
                {t("Install on-premises")}
              </Link>
            </div>
            <div id="navitem-download-workspace" className="dropdown-item">
              {t("Workspace")}
            </div>
            <div className="inner-box">
              <Link id="navitem-download-signin" className="nav-2nd-menu-link" href={`${hrefLang}/signin.aspx`}>
                {t("Sign in")}
              </Link>
              <Link id="navitem-download-onpremises" className="nav-2nd-menu-link" href={`${hrefLang}/download-workspace.aspx`}>
                {t("Install on-premises")}
              </Link>
            </div>
            <Link id="navitem-download-connectors" className="dropdown-item" href={`${hrefLang}/download-connectors.aspx`}>
              {t("Connectors")}
            </Link>
            <Link id="navitem-download-desktop-mob" className="dropdown-item" href={`${hrefLang}/download-desktop.aspx`}>
              {t("Desktop & mobile apps")}
            </Link>
          </div>
          <div className="outer-box">
            <div id="navitem-download-for-dev" className="dropdown-item-label">
              {t("For developers")}
            </div>
            <div id="navitem-download-docs-dev" className="dropdown-item">
              {t("Docs Developer")}
            </div>
            <div className="inner-box">
              {/* <Link id="navitem-download-enterprise-signup" className="nav-2nd-menu-link" href={`${hrefLang}/docs-registration.aspx`}>
                {t("Sign up for cloud")}
              </Link> */}
              <Link id="navitem-download-enterprise-onpremises" className="nav-2nd-menu-link" href={`${hrefLang}/download-docs.aspx?from=downloadintegrationmenu#docs-developer`}>
                {t("Install on-premises")}
              </Link>
            </div>
            <Link id="navitem-download-docs-builder" className="dropdown-item" href={`${hrefLang}/download-builder.aspx`}>
              {t("Document Builder")}
            </Link>
            <div className="outer-box-line"></div>
            <div id="navitem-download-for-community" className="dropdown-item-label">
              {t("For community")}
            </div>
            <Link id="navitem-download-docs-community" className="dropdown-item" href={`${hrefLang}/download-docs.aspx#docs-community`}>
              {t("Docs Community")}
            </Link>
            <Link id="navitem-download-code-git" className="dropdown-item" href="https://github.com/ONLYOFFICE/">
              {t("Code on GitHub")}
            </Link>
          </div>
        </div>
      </MenuItem>

      <MenuItem heading={t("Pricing")} id="navitem-pricing">
        <div className="menu-wrapper">
          <div className="outer-box">
            <div id="navitem-pricing-for-business" className="dropdown-item-label">
              {t("For business")}
            </div>
            <Link id="navitem-pricing-docs-docspace" className="dropdown-item" href={`${hrefLang}/docspace-prices.aspx`}>
              {t("DocSpace")}
            </Link>
            <Link id="navitem-pricing-docs-enterprice" className="dropdown-item" href={`${hrefLang}/docs-enterprise-prices.aspx`}>
              {t("Docs Enterprise")}
            </Link>
            <Link id="navitem-prices-workspace" className="dropdown-item" href={`${hrefLang}/workspace-prices.aspx`}>
              {t("Workspace")}
            </Link>
            <div id="navitem-pricing-for-dev" className="dropdown-item-label">
              {t("For developers")}
            </div>
            <Link id="navitem-pricing-docs-dev" className="dropdown-item" href={`${hrefLang}/developer-edition-prices.aspx`}>
              {t("Docs Developer")}
            </Link>
          </div>
          <div className="outer-box bg-grey">
            <Link className="dropdown-item-box" href={`${hrefLang}/find-partners.aspx`}>
              <div id="navitem-pricing-partner" className="dropdown-item-title">
                {t("Buy from an ONLYOFFICE reseller")}
              </div>
              <div id="reseller-div" className="menu-pic-div">
                <div id="reseller-img" className="menu-pic-img"></div>
                <p id="reseller-header" className="menu-pic-header">
                  {t("Find out the list of all the authorized ONLYOFFICE resellers in your area")}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </MenuItem>

      <MenuItem heading={t("Partners")} id="navitem-partners">
        <div className="menu-wrapper">
          <div className="outer-box">
            <Link id="navitem-partners-resellers" className="dropdown-item" href={`${hrefLang}/resellers.aspx`}>
              {t("Resellers")}
            </Link>
            <Link id="navitem-partners-affiliates" className="dropdown-item" href={`${hrefLang}/affiliates.aspx`}>
              {t("Affiliates")}
            </Link>
            <Link id="navitem-partners-hosting-providers" className="dropdown-item" href={`${hrefLang}/hosting-providers.aspx`}>
              {t("Hosting providers")}
            </Link>
            <Link id="navitem-partners-technology-partners" className="dropdown-item" href={`${hrefLang}/technology-partners.aspx`}>
              {t("Technology partners")}
            </Link>
            <Link id="navitem-partners-find-partners" className="dropdown-item" href={`${hrefLang}/find-partners.aspx`}>
              {t("Find partners")}
            </Link>
            <Link id="navitem-partners-submit-request" className="dropdown-item" href={`${hrefLang}/partnership-request.aspx`}>
              {t("Submit request")}
            </Link>
          </div>
          <div className="outer-box bg-grey">
            <Link className="dropdown-item-box" href={`${hrefLang}/events.aspx`}>
              <div id="navitem-latest-events" className="dropdown-item-title">
                {t("Events")}
              </div>
              <div id="latest-events-div" className="menu-pic-div">
                <div id="latest-events-img" className="menu-pic-img"></div>
                <p id="latest-events-header" className="menu-pic-header">
                  {t("Meet the ONLYOFFICE team")}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </MenuItem>

      <MenuItem heading={t("Resources")} id="navitem-resources">
        <div className="menu-wrapper">
          <div className="outer-box with-border">
            <Link id="navitem-resources-about" className="dropdown-item" href={`${hrefLang}/about.aspx`}>
              {t("About ONLYOFFICE")}
            </Link>
            <Link id="navitem-resources-customers" className="dropdown-item" href={`${hrefLang}/customers.aspx`}>
              {t("Customers")}
            </Link>
            <Link id="navitem-resources-contribute" className="dropdown-item" href={`${hrefLang}/contribute.aspx`}>
              {t("Contribute")}
            </Link>
            <Link id="navitem-resources-vacancies" className="dropdown-item" href={`${hrefLang}/vacancies.aspx`}>
              {t("Jobs")}
            </Link>
            <Link id="navitem-resources-awards" className="dropdown-item" href={`${hrefLang}/awards.aspx`}>
              {t("Awards")}
            </Link>
            <Link id="navitem-resources-events" className="dropdown-item" href={`${hrefLang}/events.aspx`}>
              {t("Events")}
            </Link>
            <Link id="navitem-resources-giftshop" className="dropdown-item" href="https://shop.spreadshirt.com/onlyoffice">
              {t("Gift shop")}
            </Link>
            <Link id="navitem-resources-contacts" className="dropdown-item" href={`${hrefLang}/contacts.aspx`}>
              {t("Contacts")}
            </Link>
          </div>
          <div className="outer-box">
            <Link id="navitem-resources-blog" className="dropdown-item" href={`https://www.onlyoffice.com/blog/${currentLanguage === "en" ? "" : currentLanguage}`}>
              {t("Blog")}
            </Link>
            <Link id="navitem-resources-forum" className="dropdown-item" href="https://forum.onlyoffice.com/">
              {t("Forum")}
            </Link>
            <Link id="navitem-resources-pressdownloads" className="dropdown-item" href={`${hrefLang}/press-downloads.aspx`}>
              {t("Press downloads")}
            </Link>
            <Link id="navitem-resources-help" className="dropdown-item" href="https://helpcenter.onlyoffice.com/index.aspx">
              {t("Help Center")}
            </Link>
            <Link id="navitem-resources-whitepapers" className="dropdown-item" href={`${hrefLang}/whitepapers.aspx`}>
              {t("White papers")}
            </Link>
            <Link id="navitem-resources-webinars" className="dropdown-item" href={`${hrefLang}/webinars.aspx`}>
              {t("Webinars")}
            </Link>
            <Link id="navitem-resources-training-courses" className="dropdown-item" href={`${hrefLang}/training-courses.aspx`}>
              {t("Training courses")}
            </Link>
            {
              currentLanguage !== "zh-hans" &&
              <Link id="navitem-resources-compare" className="dropdown-item" href={`${hrefLang}/document-editor-comparison.aspx`}>
                {t("Compare to other suites")}
              </Link>
            }
          </div>
        </div>
      </MenuItem>
    </StyledNav>
  );
};

export default Nav;