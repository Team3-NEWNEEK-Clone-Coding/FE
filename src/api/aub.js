import axios from 'axios';

export const getAllNews = async (sub) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/news`, sub);
        return response.data;
    } catch (error) {}
};
