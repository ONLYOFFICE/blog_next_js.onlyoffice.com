import PropTypes from "prop-types";
import StyledText from "./styled-text";

const Text = ({
    as,
    label,
    children,
    className,
    color,
    fontSize,
    fontWeight,
    lineHeight,
    onClick
  }) => {
  return (
    <StyledText
      as={as ? as : "span"}
      className={className}
      colorProps={color}
      fontSizeProps={fontSize}
      fontWeightProps={fontWeight}
      lineHeightProps={lineHeight}
      onClick={onClick}
    >
      {label || children}
    </StyledText>
  );
};

Text.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOf([300, 400, 500, 600, 700, 800]),
  lineHeight: PropTypes.string,
  as: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

export default Text;
