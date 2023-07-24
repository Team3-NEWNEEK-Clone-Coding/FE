import { styled } from "styled-components";

export const PostHead = styled.header`
    margin: 0 0 4rem;
    padding: 4rem 5% 5.5rem;
    border-bottom: 1px solid #051619;
    text-align: center;
    overflow: hidden;
    position: relative;

    a {
        color: #ff6b00!important;
        font-size: 1.125rem;
        font-weight: 700;
        text-decoration: underline;
    }
    h2 {
        padding: 0.5rem 0 2rem;
        font-size: 2.5rem;
        letter-spacing: -.075rem;
        color: #051619;
        font-weight: 700;
        line-height: 1.4;
        word-break: keep-all;
        margin: 0;
    }
    time {
        font-size: 1.125rem;
    }
`;

export const PostContainer = styled.div`
    max-width: 45.7142rem;
    margin: 0 auto;
    padding: 0 1.4285rem 5.7142rem;

    .post-featured {
        margin-top: 2rem;
        margin-bottom: 4rem;
        padding: 0!important;
        border: 1px solid #051619;
        background: #fff;

        img {
            vertical-align: middle;
            width: 100%;
            border: 0;
        }
    }

    .post-body {
        position: relative;
        color: #051619;
        font-size: 1.1428rem;
        font-weight: 300;
        line-height: 1.625;
        white-space: wrap;
    }
`;

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
