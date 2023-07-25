import { styled } from "styled-components";

export const ProgressBarStyle = styled.div`
    max-width: 100%;
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
    border: none;
    border-bottom: 1px solid;
    background: #fff;
    text-align: left;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 7%;
    z-index: 100;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background: #ff6b00;
        transition: width 0.3s ease;
    }

    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        font-weight: 700;
    }
`;