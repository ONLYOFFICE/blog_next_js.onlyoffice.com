import StyledCategoryTopics from "./styled-category-topics";
import categoryTopics from "@components/utils/data/category-topics";
import InternalLink from "@components/common/internal-link";

const CategoryTopics = ({ t, locale }) => {
  return (
    <StyledCategoryTopics $locale={locale} className="category-topics">
      <h3 className="category-topics-title">{t("Category Topics")}</h3>
      <ul className="category-topics-list">
        {locale !== "cs" && (
          <>
            <li><InternalLink className="product-releases" href={`/category/${categoryTopics[locale].productReleases}`}>{t("Product releases")}</InternalLink></li>
            <li><InternalLink className="for-developers" href={`/category/${categoryTopics[locale].forDevelopers}`}>{t("For developers")}</InternalLink></li>
          </>
        )}
        <li><InternalLink className="for-business" href={`/category/${categoryTopics[locale].forBusiness}`}>{t("For business")}</InternalLink></li>
        {locale !== "cs" && (
          <li><InternalLink className="for-education" href={`/category/${categoryTopics[locale].forEducation}`}>{t("For education")}</InternalLink></li>
        )}
      </ul>
    </StyledCategoryTopics>
  );
};

export default CategoryTopics;
