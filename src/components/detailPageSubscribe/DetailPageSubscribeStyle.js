import { css, styled } from "styled-components";

const inputStyle = css`
    padding: 1.3333rem;
    font-size: 1.3333rem;
    line-height: 1.1875;
    width: 100%;
    border: 1px solid #051619;
`;

export const PostSubscribe = styled.form`
    max-width: 45.7142rem;
    margin: 0 auto 9rem;
    padding: 1.7857rem 1.4285rem 0;

    fieldset {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding-top: 5.8333rem;
        border-top: 1px solid #051619;

        .email {
            margin-top: 0;
            margin-bottom: 1.5%;
            width: 100%;

            input {
                ${inputStyle}
                border-radius: 8px;
            }
        }

        .inline-group {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;

            div {
                margin-top: 0;
                margin-bottom: 0%;
                width: 65.833%;

                input {
                    ${inputStyle}
                    border-radius: 8px 0 0 8px;
                }
            }
        }

        .textfield-helper {
            margin-top: 0.25rem;
            color: #b22222;
        }

        button {
            display: block;
            width: 34.167%;
            padding: 1.3333rem;
            color: #fff;
            font-size: 1.3333rem;
            line-height: 1.1875;
            border: 1px solid #051619;
            border-left: 0;
            background-color: #ff6b00;
            border-radius: 0 8px 8px 0;
        }
    }

    p {
        margin-top: 1.3333rem;
        color: #999;
        font-size: 1rem;
        line-height: 1.2;
        text-align: center;

        a {
            display: inline;
            position: static;
            left: auto;
            cursor: pointer;
        }
    }
`;