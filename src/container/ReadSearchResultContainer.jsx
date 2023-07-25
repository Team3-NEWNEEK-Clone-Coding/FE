import React, { useState, useEffect } from 'react';
import NewsCard from '../components/newsCard/NewsCard';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { COLOR } from '../assets/colors';
import Button from '../components/common/button/Button';
import { searchNews } from '../api/news';
import { PageTitle, ButtonBox, SearchContentWrap } from '../components/newsPage/NewsPageStyle';
import { useQuery } from 'react-query';

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

//TODO : 카테고리 페이지 작업중이었음
const CategoryReadContainer = () => {
    const { keyword } = useParams();
    const nav = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [newsData, setNewsData] = useState(null);
    const [totalPage, setTotalPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);

    const { isLoading, isError, refetch } = useQuery(
        ['searchNews', currentPage],
        () => searchNews({ currentPage, keyword }),
        {
            onSuccess: (response) => {
                setCurrentPage(1);
                setNewsData([]);
                setNewsData((prevData) =>
                    prevData ? [...prevData, ...response.newsList] : response.newsList
                );
                setTotalPage(response.totalPages);
                setIsFetching(false);
            },
        }
    );

    useEffect(() => {
        refetch();
    }, [keyword]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    console.log(newsData);

    return (
        <SearchContentWrap>
            <div className="center">
                {totalPage !== 0 ? (
                    <>
                        <PageTitle>
                            <em className="keyword">{keyword}</em>의 검색 결과예요.
                        </PageTitle>
                        <span className="status">🦔고슴이 : 3개 찾았슴!</span>
                        <div className="sorting">최신순</div>
                        <NewsCard newsData={newsData} $borderTop />
                        {currentPage !== totalPage && (
                            <ButtonBox>
                                <Button
                                    size="md"
                                    theme="moreBtn"
                                    onClickEvent={handleLoadMore}
                                    disabled={isFetching}
                                >
                                    더보기
                                </Button>
                            </ButtonBox>
                        )}
                    </>
                ) : (
                    <PageTitle>
                        <em className="keyword">{keyword}</em>의 검색 결과가 없습니다.
                    </PageTitle>
                )}
            </div>
        </SearchContentWrap>
    );
};

export default CategoryReadContainer;
