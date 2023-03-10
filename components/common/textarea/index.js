import StyledTextarea from "./styled-textarea";
import Text from "@components/common/text";

const Textarea = ({ label, type, name, value, onChange, errorText, required, ...rest }) => {
  return (
    <StyledTextarea {...rest}>
      <label htmlFor={name} className="label">
        {label} {required && <span>*</span>}
      </label>

      <textarea name={name} id={name} type={type} value={value} onChange={onChange} />

      {errorText &&
      <Text className="error-text">
        {errorText}
      </Text>}
    </StyledTextarea>
  );
};

export default Textarea;
