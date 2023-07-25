import React, { useEffect, useState, useCallback } from 'react';
import NewsCard from '../components/newsCard/NewsCard';
import Button from '../components/common/button/Button';
import { ButtonBox } from '../components/newsPage/NewsPageStyle';
import axios from 'axios';
import { getAllNews } from '../api/news';
import { useQuery, useQueryClient } from 'react-query';
import useLoadMore from '../hooks/useLoadMore';

const MainNewsReadContainer = () => {
    const {
        data: newsData,
        currentPage,
        totalPage,
        isLoading,
        isError,
        handleLoadMore,
        isFetching,
    } = useLoadMore(getAllNews);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    // console.log(newsData);

    return (
        <>
            <NewsCard newsData={newsData} />
            {currentPage < totalPage && (
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
    );
};

export default MainNewsReadContainer;
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

const MainNewsReadContainer = () => {
    // const [currentPage, setCurrentPage] = useState(1);
    // const [newsData, setNewsData] = useState([]);
    // const [isMore, setIsMore] = useState(true);
    // const [data, setData] = useState([]);
    // let totalPage = 1;

    const { data, moreViewOnClick, currentPage, totalPage } = useNewsData(getAllNews);

    // const fetchData = async () => {
    //     try {
    //         const newData = await getAllNews({ currentPage });
    //         // setTotalPage(newData.totalPage);
    //         // const addData = newData.newsList;
    //         // setData((prevData) => [...prevData, ...addData]);
    //         setData((prevData) => [...prevData, ...newData]);
    //     } catch (error) {
    //         alert('에러');
    //         // 오류 처리
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, [currentPage]);

    // const moreViewOnClick = () => {
    //     if (currentPage < totalPage) {
    //         setCurrentPage(currentPage + 1);
    //     } else {
    //         setCurrentPage(totalPage);
    //     }
    // };

    return (
        <>
            <NewsCard newsData={data} />
            {currentPage !== totalPage && (
                <ButtonBox>
                    <Button size="md" theme="moreBtn" onClickEvent={moreViewOnClick}>
                        더보기
                    </Button>
                </ButtonBox>
            )}
        </>
    );
};

export default MainNewsReadContainer;
