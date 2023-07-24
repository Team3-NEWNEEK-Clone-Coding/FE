import axios from 'axios';

export const getAllNews = async ({ currentPage, limit }) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news`, {
            params: { page: currentPage, limit: limit },
        });
        return response.data;
    } catch (error) {}
};

export const getCategoryNews = async ({ currentPage, category }) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news/`, {
            params: { page: currentPage, category: category },
        });
        return response.data;
    } catch (error) {}
};

export const searchNews = async ({ currentPage, keyword }) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/news/search`, {
            params: { page: currentPage, keyword: keyword },
        });
        return response.data;
    } catch (error) {}
};
