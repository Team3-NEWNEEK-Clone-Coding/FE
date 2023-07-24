import axios from 'axios';

export const getAllNews = async ({ currentPage }) => {
    console.log(currentPage);
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news`, {
            params: { page: currentPage, size: 12, sortBy: 'newsDate', isAsc: 'false' },
        });
        return response.data;
    } catch (error) {}
};

export const getCategoryNews = async ({ currentPage, category }) => {
    console.log(currentPage, category);
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news/category`, {
            params: {
                page: currentPage,
                category: category,
                size: 12,
                sortBy: 'newsDate',
                isAsc: 'false',
            },
        });
        return response.data;
    } catch (error) {
        console.log(currentPage, category);
    }
};

export const searchNews = async ({ currentPage, keyword }) => {
    console.log('news');
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news/search`, {
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
