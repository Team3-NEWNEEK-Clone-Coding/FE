import React, { useContext, useEffect, useState } from "react";
import { HeaderStyle, HeaderIconBox, HeaderButton } from "./HeaderStyle";
import { useNavigate, Link } from "react-router-dom";
import Icon from "../../assets/icons/commonIcons";
import EmojiContext from "../../pages/SignUpPage/EmojiContext";

const Header = ({ ...restProps }) => {
  const nav = useNavigate();
  const { selectedEmoji } = useContext(EmojiContext); // 이모지 컨텍스트에서 선택한 이모지 가져오기
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isAuth = localStorage.getItem("accessToken");
  useEffect(() => {
    if (isAuth) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <HeaderStyle {...restProps}>
      <div className="header-inner">
        <Link to="/" className="logo-img-wrap">
          <img src="/imgs/new-neek-logo.png" alt="newneek-logo" width="226" height="32" />
        </Link>
        <HeaderIconBox>
          <HeaderButton to="/search">
            <Icon.Search />
          </HeaderButton>

          {isLoggedIn ? (
            <>
              <HeaderButton to="/login">
                {selectedEmoji || <Icon.User />} {/* 선택한 이모지가 있으면 이모지를, 아니면 기본 아이콘을 표시 */}
              </HeaderButton>

              <HeaderButton
                to="/login"
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("emoji");
                  alert("로그아웃이 되었습니다.");
                  setIsLoggedIn(false);
                }}
              >
                <Icon.Logout />
              </HeaderButton>
            </>
          ) : (
            <HeaderButton to="/login">
              <Icon.User />
            </HeaderButton>
          )}
        </HeaderIconBox>
      </div>
    </HeaderStyle>
  );
};

export default Header;
