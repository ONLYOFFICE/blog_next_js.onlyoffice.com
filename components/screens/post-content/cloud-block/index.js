import StyledCloudBlock from "./styled-cloud-block";
import ExternalLink from "@components/common/external-link";

const CloudBlock = ({ t, locale, ...rest }) => {
  const href = `https://www.onlyoffice.com${
    locale === "en" ? "" :
    locale === "zh-hans" ? "/zh" :
    locale === "pt-br" ? "/pt" : 
    locale === "el" ? "" : 
    `/${locale}`
  }/docspace-registration.aspx?utm_source=blog&utm_medium=post_page&utm_campaign=registration_docspace&utm_content=try-onlyoffice-in-the-cloud`

  return (
    <StyledCloudBlock {...rest}>
      <ExternalLink className={`button ${locale}`} href={href}>{t("Use ONLYOFFICE for free")}</ExternalLink>
    </StyledCloudBlock>
  );
};

export default CloudBlock;
