import React from 'react';
import {
    StFooter,
    StFooterAddress,
    StFooterSitemap,
    StFooterAddressInfo,
    StFooterCopyright,
} from './FooterStyle';

const Footer = () => {
    return (
        <StFooter role="contentinfo">
            <StFooterAddress>
                <a className="footer-address-logo" href="/">
                    <img
                        src={`${process.env.PUBLIC_URL}/imgs/new-neek-logo.png`}
                        alt="뉴닉"
                        width="226"
                        height="32"
                    />
                </a>
            </StFooterAddress>
            <StFooterSitemap>
                <div className="footer-sitemap-item">
                    <a className="footer-sitemap-item-link" href="/about">
                        뉴닉탄생기
                    </a>
                    <a
                        href="https://newneek-app.channel.io/"
                        className="footer-sitemap-item-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        고객센터
                    </a>
                    <a className="footer-sitemap-item-link" href="/partnership">
                        제휴 문의
                    </a>
                    <a
                        href="https://www.instagram.com/newneek.official"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-sitemap-item-link"
                    >
                        인스타그램
                    </a>
                </div>
                <div className="footer-sitemap-item">
                    <a
                        href="https://withall.newneek.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-sitemap-item-link"
                    >
                        모두와 함께, 뉴닉
                    </a>
                    <a
                        href="https://mmgh.newneek.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-sitemap-item-link"
                    >
                        물물교환
                    </a>
                    <a
                        href="https://webuildup.newneek.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-sitemap-item-link"
                    >
                        여성의 날
                    </a>
                    <a
                        href="https://napp.newneek.co/2020election"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-sitemap-item-link"
                    >
                        2020 총선
                    </a>
                </div>
                <div className="footer-sitemap-item">
                    <a
                        href="https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769"
                        className="footer-sitemap-item-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="">서비스이용약관</span>
                    </a>
                    <a
                        href="https://newneek.notion.site/ec39ad284cfa4b7390fff1366236dc19"
                        className="footer-sitemap-item-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>개인정보처리방침</strong>
                    </a>
                </div>
            </StFooterSitemap>
            <StFooterAddressInfo>
                NEWNIQUE / Team3 NEWNEEK Clone Coding / BE: 권능현 김민규 김예진 김정빈 최서림 / FE:
                김혜경 손규리 이도영
                <br />
                <a href="https://github.com/Team3-NEWNEEK-Clone-Coding">
                    https://github.com/Team3-NEWNEEK-Clone-Coding
                </a>
                <br />
            </StFooterAddressInfo>
            <StFooterCopyright>ⓒ NEWNIQUE Co., Ltd. 2023.</StFooterCopyright>
            <a href="/build" style={{ display: 'none' }}>
                .
            </a>
        </StFooter>
    );
};

export default Footer;
