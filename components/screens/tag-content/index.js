import StyledTagContent from "./styled-tag-content";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import Heading from "@components/common/heading";
import LoadMorePosts from "@components/screens/common/load-more-posts";

const TagContent = ({ t, currentLanguage, posts, isTagContent, tagName }) => {
  return (
    <StyledTagContent>
      <Breadcrumbs className="breadcrumbs" t={t} data={posts} isTagContent={isTagContent} />

      <Heading className="tag-title" level={2}>
        {`${t("Tag Archives")}: `}
        <span className="tag-name">{`#${tagName}`}</span>
      </Heading>

      <div className="tag-posts">
        <LoadMorePosts t={t} currentLanguage={currentLanguage} data={posts} isTagContent={isTagContent} />
      </div>
    </StyledTagContent>
  );
};

export default TagContent;
