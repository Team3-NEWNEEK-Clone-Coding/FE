// useFetchNews.js
import { useState, useEffect, useMemo } from 'react';
// import { useQuery } from 'react-query';
import { useQueryClient, useQuery } from 'react-query';

const useFetchNews = (queryKey, fetchFunction, dependency) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [newsData, setNewsData] = useState(null);
    const [totalPage, setTotalPage] = useState(1);
    const [totalNewsCount, setTotalNewsCount] = useState(1);
    const queryClient = useQueryClient();

    const cachedData = useMemo(() => {
        const allCachedData = [];
        for (let pageIndex = 1; pageIndex <= currentPage; pageIndex++) {
            const cachedData = queryClient.getQueryData([queryKey, pageIndex, dependency]);
            if (cachedData) {
                const dataList = Array.isArray(cachedData.newsList) ? cachedData.newsList : [];
                allCachedData.push(...dataList);
            }
        }
        return allCachedData;
    }, [queryClient, currentPage]);

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
                setTotalNewsCount(response.totalNewsCount);
            },
        }
    );

    useEffect(() => {
        setCurrentPage(1);
        setNewsData([]);
        refetch();
    }, [dependency]);

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return { newsData, isLoading, isError, handleLoadMore, totalPage, currentPage, totalNewsCount };
};
export default useFetchNews;
