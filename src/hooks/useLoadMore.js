import { useState, useCallback } from 'react';
import { useQueryClient, useQuery } from 'react-query';

const useLoadMore = (fetchFunction) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState(null);
    const [totalPage, setTotalPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);

    const queryClient = useQueryClient();

    const getInitialData = useCallback(
        (pageNum) => {
            const allCachedData = [];
            for (let pageIndex = 1; pageIndex <= pageNum; pageIndex++) {
                const cachedData = queryClient.getQueryData(['data', pageIndex]);
                if (cachedData) {
                    const dataList = Array.isArray(cachedData.newsList) ? cachedData.newsList : [];
                    allCachedData.push(...dataList);
                }
            }
            return allCachedData;
        },
        [queryClient]
    );

    const cachedData = getInitialData(currentPage);
    const { isLoading, isError, refetch } = useQuery(
        ['data', currentPage],
        () => fetchFunction(currentPage),
        {
            initialData: cachedData,
            onSuccess: (response) => {
                setData((prevData) =>
                    prevData ? [...prevData, ...response.newsList] : response.newsList
                );
                setTotalPage(response.totalPages);
                setIsFetching(false);
            },
        }
    );

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return {
        data,
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
