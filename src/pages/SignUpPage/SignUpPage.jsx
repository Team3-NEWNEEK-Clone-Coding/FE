import React from "react";
import {
  Container,
  SignUpButton,
  SignUpContainer,
  SignUpHeader,
  SignUpInputContainer,
  SignUpTerms,
} from "./SignUpPageStyle";

const SignUpPage = () => {
  return (
    <Container>
      <SignUpContainer>
        <SignUpHeader>
          <a className="login-logo" href="/main">
            <img src={`${process.env.PUBLIC_URL}/imgs/new-neek-logo.png`} alt="뉴닉" />
          </a>
        </SignUpHeader>
        <SignUpInputContainer>
          <div className="textfield">
            <input type="text" placeholder="이메일" name="email" class="textfield-input" value="" />
          </div>
          <div className="textfield">
            <input type="password" name="password" class="textfield-input" placeholder="비밀번호 (8자 이상)" value="" />
          </div>
          <div className="textfield">
            <input
              type="password"
              name="passwordConfirm"
              class="textfield-input"
              placeholder="비밀번호 확인 (8자 이상)"
              value=""
            />
          </div>
          <div className="textfield">
            <input type="text" name="name" class="textfield-input" placeholder="닉네임" value="" />
          </div>
        </SignUpInputContainer>
        <SignUpTerms>
          <div className="checkbox">
            <input type="checkbox" id="check-all" name="all" />
            <span>가입을 동의합니다.</span>
          </div>

          <div className="checkbox">
            <input type="checkbox" id="check-all" name="all" />
            <span>클론 코딩 프로젝트에 오신걸 환영합니다.</span>
          </div>

          <a
            className="inputLink"
            href="https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769"
            target="_blank"
            rel="noopener noreferrer"
          >
            약관보기
          </a>
        </SignUpTerms>
        <SignUpButton>
          <button className="signUp-button primary-button">가입하기</button>
        </SignUpButton>
      </SignUpContainer>
    </Container>
  );
};

export default SignUpPage;
