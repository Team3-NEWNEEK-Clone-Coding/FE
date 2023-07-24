import React from 'react';
import NavBar from '../layout/NavBar/NavBar';
import HomeBanner from '../components/homeBanner/HomeBanner';
import HeaderBanner from '../components/headerBanner/HeaderBanner';
import MainNewsReadContainer from '../container/ReadNewsContainer';
import styled from 'styled-components';
const MainPage = () => {
    return (
        <>
            <HeaderBanner />
            <NavBar categoryIdx={'all'} />
            <div className="center">
                <MainNewsReadContainer />
            </div>
            <button>더보기</button>
            <HomeBanner />
        </>
    );
};

export default MainPage;
