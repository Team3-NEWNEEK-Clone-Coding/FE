import React from 'react';
import NavBar from '../layout/NavBar/NavBar';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import HeaderBanner from '../components/HeaderBanner/HeaderBanner';
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
