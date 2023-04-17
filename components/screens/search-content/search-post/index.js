import StyledSearchPost from "./styled-search-post";
import DateFormat from "@components/screens/common/date-format";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import ExternalLink from "@components/common/external-link";

const SearchPost = ({ currentLanguage, data }) => {
  return (
    <StyledSearchPost>
      <article>
        <div className="meta">
          <span className="date">
            <DateFormat currentLanguage={currentLanguage} data={data?.dateNews} format="D MMMM y" />
          </span>
          <ExternalLink className="author" href={`/author/${data.author?.node.slug}`}>{data.author?.node.name}</ExternalLink>
        </div>

        <ExternalLink className="post-title" href={data?.uri}>
          <Heading level={2}>{data?.title}</Heading>
        </ExternalLink>

        <Text className="post-text" as="p" dangerouslySetInnerHTML={{__html: data?.excerpt}}></Text>
      </article>
    </StyledSearchPost>
  );
};

export default SearchPost;