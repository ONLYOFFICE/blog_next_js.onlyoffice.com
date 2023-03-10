import StyledSearchPost from "./styled-search-post";
import Moment from "moment";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import ExternalLink from "@components/common/external-link";

const SearchPost = ({ data }) => {
  return (
    <StyledSearchPost>
      <article>
        <div className="meta">
          <span className="date">{Moment(data?.dateNews).format("D MMMM y")}</span>
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