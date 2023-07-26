import { createGlobalStyle } from 'styled-components';
import { COLOR } from '../assets/colors';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    body {
        font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        background-color: ${COLOR.bg};
    }
    button{
        all:unset;
        box-sizing: border-box;
    }
    input:focus, textarea:focus {outline: none;}
    textarea{
        resize: none;
        font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    }
    .center{
        max-width: 1440px;
        padding: 0 40px;
        margin: auto;
        @media screen and (max-width: 1360px) {
            max-width: 1040px;
        }
    }
    
`;

export default GlobalStyle;
