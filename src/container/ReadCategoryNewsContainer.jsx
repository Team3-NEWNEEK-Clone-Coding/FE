import React from 'react';
import NewsCard from '../components/newsCard/NewsCard';
import CateEmoji from '../assets/emojis/categoryEmojis';
import categorys from '../assets/categoryInfo';
import NavBar from '../layout/NavBar/NavBar';
import { useParams } from 'react-router-dom';
import Button from '../components/common/button/Button';
import { PageTitle, ButtonBox } from '../components/newsPage/NewsPageStyle';
import useFetchNews from '../hooks/useFetchNews';
import { getCategoryNews } from '../api/news';
import LoadingPage from '../pages/LoginPage/LoginPage';

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

//TODO : 카테고리 페이지 작업중이었음
const CategoryReadContainer = () => {
    const { category } = useParams();
    const cate = categorys.find((cate) => cate.tag === category);
    const cateEmojiname = cate.emoji;
    const Emoji = CateEmoji[cateEmojiname];
    const { newsData, isLoading, isError, handleLoadMore, totalPage, currentPage } = useFetchNews(
        'cateNews',
        getCategoryNews,
        category
    );

    if (isLoading) return <div>...Loading</div>;
    if (isError) return <div>Error fetching data</div>;

    return (
        <>
            <NavBar categoryIdx={cate.idx} />
            <div className="center">
                <PageTitle>
                    {Emoji && <Emoji $size={'2rem'} />}
                    {cate.tag}
                </PageTitle>
                {isLoading ? <div>Loading...</div> : <NewsCard newsData={newsData} $borderTop />}
                {currentPage !== totalPage && (
                    <ButtonBox>
                        <Button size="md" theme="moreBtn" onClickEvent={handleLoadMore}>
                            더보기
                        </Button>
                    </ButtonBox>
                )}
            </div>
        </>
    );
};

export default CategoryReadContainer;
