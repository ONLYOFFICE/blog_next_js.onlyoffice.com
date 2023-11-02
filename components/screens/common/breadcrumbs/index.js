import StyledBreadcrumbs from "./styled-breadcrumbs";
import InternalLink from "@components/common/internal-link";

const Breadcrumbs = ({ t, data, isPostContent, isAuthorContent, isInThePressContent, isCategoryContent, isTagContent, isSearchContent, searchQuery, ...rest }) => {
  return (
    <StyledBreadcrumbs {...rest}>
      <li>
        <InternalLink href="/">BLOG</InternalLink>
      </li>
      &ensp;/&ensp;
      {
        isPostContent ?
          <li>
            {data?.map(({node}) => {
              return <span key={node.id}><InternalLink href={`/category/${node?.slug}`}>{node.name}</InternalLink></span>
            })}
          </li>
        :
          isAuthorContent ? <li>{data?.edges[0]?.node.author?.node?.name}</li> 
        :
          isInThePressContent ? <li>ONLYOFFICE IN THE PRESS</li> 
        :
          isCategoryContent ? <li>{data?.edges[0]?.node.categories?.nodes[0]?.name}</li>
        :
          isTagContent ? <li>{data?.edges[0]?.node.tags?.nodes[0]?.name}</li>
        :
          isSearchContent ? <li>{`${t("Search results for")} '${searchQuery === undefined ? "" : searchQuery}'`}</li> 
        : 
          null
      }
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
