import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../assets/colors';
import { useNavigate } from 'react-router-dom';
import Icon from '../assets/icons/commonIcons';

// import LogoImage from '../assets/imgs/new-neek-logo.png';
// import Icon from '../assets//icon.png';
const HeaderStyle = styled.header`
    width: 100%;
    /* height: 50px; */
    background-color: ${COLOR.bg};
    padding: 40px 60px 36px;
    display: flex;
    justify-content: end;
    align-items: center;
    position: relative;
    .logo-img-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 226px;
        img {
            width: 100%;
            height: 100%;
        }
        @media screen and (max-width: 900px) {
            width: 184px;
        }
    }
`;

const HeaderIconBox = styled.div`
    display: flex;
`;

const HaederButton = styled.button`
    width: 48px;
    height: 48px;
    border: 1px solid ${COLOR.black};
    background-color: ${COLOR.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:nth-child(1) {
        border-right: none;
    }
    svg {
        width: 24px;
        height: 24px;
    }
    &:nth-child(1) svg {
        width: 22px;
        height: 22px;
    }
    &:hover {
        filter: brightness(0.8);
    }
    @media screen and (max-width: 900px) {
        display: none;
    }
`;

const Header = () => {
    const nav = useNavigate();
    return (
        <HeaderStyle>
            <div className="logo-img-wrap">
                <img src="/imgs/new-neek-logo.png" alt="newneek-logo" />
            </div>
            <HeaderIconBox>
                <HaederButton onClick={() => nav('/search')}>
                    <Icon.Search />
                </HaederButton>
                <HaederButton onClick={() => alert('구현되지 않은 페이지 입니다.')}>
                    <Icon.User />
                </HaederButton>
            </HeaderIconBox>
        </HeaderStyle>
    );
};

export default Header;
