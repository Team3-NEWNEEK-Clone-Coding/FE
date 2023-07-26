import React from 'react';
import { FooterBannerWrap, FooterBannerLink, FooterBannerCtaArrow } from "./HomeFemaleFooterBannerStyle"

const HomeFemaleFooterBanner = () => {
    return (
        <FooterBannerWrap>
            <aside className="home-female">
                <FooterBannerLink href="https://www.notion.so/11e07b3b430a42a9ac8ed26893029e56" target="_blank" rel="noopener noreferrer">
                    <p>퀴어 프렌들리한 팀을 위한
                        <span className="mobile-block">뉴닉 레인보우 가이드
                            <span role="img" aria-label="">🏳️‍🌈</span>
                        </span>
                    </p>
                    <FooterBannerCtaArrow className="cta-arrow ">
                        <div className="line"></div>
                    </FooterBannerCtaArrow>
                </FooterBannerLink>
            </aside>
            <aside className="home-female">
                <FooterBannerLink href="https://www.notion.so/90eb61e64b18407196422b3405a3bab6" target="_blank" rel="noopener noreferrer">
                    <p>3월 8일에 업데이트된
                        <span className="mobile-block">뉴닉의 여성용어 가이드
                            <span role="img" aria-label="">🍞🌹</span>
                        </span>
                    </p>
                    <FooterBannerCtaArrow className="cta-arrow ">
                        <div className="line"></div>
                    </FooterBannerCtaArrow>
                </FooterBannerLink>
            </aside>
        </FooterBannerWrap>
    )
}

export default HomeFemaleFooterBanner
