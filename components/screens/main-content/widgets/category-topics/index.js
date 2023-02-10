import InternalLink from "@components/common/internal-link";
import StyledCategoryTopics from "./styled-category-topics";

const CategoryTopics = ({ t }) => {
  return (
    <StyledCategoryTopics className="category-topics">
      <h4 className="category-topics-title">{t("Category Topics")}</h4>
      <ul className="category-topics-list">
        <li><InternalLink className="product-releases" href="#">{t("Product releases")}</InternalLink></li>
        <li><InternalLink className="for-developers" href="#">{t("For developers")}</InternalLink></li>
        <li><InternalLink className="for-business" href="#">{t("For business")}</InternalLink></li>
        <li><InternalLink className="for-education" href="#">{t("For education")}</InternalLink></li>
      </ul>
    </StyledCategoryTopics>
  );
};

export default CategoryTopics;
