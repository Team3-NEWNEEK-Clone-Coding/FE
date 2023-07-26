import React from 'react';
import HomeBanner from '../components/homeBanner/HomeBanner';
import ReadCategoryNewsContainer from '../container/ReadCategoryNewsContainer';
const NewsCategoryPage = () => {
    return (
        <>
            <ReadCategoryNewsContainer />
            <HomeBanner />
        </>
    );
};

export default NewsCategoryPage;
