import { styled } from "styled-components";

export const FooterBannerAside = styled.aside`
    overflow-x: hidden;
    padding: 1.25rem 5%;
    border-top: 1px solid #051619;
    
`;

export const FooterStatics = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    font-size: 1.5rem;
    color: #051619;
    position: relative;

    b {
        font-weight: 700;
    }

    .hover-area {
        display: none;
        position: absolute;
        left: -20%;
        right: 0;
        top: 0;
        bottom: 0;
    }

    .marquee {
        white-space: nowrap;

        p {
            display: inline-block;
            padding-right: 50px;

            &:after {
                content: "";
                white-space: nowrap;
                padding-right: 50px;
            }
        }
    }

    &:hover {
        .footer-banner-text, .cta-arrow {
            opacity: 0;
        }

        .hover-area {
            display: flex;
            align-items: center;
            padding: 0 5%;
            font-size: 1.5rem;
        }

        .marquee {
            animation: marquee 4s linear infinite;

            p {
                -webkit-animation-name: marquee;
                animation-name: marquee;
                -webkit-animation-timing-function: linear;
                animation-timing-function: linear;
                -webkit-animation-iteration-count: infinite;
                animation-iteration-count: infinite;
                -webkit-animation-duration: 4s;
                animation-duration: 4s;
            }
        }
    }

    @-webkit-keyframes marquee {
        0% {
            transform: translateX(-100px);
        }
        100% {
            transform: translateX(0%);
        }
    }

    @keyframes marquee {
        0% {
            transform: translateX(-100px);
        }
        100% {
            transform: translateX(-0%);
        }
    }
`;