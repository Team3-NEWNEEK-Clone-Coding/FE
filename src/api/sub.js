import axios from 'axios';

export const postSub = async (sub) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/sub`, sub, config);
        // return response.data;
    } catch (error) {}
};
