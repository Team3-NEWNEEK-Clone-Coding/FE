import React, { useState } from 'react';
import Input from '../components/common/input/Input';

const InputContainer = ({ fields, onSubmit }) => {
  const initialFormData = fields.reduce((obj, field) => ({ ...obj, [field.name]: '' }), {});
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState({});
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'nickname' && value.length > 10) {
      return;
    }

    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError('');
    }

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}/.test(formData.password)) {
      setPasswordError(
        '비밀번호는 숫자, 소문자, 대문자를 포함하여 6~15자여야 합니다.'
      );
      return;
    }

    onSubmit(formData);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <Input
          key={`${field.name}-${index}`}
          type={field.type}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          required={field.required}
          placeholder={field.placeholder}
          error={error[field.name === 'password' ? 'passwordError' : error[field.name]]}
          maxLength={field.maxLength}
          className={field.className}
        />
      ))}
      <button type="submit" onClick={handleFormSubmit}>
        Submit
      </button>
    </div>
  );
};

export default InputContainer;
