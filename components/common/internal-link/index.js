import StyledInternalLink from "./styled-internal-link";
import PropTypes from "prop-types";

const InternalLink = ({
    children,
    label,
    className,
    href = "/",
    target,
    tabIndex,
    title,
    locale,
    onClick
  }) => {
  return (
    <StyledInternalLink
      className={`internal-link ${className ? className : ""}`}
      href={href}
      target={target}
      tabIndex={tabIndex}
      title={title}
      locale={locale}
      onClick={onClick}
    >
      {children || label}
    </StyledInternalLink>
  );
};

InternalLink.propTypes = {
  children: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  locale: PropTypes.string,
  onClick: PropTypes.func
};

export default InternalLink;
