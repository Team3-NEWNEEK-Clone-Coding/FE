import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../assets/colors';

const CheckBoxInputStyle = styled.div`
    padding: 0.5rem 0;

    input[type='checkbox'] {
        display: none;
    }

    input[type='checkbox'] + label {
        position: relative;
        display: block;
        padding-left: 2rem;
        cursor: pointer;
        &::before {
            content: '';
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 0;
            border: 1px solid ${COLOR.black};
            background-color: #fff;
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    input[type='checkbox']:checked + label::before {
        background-color: ${COLOR.black};
    }
    input[type='checkbox']:checked + label::after {
        content: '';
        width: 8px;
        height: 4px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        position: absolute;
        left: 4px;
        top: 4px;
        transform: rotate(-45deg);
    }
`;

const CheckBoxInput = ({ children, labelForId, ...restProps }) => {
    return (
        <CheckBoxInputStyle>
            <input type="checkbox" name="checkbox" id={labelForId} {...restProps} />
            <label className="InputTitle" htmlFor={labelForId}>
                {children}
            </label>
        </CheckBoxInputStyle>
    );
};

export default CheckBoxInput;
