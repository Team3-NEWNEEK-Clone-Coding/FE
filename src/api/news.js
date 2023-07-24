import axios from 'axios';

export const getAllNews = async ({ currentPage }) => {
    console.log(currentPage);
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news`, {
            params: { page: currentPage, size: 4, sortBy: 'newsDate', isAsc: 'false' },
        });
        return response.data;
    } catch (error) {}
};

// export const getAllNews = async ({ currentPage }) => {
//     console.log(currentPage);
//     try {
//         const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/newsList`);
//         return response.data;
//     } catch (error) {}
// };

export const getCategoryNews = async ({ currentPage, category }) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news/`, {
            params: {
                page: currentPage,
                category: category,
                size: 12,
                sortBy: 'newsDate',
                isAsc: 'false',
            },
        });
        return response.data;
    } catch (error) {}
};

export const searchNews = async ({ currentPage, keyword }) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/news/search`, {
            params: {
                page: currentPage,
                keyword: keyword,
                size: 12,
                sortBy: 'newsDate',
                isAsc: 'false',
            },
        });
        return response.data;
    } catch (error) {}
};
