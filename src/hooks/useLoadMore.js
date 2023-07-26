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
    console.log(currentPage);
    // const cachedData = getInitialData(currentPage);
    const { data, isLoading, isError, refetch } = useQuery(
        ['data', currentPage],
        () => fetchFunction(currentPage),
        {
            // enabled: !isFetching,
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

    // useEffect(() => {
    //     if (data) {
    //         setNewsData(data.newsList);
    //     }
    // }, []);

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return {
        // data: cachedData.length === 0 && data ? data.newsList : cachedData,
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
// import { useState, useEffect } from 'react';
// // import { getAllNews } from '../api/news';

// const useNewsData = (getData) => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPage, setTotalPage] = useState(1);
//     const [data, setData] = useState([]);
//     // let totalPage = 10;
//     const fetchData = async () => {
//         try {
//             const newData = await getData({ currentPage });
//             setTotalPage(newData.totalPages);
//             setData((prevData) => [...prevData, ...newData.newsList]);
//         } catch (error) {
//             alert('에러');
//             // 오류 처리
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [currentPage]);

//     const moreViewOnClick = () => {
//         if (currentPage < totalPage) {
//             setCurrentPage(currentPage + 1);
//             // console.log(currentPage);
//         } else {
//             setCurrentPage(totalPage);
//         }
//     };

//     return { data, moreViewOnClick, currentPage, totalPage };
// };

// export default useNewsData;
