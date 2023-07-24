import { useState, useEffect } from 'react';
// import { getAllNews } from '../api/news';

const useNewsData = (getData) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [data, setData] = useState([]);
    // let totalPage = 10;
    const fetchData = async () => {
        try {
            const newData = await getData({ currentPage });
            setTotalPage(newData.totalPages);
            setData((prevData) => [...prevData, ...newData.newsList]);
        } catch (error) {
            alert('에러');
            // 오류 처리
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const moreViewOnClick = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
            // console.log(currentPage);
        } else {
            setCurrentPage(totalPage);
        }
    };

    return { data, moreViewOnClick, currentPage, totalPage };
};

export default useNewsData;
