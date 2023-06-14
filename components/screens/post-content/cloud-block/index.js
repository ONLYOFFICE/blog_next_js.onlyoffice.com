import StyledCloudBlock from "./styled-cloud-block";
import ExternalLink from "@components/common/external-link";

const CloudBlock = ({ t, currentLanguage, ...rest }) => {
  const locale = `https://www.onlyoffice.com${
    currentLanguage === "en" ? "" :
    currentLanguage === "zh-hans" ? "/zh" :
    currentLanguage === "pt-br" ? "/pt" : 
    `/${currentLanguage}`
  }/docspace-registration.aspx?utm_source=blog&utm_medium=post_page&utm_campaign=registration_docspace&utm_content=try-onlyoffice-in-the-cloud`

  return (
    <StyledCloudBlock {...rest}>
      <ExternalLink className="button" href={locale}>{t("Use ONLYOFFICE for free")}</ExternalLink>
    </StyledCloudBlock>
  );
};

export default CloudBlock;
