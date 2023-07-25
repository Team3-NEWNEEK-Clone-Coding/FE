import React, { useState } from "react";
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
// import EmojiPicker from "./Emojipicker";

// const handleEmojiSelect = (emoji) => {
//   // 이모지 선택 시 처리 로직
//   console.log("선택된 이모지:", emoji);
// };

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "이메일",
      required: true,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      name: "password",
      type: "password",
      placeholder: "비밀번호 (6 ~ 15자 이상)",
      required: true,
      onChange: (e) => setPassword(e.target.value),
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "비밀번호 확인(6 ~15자 이상)",
      required: true,
      onChange: (e) => setConfirmPassword(e.target.value),
    },
    {
      name: "nickname",
      type: "text",
      placeholder: "닉네임",
      required: true,
      onChange: (e) => setNickname(e.target.value),
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
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/check-email`, {
        email,
      });
      if (response.data.isDuplicate) {
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    const formData = { email, nickname, password, confirmPassword };

    try {
      // }
      const formData = {
        userEmail: email,
        userPassword: password,
        nickname: nickname,
        // emoji: "🦔", // I'm not sure where this comes from
      };
      console.log(formData);
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/auth/signup`, formData);
      console.log(response);

      if (response.status === 200) {
        if (response.data) {
          const token = response.data.token;
          localStorage.setItem("accessToken", token);
          alert("회원가입 성공!");
          navigate("/login");
          console.log(response);
        }
      }
    } catch (error) {
      console.log(error.response.data.msg);
      alert(error.response.data.msg);
    }
  };

  return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        {/* <button>버튼</button> */}

        <SignUpContainer onSubmit={handleSubmit}>
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
          {/* <div className="EmojiPickerDiv"> */}
          {/* <EmojiPicker onEmojiSelect={handleEmojiSelect} /> */}
          {/* </div> */}
          <SignUpTerms>
            <div className="checkbox">
              <input type="checkbox" id="check-all-1" name="all" />
              <span className="InputTitle">가입을 동의합니다.</span>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="check-all-2" name="all" />
              <span className="InputTitle">클론 코딩 프로젝트에 오신걸 환영합니다.!</span>
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
            <Button size="xl" theme="SignUpBtn" type="submit">
              회원가입
            </Button>
            <Button size="md" theme="moreBtn" type="submit">
              더보기
            </Button>
          </SignUpButton>
        </SignUpContainer>
      </form>
    </Container>
  );
};

export default SignUpPage;
