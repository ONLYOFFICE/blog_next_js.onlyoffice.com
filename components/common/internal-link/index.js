import ExternalLink from "@components/common/external-link";
import PropTypes from "prop-types";
import Link from 'next/link'

const InternalLink = ({
  children,
  href,
  style,
  className,
  label,
  tabIndex,
  ...rest
}) => {
  const linkClassName = className
    ? className + " internal-link"
    : "internal-link";

  return (
    <Link
      href={href}
      style={{ ...style, outline: "none", textDecoration: "none" }}
      className={linkClassName}
      tabIndex={tabIndex}
      {...rest}
    >
      <ExternalLink as="span" tabIndex={tabIndex} {...rest}>
        {children || label}
      </ExternalLink>
    </Link>
  );
};

InternalLink.propTypes = {
  /**  link text color */
  color: PropTypes.string,
  /**  link text font-size */
  fontSize: PropTypes.string,
  /**  link text font-weight */
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**  link text text-transform*/
  textTransform: PropTypes.string,
  /** Used as HTML 'href' property */
  href: PropTypes.string,
  /** Used as HTML 'title' property */
  title: PropTypes.string,
  /**  link text-decoration */
  textDecoration: PropTypes.string,
  /**  link hover text-decoration  */
  hoverTextDecoration: PropTypes.string,
  /** What the  link will trigger when clicked */
  onClick: PropTypes.func,
  /**  link tab index */
  tabIndex: PropTypes.number,
  /** The target attribute specifies where the linked document will open when the link is clicked */
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
  /** Attribute defines the relationship between a linked resource and the current document */
  rel: PropTypes.string,
  /** Accepts id */
  id: PropTypes.string,
  /** Accepts class */
  className: PropTypes.string,
};

InternalLink.defaultProps = {
  fontSize: "14px",
  href: undefined,
  title: undefined,
  rel: "noopener noreferrer",
  tabIndex: -1,
};

export default InternalLink;
