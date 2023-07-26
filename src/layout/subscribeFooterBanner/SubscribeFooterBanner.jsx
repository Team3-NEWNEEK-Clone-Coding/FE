import React from 'react';
import { FooterBannerCtaArrow } from '../homeFemaleFooterBanner/HomeFemaleFooterBannerStyle';
import { FooterBannerAside, FooterStatics } from './SubscribeFooterBannerStyle';
import { useSelector } from 'react-redux';
const SubscribeFooterBanner = () => {
    const { subscriber } = useSelector((state) => {
        return state.subscriber;
    });
    return (
        <FooterBannerAside>
            <FooterStatics href="/">
                <p className="footer-banner-text">
                    <span className="mobile-block">
                        오늘까지 <b>588회</b> 뉴스레터를 발행했고&nbsp;
                    </span>
                    <b>{`${subscriber}명`}</b>이 구독했어요!
                </p>
                <FooterBannerCtaArrow className="cta-arrow ">
                    <div className="line"></div>
                </FooterBannerCtaArrow>
                <div className="hover-area marquee is-right">
                    {Array(24)
                        .fill('뉴스레터 구독하기')
                        .map((value, index) => (
                            <p key={index} aria-hidden="true">
                                {value}
                            </p>
                        ))}
                </div>
            </FooterStatics>
        </FooterBannerAside>
    );
};

export default SubscribeFooterBanner;
