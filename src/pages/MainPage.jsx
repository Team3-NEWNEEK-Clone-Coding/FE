import React from 'react';
import NavBar from '../layout/NavBar/NavBar';
import HomeBanner from '../components/homeBanner/HomeBanner';
import HeaderBanner from '../components/headerBanner/HeaderBanner';
import MainNewsReadContainer from '../container/ReadAllNewsContainer';
import HomeFemaleFooterBanner from '../layout/homeFemaleFooterBanner/HomeFemaleFooterBanner';
import CreateSubscriberContainer from '../container/CreateSubscriberContainer';
const MainPage = () => {
    return (
        <>
            <CreateSubscriberContainer />
            <NavBar categoryIdx={'all'} />
            <div className="center">
                <MainNewsReadContainer />
            </div>
            <HomeBanner />
            <HomeFemaleFooterBanner />
        </>
    );
};

export default MainPage;
