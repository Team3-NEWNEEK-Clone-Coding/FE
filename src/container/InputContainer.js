import React, { useState } from 'react';
import InputWrapper from '../components/common/input/InputStyle';
import Input from '../components/common/input/Input';


const InputContainer = () => {
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    password: '',
    value: '',
    confirmPassword: '',
  });

  const handleNicknameChange = (e) => {
    const { name, value } = e.target;

    // 닉네임 글자 수를 체크하여 3자 이상 8자 이하로 제한
    if (name === 'nickname' && value.length > 10) {
      return;
    }

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setPasswordError('');
  };


  const handleSubmit = (e) => {
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

    // Here you can perform your signup logic with the form data
    console.log(formData);
  };

  const showMainInput = false;
  const showMainNicknameInput = false;
  const showMainSearchInput = false;

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <div className="textfield">
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='이메일'
            required
          />
        </div>
      </InputWrapper>

      <InputWrapper>
        <div className="textfield">
          <Input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleNicknameChange}
            placeholder='닉네임'
            required
          />
        </div>
      </InputWrapper>

      <InputWrapper>
        <div className="textfield">
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handlePasswordChange}
            required
            placeholder='비밀번호'
            error={passwordError}
          />
        </div>
      </InputWrapper>
      <InputWrapper>
        <div className="textfield">
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder='비밀번호 확인'
            onChange={handlePasswordChange}
            required
            error={passwordError}
          />
        </div>
      </InputWrapper>

      {showMainInput && (
        <InputWrapper>
          <div className="mainInput">
            <Input
              type="text"
              value=""
              placeholder='이메일 주소'
            />
          </div>
        </InputWrapper>
      )}


      {showMainNicknameInput && (
        <InputWrapper>
          <div className="mainInput">
            <Input
              type="text"
              value=""
              placeholder='닉네임'
            />
          </div>
        </InputWrapper>
      )}

      {showMainSearchInput && (
        <InputWrapper>
          <div className="SearchInput">
            <Input
              type="text"
              value=""
              placeholder='고슴아 이게 궁금해.(인물, 이슈)'
            />
          </div>
        </InputWrapper>
      )}

    </form>
  );
};

export default InputContainer;
