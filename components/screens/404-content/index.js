import StyledErrorContent from "./styled-404-content";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";
import Text from "@components/common/text";

const ErrorContent = ({ t }) => {
  return (
    <StyledErrorContent>
      <div className="error-img"></div>
      <Heading level={1}>{t("404 Page not found")}</Heading>
      <Text as="p">{t("The page you were looking for doesn't exist, isn't available, or was loading incorrectly.")}</Text>
      <InternalLink href="/">{t("Go back to Home")}</InternalLink>
    </StyledErrorContent>
  );
};

export default ErrorContent;
