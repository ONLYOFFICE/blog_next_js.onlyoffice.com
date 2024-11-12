import StyledInput from "./styled-input";
import PropTypes from "prop-types";
import Text from "@components/common/text";

const Input = ({ className, label, type, name, value, onChange, onBlur, errorText, required, placeholder }) => {
  return (
    <StyledInput className={className}>
      <label htmlFor={name} className="label">
        {label} {required && <span>*</span>}
      </label>
      <input name={name} id={name} type={type} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
      {errorText &&
      <Text className="error-text">
        {errorText}
      </Text>}
    </StyledInput>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  errorText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default Input;
