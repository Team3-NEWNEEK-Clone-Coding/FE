import React, { useState } from "react";
import { ButtonStyle } from "./ButtonStyle";

const Button = ({ theme, size, onClickEvent, children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <ButtonStyle
      size={size}
      theme={theme}
      onClick={onClickEvent ? onClickEvent : handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
