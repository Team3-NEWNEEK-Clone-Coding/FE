import axios from 'axios';

export const getAllNews = async (currentPage) => {
    // console.log(currentPage);
    try {
        const params = {
            page: currentPage,
            size: 12,
            sortBy: 'newsDate',
            isAsc: 'false',
        };
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news`, {
            params,
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
    console.log(keyword);
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/api/news/search/basic`,
            {
                params: {
                    keyword: keyword,
                    page: currentPage,
                    size: 12,
                    sortBy: 'newsDate',
                    isAsc: 'false',
                },
            }
        );
        return response.data;
    } catch (error) {}
};
