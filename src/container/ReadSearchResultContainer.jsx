import React from 'react';
import NewsCard from '../components/NewsCard/NewsCard';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { COLOR } from '../assets/colors';
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
    font-weight: 400;
    margin: 3.5rem 0 1.3rem;
    .keyword {
        color: rgb(153, 153, 153);
        /* margin-right: 1rem; */
    }
`;

const SearchContentWrap = styled.div`
    border-top: 1px solid ${COLOR.black};
    .status {
        display: block;
        margin: 0.5rem 0 0;
        font-size: 1.24rem;
    }
    .sorting {
        margin: 2.5rem 0;
        background-color: ${COLOR.black};
        color: #fff;
        font-weight: 700;
        width: 80px;
        padding: 0.6rem 0;
        font-size: 0.8rem;
        text-align: center;
    }
`;

//TODO : 카테고리 페이지 작업중이었음
const CategoryReadContainer = () => {
    const moreViewOnClick = () => {
        alert('moreViewOnClick');
    };
    const { keyword } = useParams();
    // console.log(keyword);

    return (
        <SearchContentWrap>
            <div className="center">
                <PageTitle>
                    <em className="keyword">{keyword}</em>의 검색 결과예요.
                </PageTitle>
                <span className="status">🦔고슴이 : 3개 찾았슴!</span>
                <div className="sorting">최신순</div>
                <NewsCard newsData={mockDate} $borderTop />
                <button onClick={moreViewOnClick}>더보기</button>
            </div>
        </SearchContentWrap>
    );
};

export default CategoryReadContainer;
