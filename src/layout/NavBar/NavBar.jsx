import React, { useState } from 'react';
import { NavStyle, CategoryList } from './NavBarStyle';
import CateEmoji from '../../assets/emojis/categoryEmojis';
import { Link } from 'react-router-dom';

const categorys = [
    { link: 'politics', tag: '정치', emoji: 'Politics' },
    { link: 'money', tag: '경제', emoji: 'Money' },
    { link: 'world', tag: '국제', emoji: 'World' },
    { link: 'tech', tag: '증권', emoji: 'Tech' },
    { link: 'work', tag: '산업', emoji: 'Work' },
    { link: 'echo', tag: '부동산', emoji: 'Echo' },
    { link: 'human', tag: '오피니언', emoji: 'Human' },
    { link: 'social', tag: '사회', emoji: 'Social' },
    { link: 'culture', tag: '문화', emoji: 'Culture' },
    { link: 'life', tag: '연예', emoji: 'Life' },
];

const NavBar = ({ categoryIdx }) => {
    const [activeStyle, setActiveStyle] = useState(categoryIdx !== 'all' ? categoryIdx : 'all');
    const categoryOnClick = (idx) => {
        setActiveStyle(idx);
    };
    return (
        <NavStyle>
            <CategoryList>
                <Link to={'/'}>
                    <li className={activeStyle === 'all' ? `active` : ''}>전체</li>
                </Link>
                {categorys.map((cate, idx) => {
                    const Emoji = CateEmoji[cate.emoji];
                    return (
                        <Link
                            to={`/tag/${cate.tag}`}
                            key={cate.link}
                            onClick={() => categoryOnClick(idx)}
                        >
                            <li className={activeStyle === idx ? `active` : ''}>
                                {Emoji && <Emoji />}
                                {cate.tag}
                            </li>
                        </Link>
                    );
                })}
            </CategoryList>
        </NavStyle>
    );
};

export default NavBar;
