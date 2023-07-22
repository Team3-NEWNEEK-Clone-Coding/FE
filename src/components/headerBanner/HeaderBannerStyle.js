import styled from 'styled-components';
import { COLOR } from '../../assets/colors';

export const HeaderBannerStyle = styled.div`
    overflow: hidden;
    position: relative;
    border-bottom: 1px solid ${COLOR.black};

    .img-wrap {
        position: absolute;
        bottom: -9rem;
        left: 50%;
        width: 100%;
        max-width: 530px;
        margin-left: 60px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    h1 {
        padding: 1.5rem 0 2rem;
        width: 100%;
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: -0.025rem;
        border-bottom: 1px solid ${COLOR.black};
        .intro-inner {
            max-width: 1200px;
            margin: 0 auto;
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
`;
