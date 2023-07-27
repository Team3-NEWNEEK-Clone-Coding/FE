import React from 'react';
import NewsCard from '../components/newsCard/NewsCard';
import { useParams } from 'react-router-dom';
import Button from '../components/common/button/Button';
import { searchNews } from '../api/news';
import { PageTitle, ButtonBox, SearchContentWrap } from '../components/newsPage/NewsPageStyle';
import useFetchNews from '../hooks/useFetchNews';
import SearchOptionList from '../components/SearchOptionList';
import LoadingPage from '../components/loadingPage/LoadingPage';
import useDelay from '../hooks/useDelay';

const CategoryReadContainer = () => {
    const { keyword } = useParams();
    const { newsData, isLoading, isError, handleLoadMore, totalPage, currentPage, totalNewsCount } =
        useFetchNews('searchNews', searchNews, keyword);
    const { isDelayOver } = useDelay();
    if (!isDelayOver || isLoading) {
        return <LoadingPage />;
    }
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
                                    {!isLoading ? '더보기' : '로딩 중'}
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
