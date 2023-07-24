import React from 'react';
import NewsCard from '../components/newsCard/NewsCard';
import CateEmoji from '../assets/emojis/categoryEmojis';
import NavBar from '../layout/NavBar/NavBar';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
const mockDate = [
    {
        title: '우리가 알던 중국 경제가 아냐',
        img: '/imgs/img1.jpeg',
        category: '경제',
        date: '2023.07.21',
    },
    {
        title: '우리가 알던 중국 경제가 아냐',
        img: '/imgs/img1.jpeg',
        category: '경제',
        date: '2023.07.21',
    },
];

const categorys = [
    { link: 'politics', tag: '정치', emoji: 'Politics', idx: 0 },
    { link: 'money', tag: '경제', emoji: 'Money', idx: 1 },
    { link: 'world', tag: '세계', emoji: 'World', idx: 2 },
    { link: 'tech', tag: '테크', emoji: 'Tech', idx: 3 },
    { link: 'work', tag: '노동', emoji: 'Work', idx: 4 },
    { link: 'echo', tag: '환경', emoji: 'Echo', idx: 5 },
    { link: 'human', tag: '인권', emoji: 'Human', idx: 6 },
    { link: 'social', tag: '사회', emoji: 'Social', idx: 7 },
    { link: 'culture', tag: '문화', emoji: 'Culture', idx: 8 },
    { link: 'life', tag: '라이프', emoji: 'Life', idx: 9 },
];

const PageTitle = styled.h1`
    font-size: 2rem;
    margin: 3.5rem 0 2rem;
    span {
        margin-right: 1rem;
    }
`;

//TODO : 카테고리 페이지 작업중이었음
const CategoryReadContainer = () => {
    const moreViewOnClick = () => {
        alert('moreViewOnClick');
    };
    const { category } = useParams();
    const cate = categorys.find((cate) => cate.link === category);
    const cateEmojiname = cate.emoji;
    const Emoji = CateEmoji[cateEmojiname];
    return (
        <>
            <NavBar categoryIdx={cate.idx} />
            <div className="center">
                <PageTitle>
                    {Emoji && <Emoji $size={'2rem'} />}
                    {cate.tag}
                </PageTitle>
                <NewsCard newsData={mockDate} $borderTop />
                <button onClick={moreViewOnClick}>더보기</button>
            </div>
        </>
    );
};

export default CategoryReadContainer;
