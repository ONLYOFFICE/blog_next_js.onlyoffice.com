import StyledInThePressPost from "./styled-in-the-press-post";
import DateFormat from "@components/screens/common/date-format";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import ExternalLink from "@components/common/external-link";

const InThePressPost = ({ currentLanguage, data }) => {
  return (
    <StyledInThePressPost>
      <article>
        <div className="meta">
          <ExternalLink className="press-url" href={data?.url}>{data?.shortUrl}</ExternalLink>
          <span className="date">
            <DateFormat currentLanguage={currentLanguage} data={data?.dateNews} format="MMMM D, y" />
          </span>
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