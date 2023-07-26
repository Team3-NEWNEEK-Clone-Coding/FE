// EmojiPicker.js
import React, { useContext } from 'react';
import EmojiContext from './EmojiContext';

const EmojiPicker = () => {
  const emojis = ["🦔", "🍊", "🇰🇷", "💣", "🔥", "😀", "🌞", "🐻", "🐶", "👶", "😎", "🤓", "🐼"];
  const { setSelectedEmoji } = useContext(EmojiContext);

  const handleSelectChange = (event) => {
    setSelectedEmoji(event.target.value);
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
