import StyledRecentPosts from "./styled-recent-posts";
import Heading from "@components/common/heading";
import Card from "@components/screens/common/card";

const RecentPosts = ({ t, data, currentLanguage, ...rest }) => {
  return (
    <StyledRecentPosts {...rest}>
      <Heading level={3}>{t("Recent posts")}</Heading>

      <div className="posts">
        {data?.edges?.map(({node}) => (
          <Card data={node} key={node.id} currentLanguage={currentLanguage} />
        ))}
      </div>
    </StyledRecentPosts>
  );
};

export default RecentPosts;
