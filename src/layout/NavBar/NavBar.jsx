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
