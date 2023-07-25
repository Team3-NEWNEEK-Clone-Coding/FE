import React from "react";
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
  const navigate = useNavigate();
  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "이메일",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "비밀번호 (8자 이상)",
      required: true,
      autoComplete: "current-password",
    },
  ];

  const loginSubmit = async (formData) => {
    try {
      // 로그인 요청 보내기
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, formData);

      // 로그인 성공한 경우 JWT 토큰을 localStorage에 저장
      if (response.status === 200) {
        const token = response.data.token; // 서버에서 토큰을 어떤 필드로 보내는지에 따라 수정해야 할 수도 있습니다.
        localStorage.setItem("accessToken", token);
        console.log("로그인 성공!");
        navigate.push("/");
      }
    } catch (error) {
      console.log("로그인 실패!");
    }
  };

  return (
    <Container>
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
            <InputContainer fields={fields} onSubmit={loginSubmit} />
          </div>
        </LoginInputContainer>
        <div className="forgotPw">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
        <Button size="xl" theme="LoginBtn" onClick={loginSubmit}>
          로그인
        </Button>
        <div className="SignBtn">
          <Link to="/signup">회원가입 하기</Link>
        </div>
        <LoginContainer />
      </LoginContainer>
    </Container>
  );
};

export default LoginPage;
