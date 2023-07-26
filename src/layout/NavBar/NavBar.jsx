import React, { useState } from 'react';
import { NavStyle, CategoryList } from './NavBarStyle';
import CateEmoji from '../../assets/emojis/categoryEmojis';
import categorys from '../../assets/categoryInfo';
import { Link } from 'react-router-dom';
const NavBar = ({ categoryIdx }) => {
    const [activeStyle, setActiveStyle] = useState(categoryIdx !== 'all' ? categoryIdx : 'all');
    const categoryOnClick = (idx) => {
        setActiveStyle(idx);
    };
    return (
        <NavStyle>
            <CategoryList>
                <li className={activeStyle === 'all' ? `active` : ''}>
                    <Link to={'/'}>전체</Link>
                </li>
                {categorys.map((cate, idx) => {
                    const Emoji = CateEmoji[cate.emoji];
                    return (
                        <li className={activeStyle === idx ? `active` : ''} key={cate.tag}>
                            <Link to={`/tag/${cate.tag}`} onClick={() => categoryOnClick(idx)}>
                                {Emoji && <Emoji />}
                                {cate.tag}
                            </Link>
                        </li>
                    );
                })}
            </CategoryList>
        </NavStyle>
    );
};

export default NavBar;
