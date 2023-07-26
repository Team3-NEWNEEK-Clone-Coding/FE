import styled from 'styled-components';
import { COLOR } from '../../assets/colors';
import { Link } from 'react-router-dom';
export const HeaderStyle = styled.header`
    width: 100%;
    padding: 40px 60px 36px;
    display: flex;
    justify-content: end;
    align-items: center;
    position: relative;
    .logo-img-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 226px;
        img {
            width: 100%;
            height: auto;
        }
        @media screen and (max-width: 900px) {
            width: 184px;
        }
    }
`;

export const HeaderIconBox = styled.div`
    display: flex;
`;

export const HaederButton = styled(Link)`
    width: 48px;
    height: 48px;
    border: 1px solid ${COLOR.black};
    background-color: ${COLOR.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:nth-child(1) {
        border-right: none;
    }
    svg {
        width: 24px;
        height: 24px;
    }
    &:nth-child(1) svg {
        width: 22px;
        height: 22px;
    }
    &:hover {
        filter: brightness(0.8);
    }
    @media screen and (max-width: 900px) {
        display: none;
    }
`;
