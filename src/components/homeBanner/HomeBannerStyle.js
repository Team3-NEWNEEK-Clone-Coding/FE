import styled from 'styled-components';
import { COLOR } from '../../assets/colors';

export const HomeBannerStyle = styled.a`
    display: flex;
    margin: ${(props) => props.$margin || `14rem 0 0`};
    padding-top: 90px;
    background-color: ${COLOR.orange};
    position: relative;
    border-top: 2px solid ${COLOR.black};
    border-bottom: ${(props) => props.$borderBottom || `none`};
    &:hover img.hover-img {
        opacity: 1;
    }
`;
export const BannerImgWrap = styled.figure`
    width: 300px;
    position: absolute;
    left: 50%;
    bottom: 61px;
    transform: translateX(-50%);
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        &.hover-img {
            position: absolute;
            bottom: 1px;
            right: 0;
            opacity: 0;
            transition: all 0.3s ease;
        }
    }
`;
export const BannerTextBox = styled.div`
    width: 100%;
    height: 62px;
    background-color: #fff;
    border-top: 1px solid ${COLOR.black};
    font-weight: 700;
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ArrowRight = styled.span`
    max-width: 67px;
    flex-grow: 1;
    display: flex;
    padding: 17px 0;
    margin-left: 11px;
    margin-right: 3px;
    position: relative;
    .arrow {
        height: 2px;
        width: 67px;
        background-color: ${COLOR.black};
        &::before {
            position: absolute;
            right: -4px;
            bottom: 11px;
            height: 2px;
            width: 17px;
            background-color: ${COLOR.black};
            transform: rotate(-50deg);
            content: '';
        }
        &:after {
            position: absolute;
            right: -4px;
            top: 11px;
            height: 2px;
            width: 17px;
            background-color: ${COLOR.black};
            transform: rotate(50deg);
            content: '';
        }
    }
`;
