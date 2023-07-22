import React from 'react';
import styled from 'styled-components';
import CateEmoji from '../assets/emojis/categoryEmojis';
import { COLOR } from '../assets/colors';
import { Link } from 'react-router-dom';
const NavStyle = styled.nav`
    width: 100%;
    /* height: 50px; */
    background-color: #fff;
    border-top: 1px solid ${COLOR.black};
    border-bottom: 1px solid ${COLOR.black};
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
`;

const CategoryList = styled.ul`
    display: flex;
    font-size: 1rem;
    white-space: nowrap;
    overflow: overlay;
    li {
        padding: 1.5rem 0;
        margin: 0 12px;
        border-bottom: 3px solid #fff;
        &:hover {
            color: ${COLOR.orange};
            border-bottom: 3px solid ${COLOR.black};
        }
        &.all-cate:hover {
            border-bottom: 3px solid #fff;
        }
    }
    @media screen and (max-width: 900px) {
        font-size: 0.9rem;
    }
    @media screen and (max-width: 720px) {
        font-size: 0.8rem;
        li {
            padding: 1.2rem 0;
        }
    }
`;

const categorys = [
    { link: 'politics', tag: '정치', emoji: 'Politics' },
    { link: 'money', tag: '경제', emoji: 'Money' },
    { link: 'world', tag: '세계', emoji: 'World' },
    { link: 'tech', tag: '테크', emoji: 'Tech' },
    { link: 'work', tag: '노동', emoji: 'Work' },
    { link: 'echo', tag: '환경', emoji: 'Echo' },
    { link: 'human', tag: '인권', emoji: 'Human' },
    { link: 'social', tag: '사회', emoji: 'Social' },
    { link: 'culture', tag: '문화', emoji: 'Culture' },
    { link: 'life', tag: '라이프', emoji: 'Life' },
];

const NavBar = () => {
    return (
        <NavStyle>
            <CategoryList>
                <Link to={'/'}>
                    <li className="all-cate">전체</li>
                </Link>
                {categorys.map((cate) => {
                    const Emoji = CateEmoji[cate.emoji];
                    return (
                        <Link to={`/tag/${cate.link}`} key={cate.link}>
                            <li>
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
