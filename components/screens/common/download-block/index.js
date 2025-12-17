import StyledDownLoadBlock from "./styled-download-block";
import Heading from "@components/common/heading";
import ExternalLink from "@components/common/external-link";

const DownloadBlock = ({ t, locale, ...rest }) => {
  return (
    <StyledDownLoadBlock className={locale} {...rest}>
      <Heading className="download-block-title" level={2} size={3}>{t("Download ONLYOFFICE desktop and mobile apps for")} <span>{t("FREE")}</span></Heading>
      <div className="download-block-btns">
        <ExternalLink className="download-block-btn windows" href="https://www.onlyoffice.com/download-desktop.aspx" label={t("For Windows")} />
        <ExternalLink className="download-block-btn linux" href="https://www.onlyoffice.com/download-desktop.aspx" label={t("For Linux")} />
        <ExternalLink className="download-block-btn mac-os" href="https://www.onlyoffice.com/download-desktop.aspx" label={t("For Mac OS")} />
        <ExternalLink className="download-block-btn google-play" href="https://play.google.com/store/apps/details?id=com.onlyoffice.documents" />
        <ExternalLink className="download-block-btn app-store" href="https://apps.apple.com/app/onlyoffice-documents/id944896972" />
      </div>
    </StyledDownLoadBlock>
  );
};

export default DownloadBlock;
