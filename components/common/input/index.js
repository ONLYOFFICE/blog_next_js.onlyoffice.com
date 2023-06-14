import StyledInput from "./styled-input";
import Text from "@components/common/text";

const Input = ({ label, type, name, value, onChange, onBlur, errorText, required, placeholder, ...rest }) => {
  return (
    <StyledInput {...rest}>
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

export default Input;
