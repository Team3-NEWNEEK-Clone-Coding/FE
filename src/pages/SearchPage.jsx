import React, { useState } from 'react';
import Input from '../components/common/input/Input';
import Icon from '../assets/icons/commonIcons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLOR } from '../assets/colors';
import { useNavigate } from 'react-router-dom';
const InputBox = styled.form`
    position: relative;
`;
const ButtonGoBack = styled.button`
    position: absolute;
    top: 0;
`;

const SEARCH_OPTIONS = [
    { option: '한미정상회담' },
    { option: '간호법' },
    { option: '부동산' },
    { option: '수단' },
    { option: 'TV 수신료' },
    { option: '반도체' },
];

const PageTitle = styled.h2`
    margin: 4rem 0 1rem;
    color: ${COLOR.black};
    font-size: 1.25rem;
    font-weight: 700;
`;
const SearchOptionList = styled.ul`
    li {
        padding: 1rem 0;
        &:hover {
            color: ${COLOR.orange};
        }
    }
`;

const SearchFormStyle = styled.form`
    margin: 0 auto;
    padding: 0 20px;
    width: 500px;
`;

// const SearchForm = () => {

// }

const SearchPage = () => {
    const [search, setSearch] = useState('');
    const onChangeSearchHandler = (e) => {
        setSearch(e.target.value);
    };
    const navigate = useNavigate();
    const onSubmitSearchHandler = (e) => {
        e.preventDefault();
        navigate(`/search/${search}`);
    };
    return (
        <SearchFormStyle>
            <InputBox onSubmit={onSubmitSearchHandler}>
                <ButtonGoBack>
                    <Icon.ArrowLeft />
                </ButtonGoBack>
                <Input
                    type={'text'}
                    name={'search'}
                    value={search}
                    onChange={onChangeSearchHandler}
                    placeholder={'이메일 주소'}
                    className="SearchInput"
                />
            </InputBox>
            <PageTitle>고슴이 추천 키워드</PageTitle>
            <SearchOptionList>
                {SEARCH_OPTIONS.map((option) => {
                    return (
                        <li>
                            <Link to={`/search/${option.option}`}>{option.option}</Link>
                        </li>
                    );
                })}
            </SearchOptionList>
        </SearchFormStyle>
    );
};

export default SearchPage;
