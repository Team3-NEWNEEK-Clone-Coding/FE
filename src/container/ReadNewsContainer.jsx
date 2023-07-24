import React from 'react';
import NewsCard from '../components/newsCard/NewsCard';

const mockDate = [
    {
        title: '우리가 알던 중국 경제가 아냐',
        img: '/imgs/img1.jpeg',
        category: '경제',
        date: '2023.07.21',
    },
    {
        title: '우리가 알던 중국 경제가 아냐',
        img: '/imgs/img1.jpeg',
        category: '경제',
        date: '2023.07.21',
    },
    {
        title: '우리가 알던 중국 경제가 아냐',
        category: '경제',
        date: '2023.07.21',
    },
    {
        title: '우리가 알던 중국 경제가 아냐',
        img: '/imgs/img1.jpeg',
        category: '경제',
        date: '2023.07.21',
    },
];

const MainNewsReadContainer = () => {
    return (
        <>
            <NewsCard newsData={mockDate} />
        </>
    );
};

export default MainNewsReadContainer;
