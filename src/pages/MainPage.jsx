import React from 'react';
import NavBar from '../layout/NavBar/NavBar';
import HomeBanner from '../components/homeBanner/HomeBanner';
import MainNewsReadContainer from '../container/ReadAllNewsContainer';
import HomeFemaleFooterBanner from '../layout/homeFemaleFooterBanner/HomeFemaleFooterBanner';
import CreateSubscriberContainer from '../container/CreateSubscriberContainer';
import { COLOR } from '../assets/colors';
const MainPage = () => {
    return (
        <>
            <CreateSubscriberContainer />
            <NavBar categoryIdx={'all'} />
            <div className="center">
                <MainNewsReadContainer />
            </div>
            <HomeBanner $margin={`14rem 0 8rem`} $borderBottom={`2px solid ${COLOR.black}`} />
            <HomeFemaleFooterBanner />
        </>
    );
};

export default MainPage;
