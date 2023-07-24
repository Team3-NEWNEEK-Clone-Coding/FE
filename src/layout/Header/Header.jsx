import React from 'react';
import { HeaderStyle, HeaderIconBox, HaederButton } from './HeaderStyle';
import { useNavigate, Link } from 'react-router-dom';
import Icon from '../../assets/icons/commonIcons';

const Header = ({ ...restProps }) => {
    const nav = useNavigate();
    return (
        <HeaderStyle {...restProps}>
            <Link to="/" className="logo-img-wrap">
                <img src="/imgs/new-neek-logo.png" alt="newneek-logo" />
            </Link>
            <HeaderIconBox>
                <HaederButton onClick={() => nav('/search')}>
                    <Icon.Search />
                </HaederButton>
                <HaederButton onClick={() => nav('/login')}>
                    <Icon.User />
                </HaederButton>
            </HeaderIconBox>
        </HeaderStyle>
    );
};

export default Header;
