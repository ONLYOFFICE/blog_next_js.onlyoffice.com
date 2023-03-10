import StyledInThePress from "./styled-in-the-press";
import Moment from "moment";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";

const InThePress = ({ t, inThePressPosts }) => {

  return (
    <StyledInThePress>
      <Heading className="in-the-press-title" level={4}>{t("ONLYOFFICE in the press")}</Heading>

      <ul className="in-the-press-list">
        {inThePressPosts?.edges.slice(0, 2).map(({node}) => (
          <li key={node.id}>
            <InternalLink href={node?.url} target="_blank">{node.title}</InternalLink>
            <div className="in-the-press-date">{Moment(node.dateNews, 'YYYY-MM-DD').format("D MMM y")}</div>
          </li>
        ))}
      </ul>
      <InternalLink className="view-all" href="/onlyoffice-in-the-press">{t("View all posts")}</InternalLink>
    </StyledInThePress>
  );
};

export default InThePress;
