import styled, { css } from 'styled-components';
import { COLOR } from '../../assets/colors';
import { Link } from 'react-router-dom';
export const NewsList = styled.ul`
    border-left: 1px solid ${COLOR.black};
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    /* @media screen and (max-width: 1360px) {
    } */
    .border-top-style:nth-child(-n + 4) {
        border-top: 1px solid ${COLOR.black};
    }
    @media screen and (max-width: 1360px) {
        max-width: 1040px;
        .border-top-style:nth-child(n + 4) {
            border-top: none;
        }
    }
    @media screen and (max-width: 900px) {
        .border-top-style:nth-child(n + 3) {
            border-top: none;
        }
    }
    @media screen and (max-width: 720px) {
        .border-top-style:nth-child(n + 2) {
            border-top: none;
        }
    }
`;

export const NewsCardStyle = styled(Link)`
    width: 25%;
    border: 1px solid ${COLOR.black};
    border-top: none;
    border-left: none;
    position: relative;
    &:hover {
        img {
            filter: grayscale(0%);
        }

        background-color: #fff;
    }
    @media screen and (max-width: 1360px) {
        width: 33.3%;
    }
    @media screen and (max-width: 900px) {
        width: 50%;
    }
    @media screen and (max-width: 720px) {
        width: 100%;
    }
`;

export const NewsCardImgWrap = styled.figure`
    width: 100%;
    padding: 0 1.75rem 75%;
    /* padding-bottom: 75%; */
    height: 0;
    border-bottom: 1px solid ${COLOR.black};
    position: relative;
    overflow: hidden;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
    }
`;

export const NewsCardBody = styled.div`
    padding: 1.5rem 1.75rem 2.5rem;

    .news-title {
        font-size: 1.25rem;
        margin: 0px 0px 0.5rem;
        font-weight: 700;
        line-height: 1.3;
    }
    .news-content {
        margin: 0px 0px 1.5rem;
        height: 3.6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        font-size: 0.9rem;
    }
    .new-info {
        position: absolute;
        left: 1.75rem;
        bottom: 1.5rem;
    }
    time {
        padding: 0;
        font-size: 0.9rem;
        margin-right: 1rem;
    }
    i {
        font-size: 0.9rem;
    }
`;
