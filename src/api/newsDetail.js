import axios from "axios";

export const getNewsDetail = async (id) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const postUpdateLike = async (id) => {
    const token = localStorage.getItem("accessToken");
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/news/heart/${id}`, {}, {
            headers: {
                Authorization: token
            }
        });
        //console.log("response.data", response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}