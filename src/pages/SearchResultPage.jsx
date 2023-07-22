import React from 'react';
import NavBar from '../layout/NavBar';
import HomeBanner from '../components/homeBanner/HomeBanner';
import MainNewsReadContainer from '../container/MainNewsReadContainer';
const SearchResultPage = () => {
    return (
        <>
            <NavBar />
            <div className="center">
                <MainNewsReadContainer />
            </div>
            <button>더보기</button>
            <HomeBanner />
        </>
    );
};

export default SearchResultPage;
