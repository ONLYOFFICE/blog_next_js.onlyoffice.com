import StyledInThePressPost from "./styled-in-the-press-post";
import DateFormat from "@components/screens/common/date-format";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import ExternalLink from "@components/common/external-link";

const InThePressPost = ({ locale, data }) => {
  return (
    <StyledInThePressPost>
      <article>
        <div className="meta">
          <ExternalLink className="press-url" href={data?.url}>{data?.shortUrl}</ExternalLink>
          <span className="date">
            <DateFormat locale={locale} data={data?.dateNews} format="MMMM D, y" />
          </span>
        </div>

        <Heading className="post-title" level={2}>
          <ExternalLink href={data?.url}>{data?.title}</ExternalLink>
        </Heading>

        {
          data?.excerpt &&
          <Text className="post-text" as="p" dangerouslySetInnerHTML={{__html: data?.excerpt}}></Text>
        }
      </article>
    </StyledInThePressPost>
  );
};

export default InThePressPost;