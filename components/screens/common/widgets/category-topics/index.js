import StyledCategoryTopics from "./styled-category-topics";
import InternalLink from "@components/common/internal-link";

const CategoryTopics = ({ t }) => {
  return (
    <StyledCategoryTopics className="category-topics">
      <h4 className="category-topics-title">{t("Category Topics")}</h4>
      <ul className="category-topics-list">
        <li><InternalLink className="product-releases" href="/category/product-releases">{t("Product releases")}</InternalLink></li>
        <li><InternalLink className="for-developers" href="/category/for-developers">{t("For developers")}</InternalLink></li>
        <li><InternalLink className="for-business" href="/category/for-business">{t("For business")}</InternalLink></li>
        <li><InternalLink className="for-education" href="/category/for-education">{t("For education")}</InternalLink></li>
      </ul>
    </StyledCategoryTopics>
  );
};

export default CategoryTopics;
