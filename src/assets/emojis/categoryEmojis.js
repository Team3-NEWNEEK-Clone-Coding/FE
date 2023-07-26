import React from 'react';
import styled from 'styled-components';

const EmojiStyle = styled.span`
    display: ${(props) => props.$display};
    font-size: ${(props) => props.$size};
    margin: ${(props) => props.$margin};
`;

const Politics = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>⚖️</EmojiStyle>;
};
const Money = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>💰</EmojiStyle>;
};
const World = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>🌐</EmojiStyle>;
};
const Stock = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>📈</EmojiStyle>;
};
const Work = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>⚙️</EmojiStyle>;
};
const House = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>🏠</EmojiStyle>;
};
const Opinion = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>🧑‍💼</EmojiStyle>;
};
const Social = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>👥</EmojiStyle>;
};
const Culture = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>🏅</EmojiStyle>;
};
const Entertainments = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>🎤</EmojiStyle>;
};

const CateEmoji = { Entertainments, Culture, Social, Opinion, House, Work, Stock, World, Money, Politics };

export default CateEmoji;
