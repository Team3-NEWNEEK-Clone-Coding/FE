import React from "react";
import Button from "../components/common/button/Button";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";

const ButtonContainer = () => {

  return (
    <>
      <div>
        <Button size="sm" theme="DetailPageNewsBtn">
          뉴스레터 구독하기
        </Button>

        <Button size="md" theme="moreBtn" >
          더보기
        </Button>

        <Button size="lg" theme="MainAppDownloadBtn">
          앱 다운로드 하기
        </Button>

        <Button size="lg" theme="NewsLetterBtn">
          뉴스레터 무료로 구독하기
        </Button>

        <Button size="xl" theme="SignUpBtn">
          회원가입
        </Button>

        <Button size="xl" theme="LoginBtn">
          로그인
        </Button>

        <Button size="xxs" theme="UserBtn">
          <BiSearch />
        </Button>

        <Button size="xxs" theme="SearchBtn">
          <BsPerson />
        </Button>

      </div>
    </>

  );
};


export default ButtonContainer;
