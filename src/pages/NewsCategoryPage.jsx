import React from 'react';
import HomeBanner from '../components/HomeBanner/HomeBanner';
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
