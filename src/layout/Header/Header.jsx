import React, { useContext } from "react";
import { HeaderStyle, HeaderIconBox, HaederButton } from "./HeaderStyle";
import { useNavigate, Link } from "react-router-dom";
import Icon from "../../assets/icons/commonIcons";
import EmojiContext from "../../pages/SignUpPage/EmojiContext";

const Header = ({ ...restProps }) => {
  const nav = useNavigate();
  const { selectedEmoji } = useContext(EmojiContext); // 이모지 컨텍스트에서 선택한 이모지 가져오기

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
          {selectedEmoji || <Icon.User />} {/* 선택한 이모지가 있으면 이모지를, 아니면 기본 아이콘을 표시 */}
        </HaederButton>
      </HeaderIconBox>
    </HeaderStyle>
  );
};

export default Header;
