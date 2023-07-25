// useFetchNews.js
import { useState, useEffect, useCallback } from 'react';
// import { useQuery } from 'react-query';
import { useQueryClient, useQuery } from 'react-query';

const useFetchNews = (queryKey, fetchFunction, dependency) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [newsData, setNewsData] = useState(null);
    const [totalPage, setTotalPage] = useState(1);

    const queryClient = useQueryClient();

    const getInitialData = useCallback(
        (pageNum, category) => {
            const allCachedData = [];
            for (let pageIndex = 1; pageIndex <= pageNum; pageIndex++) {
                const cachedData = queryClient.getQueryData([queryKey, pageIndex, category]);
                if (cachedData) {
                    const dataList = Array.isArray(cachedData.newsList) ? cachedData.newsList : [];
                    allCachedData.push(...dataList);
                }
            }
            return allCachedData;
        },
        [queryClient]
    );

    const cachedData = getInitialData(currentPage, dependency);
    console.log(cachedData);
    const { isLoading, isError, refetch } = useQuery(
        [queryKey, currentPage, dependency], // dependency를 추가합니다.
        () => fetchFunction({ currentPage, dependency }),
        {
            initialData: cachedData,
            onSuccess: (response) => {
                setNewsData((prevData) =>
                    prevData ? [...prevData, ...response.newsList] : response.newsList
                );
                setTotalPage(response.totalPages);
            },
        }
    );
    console.log(newsData);
    useEffect(() => {
        setCurrentPage(1);
        setNewsData([]);
        refetch();
    }, [dependency]);

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return { newsData, isLoading, isError, handleLoadMore, totalPage, currentPage };
};
export default useFetchNews;
