import StyledRecentPosts from "./styled-recent-posts";
import Moment from "moment";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";

const RecentPosts = ({ t, data }) => {
  console.log(data)
  return (
    <StyledRecentPosts>
      <Heading level={4}>{t("Recent Posts")}</Heading>

      <ul>
        {data.edges.map(({node}) => (
          <li className="post" key={node.id}>
            <InternalLink className="post-img" href={node?.uri}>
              {
                node.featuredImage?.node.sourceUrl ?
                  <img src={node.featuredImage?.node?.sourceUrl} alt={node?.title} />
                :
                  <img src={node?.firstImgPost} alt={node?.title} />
              }
            </InternalLink>
            <div className="post-body">
              <InternalLink className="post-title" href={node?.uri}>{node.title}</InternalLink>
              <div className="post-date">{Moment(node.date).format("MMMM D, y")}</div>
            </div>
          </li>
        ))}
      </ul>
    </StyledRecentPosts>
  );
};

export default RecentPosts;