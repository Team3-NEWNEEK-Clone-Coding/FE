import styled from 'styled-components';
import { COLOR } from '../../assets/colors';

export const HeaderBannerStyle = styled.div`
    overflow: hidden;
    position: relative;
    border-top: 1px solid ${COLOR.black};
    /* border-bottom: 1px solid ${COLOR.black}; */
    .text-line {
        text-decoration: underline;
    }
    .img-wrap {
        position: absolute;
        bottom: -6rem;
        left: 50%;
        width: 100%;
        max-width: 530px;
        margin-left: 60px;
        img {
            width: 100%;
            /* height: 100%; */
        }
    }
    h1 {
        padding: 1.5rem 0 2rem;
        width: 100%;
        font-size: 2.6rem;
        font-weight: 700;
        letter-spacing: -0.025rem;
        border-bottom: 1px solid ${COLOR.black};
        .intro-inner {
            max-width: 1200px;
            padding: 0 5%;
            margin: 0 auto;
        }
    }
    @media screen and (max-width: 900px) {
        max-width: 1040px;
        display: flex;
        flex-direction: column;
        border-top: 1px solid ${COLOR.black};
        overflow: visible;
        .img-wrap {
            position: relative;
            width: 68%;
            padding-top: 56%;
            /* overflow: hidden; */
            top: 0;
            left: 0;
            margin: 0 auto;
            img {
                position: absolute;
                bottom: -32%;
            }
        }
        h1 {
            padding: 1rem 0 1.2rem;
            border-top: 1px solid ${COLOR.black};
            font-size: 1.6rem;
            position: relative;
            background-color: ${COLOR.bg};
            .intro-inner {
                display: flex;
                flex-direction: column;
                text-align: center;
                line-height: 1.4;
            }
        }
    }
`;

export const NewsLetterForm = styled.form`
    max-width: 452px;
    margin: 1.5rem 0 0;
    display: flex;
    flex-direction: column;

    .button-wrap {
        margin-top: 32px;
        display: flex;
        gap: 8px;
    }
`;

export const IntroContentBox = styled.div`
    padding: 2rem 0 3rem;
    background-color: ${COLOR.orange};
    .intro-content-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 5%;
        @media screen and (max-width: 900px) {
            width: 480px;
        }
    }
    p {
        max-width: 560px;
        line-height: 1.7;
    }
    .font-bold {
        font-weight: 700;
    }
    .intro-text {
        margin-top: 1rem;
    }
    @media screen and (max-width: 900px) {
        position: relative;
    }
`;
