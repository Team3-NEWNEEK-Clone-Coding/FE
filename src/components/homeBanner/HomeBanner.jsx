import React from 'react';
import { HomeBannerStyle, BannerImgWrap, BannerTextBox, ArrowRight } from './homeBannerStyle';

const HomeBanner = () => {
    return (
        <HomeBannerStyle href="https://app.newneek.co/">
            <BannerImgWrap>
                <img src={`${process.env.PUBLIC_URL}/imgs/gosum-banner.png`} alt="" />
                <img
                    src={`${process.env.PUBLIC_URL}/imgs/gosum-banner-hover.png`}
                    className="hover-img"
                    alt=""
                />
            </BannerImgWrap>
            <BannerTextBox>
                더 편하게 보고싶다면? 뉴닉 앱에서 만나요!
                <ArrowRight>
                    <span className="arrow"></span>
                </ArrowRight>
            </BannerTextBox>
        </HomeBannerStyle>
    );
};

export default HomeBanner;
