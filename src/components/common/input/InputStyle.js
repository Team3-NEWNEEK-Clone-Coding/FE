import styled from 'styled-components';

export const InputWrapper = styled.div`
    font-size: 14px;
    max-width: 400px;
    height: 60px;
    display: block;

    margin: 0;
    padding: 0;
    padding-block-start: 0.35em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
    margin-bottom: 5px;

    .textfield {
        position: relative;
        display: block;

        input {
            display: block;
            font-size: 16px;
            width: 100%;
            height: 45px;

            padding: 10px 40px 11px 1.5rem;
            border: 1px solid #051619;
            border-radius: 0;
            box-sizing: border-box;
            box-shadow: 0;
            color: #051619;
            transition: all 0.2s;
            outline: none;
            box-shadow: none;
            font-size: 14px;
        }

        .mainInput {
            width: 452px;
            height: 48px;
            border: 1px solid #051619;
            box-shadow: none;
            border-radius: 0;
            @media screen and (max-width: 900px) {
                width: 100%;
            }
        }

        .SearchInput {
            width: 449px;
            height: 52px;
            padding-left: 54px;
            padding-top: 12px;
            border: 1px solid #051619;
            border-radius: 0;
            box-shadow: none;
            font-size: 1.1rem;
        }
    }
`;

export default InputWrapper;
