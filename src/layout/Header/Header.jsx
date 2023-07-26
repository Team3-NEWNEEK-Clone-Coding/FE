import React from "react";
import { HeaderStyle, HeaderIconBox, HaederButton } from "./HeaderStyle";
import { useNavigate, Link } from "react-router-dom";
import Icon from "../../assets/icons/commonIcons";

const Header = ({ ...restProps }) => {
  const nav = useNavigate();
  return (
    <HeaderStyle {...restProps}>
      <Link to="/" className="logo-img-wrap">
        <img src="/imgs/new-neek-logo.png" alt="newneek-logo" width="226" height="32" />
      </Link>
      <HeaderIconBox>
        <HaederButton to="/search">
          <Icon.Search />
        </HaederButton>
        <HaederButton to="/login">
          <Icon.User />
        </HaederButton>
      </HeaderIconBox>
    </HeaderStyle>
  );
};

export default Header;
