import StyledCloudBlock from "./styled-cloud-block";
import ExternalLink from "@components/common/external-link";

const CloudBlock = ({ t, currentLanguage, ...rest }) => {
  const locale = `https://www.onlyoffice.com${
    currentLanguage === "en" ? "" :
    currentLanguage === "zh-hans" ? "/zh" :
    currentLanguage === "pt-br" ? "/pt" : 
    `/${currentLanguage}`
  }/docspace-registration.aspx`

  return (
    <StyledCloudBlock {...rest}>
      <ExternalLink className="button" href={locale}>{t("Use ONLYOFFICE for free")}</ExternalLink>
    </StyledCloudBlock>
  );
};

export default CloudBlock;
