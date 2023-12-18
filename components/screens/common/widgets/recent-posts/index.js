import StyledRecentPosts from "./styled-recent-posts";
import DateFormat from "@components/screens/common/date-format";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";

const RecentPosts = ({ t, locale, data }) => {
  const isRecentPosts = true;

  return (
    <StyledRecentPosts>
      <Heading level={4}>{t("Recent posts")}</Heading>

      <ul>
        {data.edges.map(({node}) => (
          <li className="post" key={node.id}>
            <InternalLink className="post-img" href={node?.uri}>
              <img src={node.featuredImage?.node.sourceUrl ? node.featuredImage?.node.sourceUrl : node?.firstImgPost} alt={node?.title} />
            </InternalLink>
            <div className="post-body">
              <InternalLink className="post-title" href={node?.uri}>{node.title}</InternalLink>
              <div className="post-date">
                <DateFormat locale={locale} data={node.date} format="MMMM D, y" isRecentPosts={isRecentPosts} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </StyledRecentPosts>
  );
};

export default RecentPosts;