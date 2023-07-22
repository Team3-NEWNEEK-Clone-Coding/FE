import React from 'react';
import { HeaderBannerStyle, IntroContentBox, NewsLetterForm } from './HeaderBannerStyle';

const HeaderBanner = () => {
    return (
        <HeaderBannerStyle>
            <div className="img-wrap">
                <img src={`${process.env.PUBLIC_URL}/imgs/gosum-home.png`} alt="" />
            </div>
            <h1>
                <div className="intro-inner">우리가 시간이 없지, 세상이 안 궁금하냐!</div>
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
                    <NewsLetterForm action="">
                        <input type="text" />
                        <input type="text" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <dis className="button-wrap">
                            <button>뉴스레터 무료로 구독하기</button>
                            <button>앱 다운로드하기</button>
                        </dis>
                    </NewsLetterForm>
                </div>
            </IntroContentBox>
        </HeaderBannerStyle>
    );
};

export default HeaderBanner;
