import React from 'react';
import { HeaderBannerStyle, IntroContentBox, NewsLetterForm } from './HeaderBannerStyle';
import Input from '../common/input/Input';
import CheckBoxInput from '../common/checkBoxInput/CheckBoxInput';
import Button from '../common/button/Button';
const HeaderBanner = ({
    onSubmitEvent,
    email,
    nickName,
    checkbox,
    checkbox2,
    emailError,
    nickNameError,
    checkboxError,
    checkboxError2,
    onChangeEmailHandler,
    onChangeNickNameHandler,
    onChangeCheckBoxHandler,
    onChangeCheckBoxHandler2,
}) => {
    return (
        <HeaderBannerStyle>
            <div className="img-wrap">
                <img src={`${process.env.PUBLIC_URL}/imgs/gosum-home.png`} alt="" />
            </div>
            <h1>
                <div className="intro-inner">
                    우리가 시간이 없지, <span>세상이 안 궁금하냐!</span>
                </div>
            </h1>
            <IntroContentBox>
                <div className="intro-content-inner">
                    <p>
                        ✨지금 <span className="font-bold">{`887,074`}명</span>이 뉴닉을 읽고 있어요
                    </p>
                    <p className="intro-text">
                        세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은
                        아니잖아요!
                        <br />
                        월/화/수/목/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.
                    </p>
                    <NewsLetterForm action="" onSubmit={onSubmitEvent}>
                        <Input
                            type={'text'}
                            name={'email'}
                            value={email}
                            onChange={onChangeEmailHandler}
                            placeholder={'이메일 주소'}
                            className="mainInput"
                        />
                        {emailError && <small className="textfield-helper">{emailError}</small>}
                        <Input
                            type={'text'}
                            name={'닉네임'}
                            value={nickName}
                            onChange={onChangeNickNameHandler}
                            placeholder={'닉네임'}
                            className="mainInput"
                        />
                        {nickNameError && (
                            <small className="textfield-helper">{nickNameError}</small>
                        )}
                        <CheckBoxInput
                            labelForId={'check1'}
                            checked={checkbox}
                            onChange={onChangeCheckBoxHandler}
                        >
                            <span className="text-line">개인정보 수집·이용</span>에 동의합니다
                        </CheckBoxInput>
                        {checkboxError && (
                            <small className="textfield-helper">{checkboxError}</small>
                        )}
                        <CheckBoxInput
                            labelForId={'check2'}
                            checked={checkbox2}
                            onChange={onChangeCheckBoxHandler2}
                        >
                            <span className="text-line">광고성 정보 수신</span>에 동의합니다
                        </CheckBoxInput>
                        {checkboxError2 && (
                            <small className="textfield-helper">{checkboxError2}</small>
                        )}
                        <div className="button-wrap">
                            <Button theme={'NewsLetterBtn'} type="submit">
                                뉴스레터 무료로 구독하기
                            </Button>
                            <Button theme={'MainAppDownloadBtn'}>앱 다운로드하기</Button>
                        </div>
                    </NewsLetterForm>
                </div>
            </IntroContentBox>
        </HeaderBannerStyle>
    );
};

export default HeaderBanner;
