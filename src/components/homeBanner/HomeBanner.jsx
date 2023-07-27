import React from 'react';
import { HomeBannerStyle, BannerImgWrap, BannerTextBox, ArrowRight } from './HomeBannerStyle';

const HomeBanner = ({ $margin, $borderBottom }) => {
    return (
        <HomeBannerStyle
            href="https://app.newneek.co/"
            $margin={$margin}
            $borderBottom={$borderBottom}
        >
            <BannerImgWrap>
                <img
                    src={`${process.env.PUBLIC_URL}/imgs/gosum-banner.png`}
                    alt="gosum-banner-hover-before"
                    width="300"
                    height="188"
                    loading="lazy"
                    decoding="async"
                />
                <img
                    src={`${process.env.PUBLIC_URL}/imgs/gosum-banner-hover.png`}
                    className="hover-img"
                    alt="gosum-banner-hover-after"
                    width="300"
                    height="188"
                    loading="lazy"
                    decoding="async"
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
