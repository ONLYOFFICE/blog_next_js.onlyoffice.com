import StyledExternalLink from "./styled-external-link";
import PropTypes from "prop-types";

const ExternalLink = ({
    children,
    label,
    className,
    href,
    target,
    rel,
    tabIndex,
    title,
    onClick
  }) => {
  return (
    <StyledExternalLink
      className={className ? `external-link ${className}` : "external-link"}
      href={href}
      target={target}
      rel={rel}
      tabIndex={tabIndex}
      title={title}
      onClick={onClick}
    >
      {children || label}
    </StyledExternalLink>
  );
};

ExternalLink.propTypes = {
  children: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
  rel: PropTypes.string,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  onClick: PropTypes.func
};

ExternalLink.defaultProps = {
  href: "/",
  rel: "noopener noreferrer",
  target: "_blank"
};

export default ExternalLink;
