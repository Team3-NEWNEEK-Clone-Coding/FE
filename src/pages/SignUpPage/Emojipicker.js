import React from "react";

const EmojiPicker = ({ onEmojiSelect }) => {
  const emojis = ["🦔", "🍊", "🇰🇷", "💣", "🔥", "😀", "🌞", "🐻", "🐶", "👶", "😎", "🤓"]; // 선택 가능한 이모지들

  const handleSelectChange = (event) => {
    onEmojiSelect(event.target.value);
  };


  return (
    <select onChange={handleSelectChange}>
      <option value="">이모지를 선택해 주세요</option>
      {emojis.map((emoji, index) => (
        <option key={index} value={emoji}>
          {emoji}
        </option>
      ))}
    </select>
  );
};


export default EmojiPicker;