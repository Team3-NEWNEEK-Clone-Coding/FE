import React from "react";
import Emoji from "../../assets/emojis/userEmojis";


const EmojiPicker = ({ onEmojiSelect }) => {
  return (
    <div>
      {Object.keys(Emoji).map((emojiName) => {
        const EmojiComponent = Emoji[emojiName];
        return (
          <button
            key={emojiName}
            onClick={() => onEmojiSelect(emojiName)}
          >
            <EmojiComponent />
          </button>
        );
      })}
    </div>
  );
};

export default EmojiPicker;
