import StyledCategoryTopics from "./styled-category-topics";
import categoryTopics from "@components/utils/data/category-topics";
import InternalLink from "@components/common/internal-link";

const CategoryTopics = ({ t, locale }) => {
  const topics = categoryTopics[locale] || {};

  return (
    <StyledCategoryTopics $locale={locale} className="category-topics">
      <h3 className="category-topics-title">{t("Category Topics")}</h3>
      <ul className="category-topics-list">
        {topics.OO16thAnniversary && (
          <li><InternalLink className="oo-16th-anniversary" href={`/category/${topics.OO16thAnniversary}`}>{t("ONLYOFFICE 16th Anniversary")}</InternalLink></li>
        )}
        {topics.productReleases && (
          <li><InternalLink className="product-releases" href={`/category/${topics.productReleases}`}>{t("Product releases")}</InternalLink></li>
        )}
        {topics.forDevelopers && (
          <li><InternalLink className="for-developers" href={`/category/${topics.forDevelopers}`}>{t("For developers")}</InternalLink></li>
        )}
        {topics.forBusiness && (
          <li><InternalLink className="for-business" href={`/category/${topics.forBusiness}`}>{t("For business")}</InternalLink></li>
        )}
        {topics.forEducation && (
          <li><InternalLink className="for-education" href={`/category/${topics.forEducation}`}>{t("For education")}</InternalLink></li>
        )}
      </ul>
    </StyledCategoryTopics>
  );
};

export default CategoryTopics;
