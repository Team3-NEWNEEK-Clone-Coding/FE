import { styled, keyframes } from "styled-components";

const rotate = keyframes`
    0% {
        transform: scale(0.2) rotate(0deg);
    }
    100% {
        transform: scale(0.2) rotate(360deg);
    }
`;

export const LoadingImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    img {
        animation: ${rotate} 5s linear infinite;
    }
`;