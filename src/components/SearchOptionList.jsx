import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../assets/colors';
import { Link } from 'react-router-dom';

const SearchOptionListStyle = styled.ul`
    li {
        padding: 1rem 0;
        &:hover {
            color: ${COLOR.orange};
        }
    }
`;
const PageTitle = styled.h2`
    margin: 4rem 0 1rem;
    color: ${COLOR.black};
    font-size: 1.25rem;
    font-weight: 700;
`;
const SEARCH_OPTIONS = [
    { option: '한미정상회담' },
    { option: '간호법' },
    { option: '부동산' },
    { option: '수단' },
    { option: 'TV 수신료' },
    { option: '반도체' },
];

const SearchOptionList = () => {
    return (
        <>
            <PageTitle>고슴이 추천 키워드</PageTitle>
            <SearchOptionListStyle>
                {SEARCH_OPTIONS.map((option, idx) => {
                    return (
                        <li key={`search-option${idx}`}>
                            <Link to={`/search/${option.option}`}>{option.option}</Link>
                        </li>
                    );
                })}
            </SearchOptionListStyle>
        </>
    );
};

export default SearchOptionList;
