import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";
import StyledInThePress from "./styled-in-the-press";

const InThePress = ({ t }) => {
  return (
    <StyledInThePress>
      <Heading className="in-the-press-title" level={4}>ONLYOFFICE in the press</Heading>

      <ul className="in-the-press-list">
        <li>
          <InternalLink href="#">
            How ONLYOFFICE helps organize research workflow in the Institute
          </InternalLink>
          <div className="in-the-press-date">15 Sep 2022</div>
        </li>
        <li>
          <InternalLink href="#">
            Call for translators: help translate the new version and get ONLYOFFICE cloud
          </InternalLink>
          <div className="in-the-press-date">15 Sep 2022</div>
        </li>
      </ul>
      <InternalLink className="view-all" href="#">{t("View all posts")}</InternalLink>
    </StyledInThePress>
  );
};

export default InThePress;
