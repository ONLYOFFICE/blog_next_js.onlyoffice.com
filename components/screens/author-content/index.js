import StyledAuthorContent from "./styled-author-content";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import Heading from "@components/common/heading";
import LoadMorePosts from "@components/screens/common/load-more-posts";

const AuthorContent = ({ t, locale, posts, isAuthorPage, authorName, authorSlug }) => {
  return (
    <StyledAuthorContent>
      <Breadcrumbs className="breadcrumbs" t={t} data={posts} isAuthorPage={isAuthorPage} />

      <Heading className="author-title" level={2}>
        {`${t("Author Archives")}: `}
        <span className="author-name">{authorName}</span>
      </Heading>

      <div className="author-posts">
        <LoadMorePosts t={t} locale={locale} data={posts} isAuthorPage={isAuthorPage} authorSlug={authorSlug} />
      </div>
    </StyledAuthorContent>
  );
};

export default AuthorContent;
