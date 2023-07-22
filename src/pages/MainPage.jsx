import React from 'react';
import NavBar from '../layout/NavBar';
import HomeBanner from '../components/homeBanner/HomeBanner';
import HeaderBanner from '../components/headerBanner/HeaderBanner';
import MainNewsReadContainer from '../container/MainNewsReadContainer';
const MainPage = () => {
    return (
        <>
            <NavBar />
            <HeaderBanner />
            <div className="center">
                <MainNewsReadContainer />
            </div>
            <button>더보기</button>
            <HomeBanner />
        </>
    );
};

export default MainPage;
