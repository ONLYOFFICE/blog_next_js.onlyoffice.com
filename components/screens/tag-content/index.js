import StyledTagContent from "./styled-tag-content";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import Heading from "@components/common/heading";
import LoadMorePosts from "@components/screens/common/load-more-posts";

const TagContent = ({ t, locale, posts, isTagPage, tagName, tagSlug }) => {
  return (
    <StyledTagContent>
      <Breadcrumbs className="breadcrumbs" t={t} data={posts} isTagPage={isTagPage} />

      <Heading className="tag-title" level={1} size={2}>
        {`${t("Tag Archives")}: `}
        <span className="tag-name">{`#${tagName}`}</span>
      </Heading>

      <div className="tag-posts">
        <LoadMorePosts t={t} locale={locale} data={posts} isTagPage={isTagPage} tagSlug={tagSlug}/>
      </div>
    </StyledTagContent>
  );
};

export default TagContent;
