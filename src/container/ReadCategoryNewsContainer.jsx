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
import LoadingPage from '../components/loadingPage/LoadingPage';
import useDelay from '../hooks/useDelay';

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
    const { isDelayOver } = useDelay();

    if (!isDelayOver || isLoading) {
        return <LoadingPage />;
    }
    if (isError) return <div>Error fetching data</div>;

    return (
        <>
            <NavBar categoryIdx={cate.idx} />
            <div className="center">
                <PageTitle>
                    {Emoji && <Emoji $size={'2rem'} />}
                    {cate.tag}
                </PageTitle>
                <NewsCard newsData={newsData} $borderTop />
                {currentPage !== totalPage && (
                    <ButtonBox>
                        <Button size="md" theme="moreBtn" onClickEvent={handleLoadMore}>
                            {!isLoading ? '더보기' : '로딩 중'}
                        </Button>
                    </ButtonBox>
                )}
            </div>
        </>
    );
};

export default CategoryReadContainer;
