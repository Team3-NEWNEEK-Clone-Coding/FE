import styled from 'styled-components';
import { COLOR } from '../../assets/colors';
export const NavStyle = styled.nav`
    width: 100%;
    background-color: #fff;
    border-top: 1px solid ${COLOR.black};
    border-bottom: 1px solid ${COLOR.black};
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const CategoryList = styled.ul`
    display: flex;
    font-size: 1rem;
    white-space: nowrap;
    overflow: overlay;
    li {
        margin: 0 12px;
        border-bottom: 3px solid #fff;
        a {
            display: block;
            width: 100%;
            padding: 1.5rem 0;
            cursor: pointer;
        }
        &:hover {
            color: ${COLOR.orange};
            border-bottom: 3px solid ${COLOR.black};
        }
        &.active {
            border-bottom: 3px solid ${COLOR.black};
        }
    }
    @media screen and (max-width: 900px) {
        font-size: 0.9rem;
    }
`;
