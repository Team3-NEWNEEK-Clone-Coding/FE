import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from '../pages/detail/DetailPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import MainPage from '../pages/MainPage';
import SearchPage from '../pages/SearchPage';
import Layout from '../layout/Layout';
import NewsCategoryPage from '../pages/NewsCategoryPage';
import SearchResultPage from '../pages/SearchResultPage';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/tag/:category" element={<NewsCategoryPage />} />
                    <Route path="/detail" element={<DetailPage />} />
                    <Route path="/search/:keyword" element={<SearchResultPage />} />
                </Route>
                <Route path="/search" element={<SearchPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
