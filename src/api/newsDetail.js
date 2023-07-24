import axios from "axios";

export async function getNewsDetail(id) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news/${id}`);
        return response.data;
    } catch (error) {}
}