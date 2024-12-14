import StyledSearchPost from "./styled-search-post";
import { useCallback } from "react";
import DateFormat from "@components/screens/common/date-format";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import InternalLink from "@components/common/internal-link";
import parse from "html-react-parser";

const SearchPost = ({ locale, data, searchQueryString }) => {
  const HightLight = (props) => {
    const { searchQuery, text } = props;

    if (!searchQuery) return string;

    const regexp = new RegExp(searchQuery, "ig");
    const matchValue = text.match(regexp);

    if (matchValue) {
      return text.split(regexp).map((text, index, array) => {
        if (index < array.length - 1) {
          const searchExcerpt = matchValue.shift();
          return <span key={index}>{text}<span className="search-excerpt">{searchExcerpt}</span></span>
        }
        return text;
      })
    }
    return text;
  }

  const HightLightText = useCallback((text) => {
    return <HightLight searchQuery={searchQueryString} text={text} />
  }, [searchQueryString])

  return (
    <StyledSearchPost>
      <article>
        <div className="meta">
          <span className="date">
            <DateFormat locale={locale} data={data?.date} format="D MMMM y" />
          </span>
          <InternalLink className="author" href={`/author/${data.author?.node.slug}`}>{data.author?.node.name}</InternalLink>
        </div>

        <Heading className="post-title" level={2}>
          <InternalLink href={data?.uri}>{HightLightText(data?.title)}</InternalLink>
        </Heading>

        {data?.aioseoDescription ? (
          <Text className="post-text" as="p">{HightLightText(data?.aioseoDescription)}</Text>
        ) : data?.excerpt ? (
          <Text className="post-text" as="p">{HightLightText(parse(data?.excerpt)[0].props.children)}</Text>
        ) : (
          null
        )}
      </article>
    </StyledSearchPost>
  );
};

export default SearchPost;