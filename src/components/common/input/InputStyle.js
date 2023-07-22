import styled from 'styled-components';

export const InputWrapper = styled.div`
max-width: 400px;
height: 60px;
display: block;
  margin: 0;
    padding: 0;

    display: block;
    padding-block-start: 0.35em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;

    .textfield {
      margin: 1rem 0;
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
    transition: all .2s;
    outline: none;
    box-shadow: none;
  }

  .mainInput {
    width: 452px;
    height: 48px;
    border: 1px solid #051619;
    box-shadow: none;
    border-radius: 0;
  }

  .SearchInput {
    width: 449px;
    height: 52px;
    border: 1px solid #051619;
    box-shadow: none;
    border-radius: 0;
  }
}
`;

export default InputWrapper;
