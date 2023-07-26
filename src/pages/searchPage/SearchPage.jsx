import React, { useState } from 'react';
import Input from '../../components/common/input/Input';
import Icon from '../../assets/icons/commonIcons';
import useInput from '../../hooks/useInput';
import SearchOptionList from '../../components/SearchOptionList';
import { useNavigate } from 'react-router-dom';
import { SearchPageStyle, InputBox, ButtonGoBack } from './SearchPageStyle';

const SearchPage = () => {
    const [search, onChangeSearchHandler] = useInput();
    const nav = useNavigate();
    return (
        <SearchPageStyle>
            <InputBox>
                <ButtonGoBack onClick={() => nav(-1)}>
                    <Icon.ArrowLeft />
                </ButtonGoBack>
                <form action="" onSubmit={() => nav(`/search/${search}`)}>
                    <Input
                        type={'text'}
                        name={'search'}
                        value={search}
                        onChange={onChangeSearchHandler}
                        placeholder={'고슴아 이게 궁금해.(인물, 이슈)'}
                        className="SearchInput"
                    />
                </form>
            </InputBox>
            <SearchOptionList />
        </SearchPageStyle>
    );
};

export default SearchPage;
