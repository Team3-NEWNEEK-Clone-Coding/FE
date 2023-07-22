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
const Tech = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>🤖</EmojiStyle>;
};

const Work = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>💪</EmojiStyle>;
};
const Echo = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>🌱</EmojiStyle>;
};
const Human = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>🤝</EmojiStyle>;
};
const Social = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>👥</EmojiStyle>;
};
const Culture = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>🎞</EmojiStyle>;
};
const Life = ({ ...restProps }) => {
    return <EmojiStyle {...restProps}>🧘</EmojiStyle>;
};

const CateEmoji = { Life, Culture, Social, Human, Echo, Work, Tech, World, Money, Politics };

export default CateEmoji;
