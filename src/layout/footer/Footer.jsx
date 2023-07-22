import React from 'react';
import { StFooter, StFooterAddress, StFooterSitemap, StFooterAddressInfo, StFooterCopyright } from './FooterStyle';

const Footer = () => {
    return (
        <StFooter role="contentinfo">
            <StFooterAddress>
                <a className="footer-address-logo" href="/">
                    <img src={`${process.env.PUBLIC_URL}/imgs/new-neek-logo.png`} alt="뉴닉" />
                </a>
            </StFooterAddress>
            <StFooterSitemap>
                <div className="footer-sitemap-item">
                    <a className="footer-sitemap-item-link" href="/about">뉴닉탄생기</a>
                    <a href="https://newneek-app.channel.io/" className="footer-sitemap-item-link" target="_blank" rel="noopener noreferrer">고객센터</a>
                    <a className="footer-sitemap-item-link" href="/partnership">제휴 문의</a>
                    <a href="https://www.instagram.com/newneek.official" target="_blank" rel="noopener noreferrer" className="footer-sitemap-item-link">인스타그램</a>
                </div>
                <div className="footer-sitemap-item">
                    <a href="https://withall.newneek.co/" target="_blank" rel="noopener noreferrer" className="footer-sitemap-item-link">모두와 함께, 뉴닉</a>
                    <a href="https://mmgh.newneek.co/" target="_blank" rel="noopener noreferrer" className="footer-sitemap-item-link">물물교환</a>
                    <a href="https://webuildup.newneek.co" target="_blank" rel="noopener noreferrer" className="footer-sitemap-item-link">여성의 날</a>
                    <a href="https://napp.newneek.co/2020election" target="_blank" rel="noopener noreferrer" className="footer-sitemap-item-link">2020 총선</a>
                </div>
                <div className="footer-sitemap-item">
                    <a href="https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769" className="footer-sitemap-item-link" target="_blank" rel="noopener noreferrer">
                        <span className="">서비스이용약관</span>
                    </a>
                    <a href="https://newneek.notion.site/ec39ad284cfa4b7390fff1366236dc19" className="footer-sitemap-item-link" target="_blank" rel="noopener noreferrer">
                        <strong>개인정보처리방침</strong>
                    </a>
                </div>
            </StFooterSitemap>
            <StFooterAddressInfo>
                ㈜뉴닉 / 대표: 김소연 / 사업자등록번호: 632-81-01159 / 대표전화: 02-6952-1807 / 통신판매번호: 2020-서울마포-2938 / 개인정보보호책임자: 김소연 / 담당자메일주소: whatsup@newneek.co
                <br />
                서울특별시 마포구 어울마당로 35, 5층 (04048)
                <br />
                <p>근무시간이 일정하지 않아 전화대신 고객센터를 이용해주세요!</p>
            </StFooterAddressInfo>
            <StFooterCopyright>ⓒ NEWNEEK Co., Ltd. 2018-2020.</StFooterCopyright>
            <a href="/build" style={{ display: 'none' }}>.</a>
        </StFooter>
    );
};

export default Footer;
