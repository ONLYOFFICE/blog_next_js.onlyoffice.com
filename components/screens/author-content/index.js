import StyledAuthorContent from "./styled-author-content";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import Heading from "@components/common/heading";
import LoadMorePosts from "@components/screens/common/load-more-posts";

const AuthorContent = ({ t, currentLanguage, posts, authorContent }) => {
  const isAuthorContent = true;

  return (
    <StyledAuthorContent>
      <Breadcrumbs className="breadcrumbs" t={t} data={posts} isAuthorContent={isAuthorContent} />

      <Heading className="author-title" level={2}>
        {`${t("Author Archives")}: `}
        <span className="author-name">{posts.edges[0]?.node.author?.node?.name}</span>
      </Heading>

      <div className="author-posts">
        <LoadMorePosts t={t} currentLanguage={currentLanguage} data={posts} authorContent={authorContent} />
      </div>
    </StyledAuthorContent>
  );
};

export default AuthorContent;
