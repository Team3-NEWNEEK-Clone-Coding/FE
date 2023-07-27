import axios from 'axios';

export const getAllNews = async (currentPage) => {
    try {
        const params = {
            page: currentPage,
            size: 12,
            sortBy: 'createdAt',
            isAsc: 'false',
        };
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news`, {
            params,
        });
        // console.log(response.data);
        return response.data;
    } catch (error) {}
};

export const getCategoryNews = async ({ currentPage, dependency }) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news/category`, {
            params: {
                page: currentPage,
                category: dependency,
                size: 12,
                sortBy: 'createdAt',
                isAsc: 'false',
            },
        });
        return response.data;
    } catch (error) {
        console.log(currentPage, dependency);
    }
};

export const searchNews = async ({ currentPage, dependency }) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news/search`, {
            params: {
                keyword: dependency,
                page: currentPage,
                size: 12,
                sortBy: 'createdAt',
                isAsc: 'false',
            },
        });
        return response.data;
    } catch (error) {}
};
