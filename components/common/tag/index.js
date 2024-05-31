import StyledTag from "./styled-tag";
import PropTypes from "prop-types";
import InternalLink from "@components/common/internal-link";

const Tag = ({ label, children, href}) => {
  return (
    <StyledTag>
      <InternalLink href={href}>#{label || children}</InternalLink>
    </StyledTag>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
};

export default Tag;
