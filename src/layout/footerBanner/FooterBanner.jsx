import React from 'react';
import { FooterBannerWrap, HomeFemaleFooterBanner, FooterStatics } from './FooterBannerStyle';

const FooterBanner = () => {
  return (
    <FooterBannerWrap>
      <HomeFemaleFooterBanner>
        <a href="https://www.notion.so/11e07b3b430a42a9ac8ed26893029e56" target="_blank" rel="noopener noreferrer">
          <p>퀴어 프렌들리한 팀을 위한
            <span className="mobile-block">뉴닉 레인보우 가이드
              <span role="img" aria-label="">🏳️‍🌈</span>
            </span>
          </p>
          <div className="cta-arrow ">
            <div className="line"></div>
          </div>
        </a>
      </HomeFemaleFooterBanner>
      <HomeFemaleFooterBanner>
        <a href="https://www.notion.so/90eb61e64b18407196422b3405a3bab6" target="_blank" rel="noopener noreferrer">
          <p>3월 8일에 업데이트된
            <span className="mobile-block">뉴닉의 여성용어 가이드
              <span role="img" aria-label="">🍞🌹</span>
            </span>
          </p>
          <div className="cta-arrow ">
            <div className="line"></div>
          </div>
        </a>
      </HomeFemaleFooterBanner>
      <HomeFemaleFooterBanner>
        <FooterStatics href="/">
          <p className='footer-banner-text'>
            <span className="mobile-block">오늘까지 <b>588회</b> 뉴스레터를 발행했고&nbsp;</span>
            <b>557,027명</b>이 구독했어요!
          </p>
          <div className="cta-arrow ">
            <div className="line"></div>
          </div>
          <div className="hover-area marquee is-right">
            {
              Array(24)
                .fill('뉴스레터 구독하기')
                .map((value) => <p aria-hidden="true">{value}</p>)
            }
          </div>
        </FooterStatics>
      </HomeFemaleFooterBanner>
    </FooterBannerWrap>
  )
}

export default FooterBanner