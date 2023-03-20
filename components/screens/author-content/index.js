import StyledAuthorContent from "./styled-author-content";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import Heading from "@components/common/heading";
import LoadMorePosts from "@components/screens/common/load-more-posts";

const AuthorContent = ({ t, currentLanguage, posts, isAuthorContent, authorName }) => {
  return (
    <StyledAuthorContent>
      <Breadcrumbs className="breadcrumbs" t={t} data={posts} isAuthorContent={isAuthorContent} />

      <Heading className="author-title" level={2}>
        {`${t("Author Archives")}: `}
        <span className="author-name">{authorName}</span>
      </Heading>

      <div className="author-posts">
        <LoadMorePosts t={t} currentLanguage={currentLanguage} data={posts} isAuthorContent={isAuthorContent} />
      </div>
    </StyledAuthorContent>
  );
};

export default AuthorContent;
