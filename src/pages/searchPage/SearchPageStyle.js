import styled from 'styled-components';

export const SearchPageStyle = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    width: 500px;
`;
export const InputBox = styled.div`
    position: relative;
    margin-top: 20px;
`;
export const ButtonGoBack = styled.button`
    position: absolute;
    top: 50%;
    left: 14px;
    transform: translateY(-45%);
    z-index: 20;
    cursor: pointer;
    svg {
        width: 25px;
        height: 25px;
    }
`;
