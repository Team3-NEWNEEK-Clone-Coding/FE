import styled from 'styled-components';
import { COLOR } from '../../assets/colors';

export const PageTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin: 3.5rem 0 2rem;
    span {
        margin-right: 1rem;
    }
    .keyword {
        color: rgb(153, 153, 153);
        /* margin-right: 1rem; */
    }
`;

export const ButtonBox = styled.div`
    width: 100%;
    padding: 2rem;
    button {
        display: block;
        margin: 0 auto;
    }
`;

export const SearchContentWrap = styled.div`
    border-top: 1px solid ${COLOR.black};
    min-height: 50vh;
    padding-bottom: 70px;
    .status {
        display: block;
        margin: 0.5rem 0 0;
        font-size: 1.24rem;
    }
    .sorting {
        margin: 2.5rem 0;
        background-color: ${COLOR.black};
        color: #fff;
        font-weight: 700;
        width: 80px;
        padding: 0.6rem 0;
        font-size: 0.8rem;
        text-align: center;
    }
`;
