import React, { useState } from "react";
import InputContainer from "../../container/InputContainer";
import { useNavigate, Link } from "react-router-dom";

import {
  Container,
  LoginContainer,
  LoginDivider,
  LoginHeader,
  LoginInputContainer,
  LoginSocialDiv,
} from "./LoginPageStyle";
import Button from "../../components/common/button/Button";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    console.log("Email input: ", e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log("Password input: ", e.target.value);
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    if (name === "email") handleEmailChange({ target: { value } });
    if (name === "password") handlePasswordChange({ target: { value } });
  };

  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "이메일",
      required: true,
      onChange: (e) => handleEmailChange("email", e.target.value),
    },
    {
      name: "password",
      type: "password",
      placeholder: "비밀번호 (6 ~ 15자 이상)",
      required: true,
      autoComplete: "current-password",
      onChange: (e) => handlePasswordChange("password", e.target.value),
    },
  ];

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const sendData = {
        userEmail: email,
        userPassword: password,
      };
      console.log(sendData);
      // 로그인 요청 보내기
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/auth/login`, sendData);
      console.log(response);

      // 로그인 성공한 경우 JWT 토큰을 localStorage에 저장
      if (response.status === 200) {
        const token = response.headers.authorization; // 서버에서 토큰을 어떤 필드로 보내는지에 따라 수정해야 할 수도 있습니다.

        console.log(response.data);

        localStorage.setItem("accessToken", token);
        alert("로그인 되었습니다.");
        navigate("/");
      }
    } catch (error) {
      alert("이메일과 비밀번호를 다시 확인 해주세요.");
    }
  };

  return (
    <Container>
      <form action="" onSubmit={loginSubmit}>
        <LoginContainer>
          <LoginHeader>
            <a className="Login-logo" href="/">
              <img src={`${process.env.PUBLIC_URL}/imgs/new-neek-logo.png`} alt="뉴닉" />
            </a>
          </LoginHeader>
          <LoginSocialDiv>
            <button className="SocialBtn">
              <span className="logo">
                <img src={`${process.env.PUBLIC_URL}/imgs/logo-google.png`} alt="구글" />
              </span>
              구글로 시작하기
            </button>
          </LoginSocialDiv>
          <LoginDivider />
          <LoginInputContainer>
            <div className="LoginDiv">
              <InputContainer fields={fields} onChange={handleInputChange} onSubmit={loginSubmit} />
            </div>
          </LoginInputContainer>
          <div className="forgotPw">
            <Link to="#">비밀번호를 잊으셨나요?</Link>
          </div>
          <Button size="xl" theme="LoginBtn" type="submit">
            로그인
          </Button>
          <div className="SignBtn">
            <Link to="/signup">회원가입 하기</Link>
          </div>
        </LoginContainer>
      </form>
    </Container>
  );
};

export default LoginPage;
