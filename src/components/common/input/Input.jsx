import React from "react";
import { InputWrapper } from "./InputStyle";

const Input = ({ type, name, value, onChange, required, error, placeholder, maxLength }) => {
  const handleChange = (e) => {
    if (maxLength && e.target.value.length > maxLength) {
      // 만약 최대 글자 수를 초과하면 입력을 막습니다.
      return;
    }
    onChange(e);
  };

  return (
    <InputWrapper>
      <div className="textfield">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </InputWrapper>
  );
};

export default Input;
