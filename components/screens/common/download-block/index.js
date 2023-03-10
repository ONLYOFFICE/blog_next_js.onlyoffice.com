import StyledDownLoadBlock from "./styled-download-block";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";
import ExternalLink from "@components/common/external-link";

const DownloadBlock = ({ t, ...rest }) => {
  return (
    <StyledDownLoadBlock {...rest}>
      <Heading className="download-block-title" level={3}>{t("Download ONLYOFFICE desktop and mobile apps for")} <span>{t("FREE")}</span></Heading>
      <div className="download-block-btns">
        <InternalLink className="download-block-btn windows" href="https://www.onlyoffice.com/download-desktop.aspx" target="_blank">{t("For Windows")}</InternalLink>
        <InternalLink className="download-block-btn linux" href="https://www.onlyoffice.com/download-desktop.aspx" target="_blank">{t("For Linux")}</InternalLink>
        <InternalLink className="download-block-btn mac-os" href="https://www.onlyoffice.com/download-desktop.aspx" target="_blank">{t("For Mac OS")}</InternalLink>
        <ExternalLink className="download-block-btn google-play" href="https://play.google.com/store/apps/details?id=com.onlyoffice.documents" target="_blank"></ExternalLink>
        <ExternalLink className="download-block-btn app-store" href="https://apps.apple.com/app/onlyoffice-documents/id944896972" target="_blank"></ExternalLink>
      </div>
    </StyledDownLoadBlock>
  );
};

export default DownloadBlock;
