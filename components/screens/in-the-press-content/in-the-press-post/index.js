import StyledInThePressPost from "./styled-in-the-press-post";
import Moment from "moment";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import ExternalLink from "@components/common/external-link";

const InThePressPost = ({ data }) => {
  return (
    <StyledInThePressPost>
      <article>
        <div className="meta">
          <ExternalLink className="press-url" href={data?.url}>{data?.shortUrl}</ExternalLink>
          <span className="date">{Moment(data?.dateNews, 'YYYY-MM-DD').format("MMMM D, y")}</span>
        </div>

        <ExternalLink className="post-title" href={data?.url}>
          <Heading level={2}>{data?.title}</Heading>
        </ExternalLink>

        <Text className="post-text" as="p" dangerouslySetInnerHTML={{__html: data?.excerpt}}></Text>
      </article>
    </StyledInThePressPost>
  );
};

export default InThePressPost;