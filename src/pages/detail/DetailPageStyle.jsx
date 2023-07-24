import { styled } from "styled-components";


export const PostHashtag = styled.section`
    flex-wrap: wrap;
    margin: 0 auto 2rem;
    display: flex;
    max-width: 45.7142rem;
    padding: 0 1.4285rem;

    a {
        display: block;
        margin: 0 1rem 0.5rem 0;
        font-size: 1rem;
        color: #051619;
    }
    
`;

export const PostFoot = styled.footer`
    display: flex;
    max-width: 45.7142rem;
    padding: 0 1.4285rem;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

export const PostFootReaction = styled.div`
    div {
        font-size: 1rem;
        position: relative;

        button {
            display: flex;
            color: #9e9e9e;
            line-height: 50px;

            span {
                display: block;
                margin-right: 1rem;
                font-size: 2rem;
                b {
                    margin-left: 0.5rem;
                }
            }
        }
    }

`;

export const PostShare = styled.div`
    display: flex;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.5rem;
        button {
            background-color: transparent;
            border: none;
            padding: 0px;
            font: inherit;
            color: inherit;
            cursor: pointer;
        }
    }

    
`;