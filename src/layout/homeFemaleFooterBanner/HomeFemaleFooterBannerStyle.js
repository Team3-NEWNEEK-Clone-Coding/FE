import { styled } from "styled-components";

export const FooterBannerWrap = styled.div`
    aside {
        padding: 1.25rem 5%;
        border-top: 1px solid #051619;

        &:hover {
            background: #fff;
        }
    }
`;

export const FooterBannerLink = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.5rem;
    color: #051619;

    .mobile-block {
        display: inline;
    }
`;

export const FooterBannerCtaArrow = styled.div`
    max-width: 67px;
    flex-grow: 1;
    margin-left: 11px;
    margin-right: 3px;
    padding: 17px 0;

    .line {
        width: 100%;
        height: 2px;
        background: #051619;
        position: relative;
    }
    .line:before {
        -webkit-transform: rotate(-50deg);
        transform: rotate(-50deg);
        -webkit-transform-origin: top right;
        transform-origin: top right;
    }
    .line:after,.line:before {
        background: inherit;
        position: absolute;
        width: 17px;
        height: 2px;
        content: "";
        right: 0;
    }
    .line:after {
        -webkit-transform: rotate(50deg);
        transform: rotate(50deg);
        -webkit-transform-origin: bottom right;
        transform-origin: bottom right;
    }
`;