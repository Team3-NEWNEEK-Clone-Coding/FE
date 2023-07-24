import React from "react";
import InputContainer from "../../container/InputContainer";
import {
  Container,
  LoginContainer,
  LoginDivider,
  LoginHeader,
  LoginInputContainer,
  LoginSocialDiv,
} from "./LoginPageStyle";
import Button from "../../components/common/button/Button";

const LoginPage = () => {
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
    },
  ];

  const loginSubmit = (formData) => {
    // 회원가입 로직
    console.log(formData);
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
        <Button size="xl" theme="LoginBtn" onClick={() => console.log("로그인 버튼 클릭")}>
          로그인
        </Button>
        <div className="SignBtn">
          <a href="/signup">회원가입 하기</a>
        </div>
        <LoginContainer />
      </LoginContainer>
    </Container>
  );
};

export default LoginPage;
