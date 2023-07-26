import React from 'react';
import NewsCard from '../components/newsCard/NewsCard';
import { useParams } from 'react-router-dom';
import Button from '../components/common/button/Button';
import { searchNews } from '../api/news';
import { PageTitle, ButtonBox, SearchContentWrap } from '../components/newsPage/NewsPageStyle';
import useFetchNews from '../hooks/useFetchNews';
import SearchOptionList from '../components/SearchOptionList';
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

const CategoryReadContainer = () => {
    const { keyword } = useParams();
    const { newsData, isLoading, isError, handleLoadMore, totalPage, currentPage, totalNewsCount } =
        useFetchNews('searchNews', searchNews, keyword);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    return (
        <SearchContentWrap>
            <div className="center">
                {totalPage !== 0 ? (
                    <>
                        <PageTitle>
                            <em className="keyword">{keyword}</em>의 검색 결과예요.
                        </PageTitle>
                        <span className="status">🦔고슴이 : {totalNewsCount}개 찾았슴!</span>
                        <div className="sorting">최신순</div>
                        <NewsCard newsData={newsData} $borderTop />
                        {currentPage !== totalPage && (
                            <ButtonBox>
                                <Button size="md" theme="moreBtn" onClickEvent={handleLoadMore}>
                                    더보기
                                </Button>
                            </ButtonBox>
                        )}
                    </>
                ) : (
                    <>
                        <PageTitle>
                            <em className="keyword">{keyword}</em>의 검색 결과가 없습니다.
                        </PageTitle>
                        <SearchOptionList />
                    </>
                )}
            </div>
        </SearchContentWrap>
    );
};

export default CategoryReadContainer;

