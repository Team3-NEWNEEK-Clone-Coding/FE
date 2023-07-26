import React from "react";
import { InputWrapper } from "./InputStyle";

const Input = ({ type, name, value, onChange, required, error, placeholder, maxLength, className }) => {
  const handleChange = (e) => {
    if (maxLength && e.target.value.length > maxLength) {
      // 만약 최대 글자 수를 초과하면 입력을 막습니다.
      return;
    }
    if (typeof onChange === "function") {
      onChange(e);
    }
  };

  return (
    <InputWrapper>
      <div className="textfield">
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          placeholder={placeholder}
          className={className}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </InputWrapper>
  );
};

export default Input;
