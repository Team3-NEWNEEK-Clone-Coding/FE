import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

const EmojiInput = ({ onEmojiSelect }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setShowEmojiPicker(false);
    onEmojiSelect(emoji); // 선택된 이모지를 부모 컴포넌트로 전달
  };

  return (
    <div>
      <input
        type="text"
        value={selectedEmoji}
        placeholder="이모지를 선택하세요"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
      />
      {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
    </div>
  );
};

export default EmojiInput;
