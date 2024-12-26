import StyledBreadcrumbs from "./styled-breadcrumbs";
import InternalLink from "@components/common/internal-link";

const Breadcrumbs = ({ t, data, isPostPage, isAuthorPage, isInThePressPage, isCategoryPage, isTagPage, isSearchPage, searchQuery, locale, ...rest }) => {
  return (
    <StyledBreadcrumbs {...rest}>
      <li>
        <InternalLink href="/">{t("Blog")}</InternalLink>
      </li>
      &ensp;/&ensp;
      {isPostPage ? (
          data?.map(({ node }, index) => {
            return <li key={node.id}><InternalLink href={`/category/${node?.slug}`}>{node.name}</InternalLink>{index !== data.length - 1 && <>&ensp;/&ensp;</>}</li>
          })
        ) : isAuthorPage ? (
          <li>{data?.edges[0]?.node.author?.node?.name}</li>
        ) : isInThePressPage ? (
          <li>{t("ONLYOFFICE IN THE PRESS")}</li>
        ) : isCategoryPage ? (
          <li>{data?.edges[0]?.node.categories?.nodes[0]?.name}</li>
        ) : isTagPage ? (
          <li>{data?.edges[0]?.node.tags?.nodes[0]?.name}</li>
        ) : isSearchPage ? (
          <li>{`${(locale === "ar" || locale === "zh-hans") ? `'${searchQuery === undefined ? "" : searchQuery}' ${t("Search results for")}` : `${t("Search results for")} '${searchQuery === undefined ? "" : searchQuery}'`}`}</li>
        ) : null
      }
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
