import StyledRecentPosts from "./styled-recent-posts";
import Heading from "@components/common/heading";
import Card from "@components/screens/common/card";

const RecentPosts = ({ t, data, locale, ...rest }) => {
  return (
    <StyledRecentPosts $locale={locale} {...rest}>
      <Heading className="recent-posts-title" level={2} size={3}>{t("Recent posts")}</Heading>

      <div className="posts">
        {data?.edges?.map(({node}) => (
          <Card t={t} data={node} key={node.id} locale={locale} />
        ))}
      </div>
    </StyledRecentPosts>
  );
};

export default RecentPosts;
