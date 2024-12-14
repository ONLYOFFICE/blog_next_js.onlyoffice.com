import StyledCategoryContent from "./styled-category-content";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import Heading from "@components/common/heading";
import Card from "@components/screens/common/card";
import Newsletter from "@components/screens/common/newsletter";
import DownloadBlock from "@components/screens/common/download-block";
import LoadMorePosts from "@components/screens/common/load-more-posts";

const CategoryContent = ({ t, locale, posts, isCategoryPage, categoryName, categorySlug }) => {
  const firstPosts = posts?.edges.length > 6 ? posts?.edges.slice(0, 6) : posts?.edges

  return (
    <StyledCategoryContent>
      <Breadcrumbs className="breadcrumbs" t={t} data={posts} isCategoryPage={isCategoryPage} />
      <Heading className="category-title" level={1}>{categoryName}</Heading>

      <div className="category-posts">
        {firstPosts?.map(({node}) => (
          <Card data={node} key={node.id} locale={locale} />
        ))}

        <DownloadBlock className="download-block" t={t} locale={locale} />

        {posts?.edges.length > 6 && posts?.edges.slice(6, 12).map(({node}) => (
          <Card data={node} key={node.id} locale={locale} />
        ))}

        <Newsletter t={t} locale={locale} />

        {posts?.edges.length > 12 && (
          posts?.edges.slice(12, 15).map(({node}) => (
            <Card data={node} key={node.id} locale={locale} />
          ))
        )}

        <LoadMorePosts t={t} locale={locale} data={posts} isCategoryPage={isCategoryPage} categorySlug={categorySlug} />
      </div>
    </StyledCategoryContent>
  );
};

export default CategoryContent;