import StyledCategoryTopics from "./styled-category-topics";
import InternalLink from "@components/common/internal-link";

const CategoryTopics = ({ t, locale }) => {
  return (
    <StyledCategoryTopics className="category-topics">
      <h4 className="category-topics-title">{t("Category Topics")}</h4>
      <ul className="category-topics-list">
        {
          locale !== "cs" &&
          <>
            <li><InternalLink className="product-releases" href={`/category/${t("productReleasesLink")}`}>{t("Product releases")}</InternalLink></li>
            <li><InternalLink className="for-developers" href={`/category/${t("forDevelopersLink")}`}>{t("For developers")}</InternalLink></li>
          </>
        }
        <li><InternalLink className="for-business" href={`/category/${t("forBusinessLink")}`}>{t("For business")}</InternalLink></li>
        {
          locale !== "cs" && 
          <li><InternalLink className="for-education" href={`/category/${t("forEducationLink")}`}>{t("For education")}</InternalLink></li>
        }
      </ul>
    </StyledCategoryTopics>
  );
};

export default CategoryTopics;
