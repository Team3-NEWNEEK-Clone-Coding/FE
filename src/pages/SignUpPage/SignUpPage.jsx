import React from "react";
import {
  Container,
  SignUpButton,
  SignUpContainer,
  SignUpHeader,
  SignUpInputContainer,
  SignUpTerms,
} from "./SignUpPageStyle";
import Button from "../../components/common/button/Button";
import InputContainer from "../../container/InputContainer";
import EmojiInput from "../../components/common/input/EmojiInput";

const handleEmojiSelect = (emoji) => {
  // 이모지 선택 시 처리 로직
  console.log("선택된 이모지:", emoji);
};

const SignUpPage = () => {
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
      placeholder: "비밀번호 (10자 이상)",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "비밀번호 확인(10자 이상)",
      required: true,
    },
    {
      name: "nickname",
      type: "text",
      placeholder: "닉네임",
      required: true,
    },
  ];

  const handleSubmit = (formData) => {
    // 회원가입 로직
    console.log(formData);
  };

  return (
    <Container>
      <SignUpContainer>
        <SignUpHeader>
          <a className="Sign-logo" href="/">
            <img src={`${process.env.PUBLIC_URL}/imgs/new-neek-logo.png`} alt="뉴닉" />
          </a>
        </SignUpHeader>
        <SignUpInputContainer>
          <div className="InputDiv">
            <InputContainer fields={fields} onSubmit={handleSubmit} />
          </div>
        </SignUpInputContainer>
        <div className="EmojiInputDiv">
          <EmojiInput onEmojiSelect={handleEmojiSelect} /> {/* 이모지 입력 컴포넌트를 렌더링 */}
        </div>
        <SignUpTerms>
          <div className="checkbox">
            <input type="checkbox" id="check-all" name="all" />
            <span className="InputTitle">가입을 동의합니다.</span>
          </div>

          <div className="checkbox">
            <input type="checkbox" id="check-all" name="all" />
            <span className="InputTitle">클론 코딩 프로젝트에 오신걸 환영합니다.</span>

            <a
              className="inputLink"
              href="https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769"
              target="_blank"
              rel="noopener noreferrer"
            >
              약관보기
            </a>
          </div>
        </SignUpTerms>
        <SignUpButton>
          <Button size="xl" theme="SignUpBtn">
            회원가입
          </Button>
        </SignUpButton>
      </SignUpContainer>
    </Container>
  );
};
export default SignUpPage;
