import StyledInThePressContent from "./styled-in-the-press-content";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import Heading from "@components/common/heading";
import LoadMorePosts from "@components/screens/common/load-more-posts";
import RecentPosts from "@components/screens/common/widgets/recent-posts";
import FollowUs from "@components/screens/common/widgets/follow-us";
import Newsletter from "@components/screens/common/newsletter";
import InThePressPost from "./in-the-press-post";

const InThePressContent = ({ t, locale, inThePressPosts, recentPosts, isInThePressContent }) => {
  return (
    <StyledInThePressContent>
      <Breadcrumbs className="breadcrumbs" t={t} isInThePressContent={isInThePressContent} />

      <div className="wrapper">
        <div className="content">
          <Heading className="main-title" level={2}>{t("ONLYOFFICE IN THE PRESS")}</Heading>

          <div className="posts">
            {inThePressPosts.edges.slice(0, 3).map(({node}) => (
              <InThePressPost locale={locale} data={node} key={node.id} />
            ))}

            <Newsletter t={t} />

            {inThePressPosts.edges.slice(3, 5).map(({node}) => (
              <InThePressPost locale={locale} data={node} key={node.id} />
            ))}

            <LoadMorePosts className="in-the-press-load-more" t={t} locale={locale} data={inThePressPosts} isInThePressContent={isInThePressContent} />
          </div>
        </div>

        <div className="sidebar">
          <RecentPosts t={t} locale={locale} data={recentPosts} />
          <FollowUs t={t} locale={locale} />
        </div>
      </div>
    </StyledInThePressContent>
  );
};

export default InThePressContent;
