import { useState, useEffect, useMemo } from 'react';
import { useQueryClient, useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { subscriberSub } from '../redux/modules/subscriberSlice';
const useLoadMore = (fetchFunction) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [isFetching, setIsFetching] = useState(true);
    const [newsData, setNewsData] = useState([]);
    const queryClient = useQueryClient();
    const dispatch = useDispatch();

    const cachedData = useMemo(() => {
        const allCachedData = [];
        for (let pageIndex = 1; pageIndex <= currentPage; pageIndex++) {
            const cachedData = queryClient.getQueryData(['data', pageIndex]);
            if (cachedData) {
                const dataList = Array.isArray(cachedData.newsList) ? cachedData.newsList : [];
                allCachedData.push(...dataList);
            }
        }
        return allCachedData;
    }, [queryClient, currentPage]);

    const { data, isLoading, isError, refetch } = useQuery(
        ['data', currentPage],
        () => fetchFunction(currentPage),
        {
            initialData: cachedData,
            onSuccess: (response) => {
                if (currentPage === 1) {
                    setNewsData(response.newsList);
                } else {
                    setNewsData([...cachedData, ...response.newsList]);
                }
                setTotalPage(response.totalPages);
                dispatch(subscriberSub(response.subscriberCount));
            },
        }
    );

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return {
        data: newsData,
        currentPage,
        totalPage,
        isLoading,
        isError,
        handleLoadMore,
        isFetching,
    };
};
export default useLoadMore;
