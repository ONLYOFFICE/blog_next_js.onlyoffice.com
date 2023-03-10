import StyledTag from "./styled-tag";
import InternalLink from "@components/common/internal-link";

const Tag = ({ label, children, href, ...rest }) => {
  return (
    <StyledTag {...rest}>
      <InternalLink href={href}>#{label || children}</InternalLink>
    </StyledTag>
  );
};

export default Tag;
