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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EmojiPicker from "./Emojipicker";

const handleEmojiSelect = (emoji) => {
  // 이모지 선택 시 처리 로직
  console.log("선택된 이모지:", emoji);
};

const SignUpPage = () => {
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
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "비밀번호 확인(8자 이상)",
      required: true,
    },
    {
      name: "nickname",
      type: "text",
      placeholder: "닉네임",
      required: true,
    },
  ];
  const isEmailValid = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const isNicknameValid = (nickname) => {
    return nickname.length >= 3 && nickname.length <= 10;
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,15}$/;
    return passwordRegex.test(password);
  };

  const isEmailDuplicate = async (email) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/check-email`, { email });
      if (response.data.isDuplicate) {
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const handleSubmit = async (formData) => {
    try {
      const { email, nickname, password, confirmPassword } = formData;

      if (!isEmailValid(email)) {
        alert("유효하지 않은 이메일 형식입니다.");
        return;
      }

      if (!isNicknameValid(nickname)) {
        alert("닉네임은 5자 이상 12자 이하로 입력해주세요.");
        return;
      }

      if (!isPasswordValid(password)) {
        alert("비밀번호는 영문 소문자와 숫자를 포함한 10~15자리로 입력해주세요.");
        return;
      }

      if (password !== confirmPassword) {
        alert("비밀번호와 확인 비밀번호가 일치하지 않습니다.");
        return;
      }

      if (await isEmailDuplicate(email)) {
        alert("이미 가입된 이메일입니다.");
        return;
      }

      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, formData);
      console.log(response);

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("accessToken", token);
        alert("회원가입 성공!");
        navigate("/login");
        console.log(response);
      }
    } catch (error) {
      alert("회원가입 실패!");
    }
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
        <div className="EmojiPickerDiv">
          <EmojiPicker onEmojiSelect={handleEmojiSelect} />
        </div>
        <SignUpTerms>
          <div className="checkbox">
            <input type="checkbox" id="check-all-1" name="all" />
            <span className="InputTitle">가입을 동의합니다.</span>
          </div>

          <div className="checkbox">
            <input type="checkbox" id="check-all-2" name="all" />
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
          <Button size="xl" theme="SignUpBtn" onClick={() => handleSubmit()}>
            회원가입
          </Button>
        </SignUpButton>
      </SignUpContainer>
    </Container>
  );
};

export default SignUpPage;
