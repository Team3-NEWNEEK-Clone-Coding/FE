// useFetchNews.js
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

const useFetchNews = (queryKey, fetchFunction, dependency) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [newsData, setNewsData] = useState(null);
    const [totalPage, setTotalPage] = useState(1);

    const { isLoading, isError, refetch } = useQuery(
        [queryKey, currentPage, dependency], // dependency를 추가합니다.
        () => fetchFunction({ currentPage, dependency }),
        {
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
