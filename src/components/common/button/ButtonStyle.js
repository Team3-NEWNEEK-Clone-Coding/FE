import styled, { css } from 'styled-components';

export const ButtonStyle = styled.button`
  border: 2px solid black;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  
  &:hover{
    cursor: pointer;
  }

  ${(props) => {
    switch (props.size) {
      case "xxs":
        return css`
          height: 48px;
          width: 48px;
        `;

      case "xsm":
        return css`
          height: 80px;
          width: 34px;
        `;

      case "sm":
        return css`
          height: 70px;
          width: 218px;
        `;
      case "md":
        return css`
          height: 50px;
          width: 222px;
        `;
      case "lg":
        return css`
          height: 48px;
          width: 240px;
        `;
      case "xl":
        return css`
          height: 48px;
          width: 400px;
        `;
      default:
        return css`
          height: 48px;
          width: 400px;
        `;
    }
  }}

  ${(props) => {
    switch (props.theme) {
      case "moreBtn":
        return css`
          background-color: ${props.isHovered ? '#ff6b00' : '#fff'};
          color: ${props.isClicked ? '#051619' : '#051619'};
          &:hover{
          background-color: #ff6b00;
        }
        `;

      case "MainAppDownloadBtn":
        return css`
        background-color: ${props.isHovered ? '#fff' : '#051619'};
        color: ${props.isHovered ? '#051619' : '#fff'};
    
`;

      case "NewsLetterBtn":
        return css`
        background-color: ${props.isHovered ? '#051619' : '#fff'};
        color: ${props.isHovered ? '#fff' : '#051619'};

`;

      case "SignUpBtn":
        return css`
        background-color: ${props.isClicked ? '#fff' : '#051619'};
        color: ${props.isClicked ? '#051619' : '#fff'};
        text-align: center;
`;

      case "LoginBtn":
        return css`
        background-color: ${props.isHovered ? '#fff' : '#051619'};
        color: ${props.isHovered ? '#051619' : '#fff'};

`;
      case "DetailPageNewsBtn":
        return css`
          background-color: ${props.isHovered ? '#CC3300' : '#ff6b00'};
          color: ${props.isClicked ? '#fff' : '#fff'};
 
        `;

      case "UserBtn":
        return css`
          background-color: white;
          border: 1px solid black;
          border-radius: 0px;
          text-align: center;
          font-size: 20px;
        `;

      case "SearchBtn":
        return css`
          background-color: white;
          border: 1px solid black;
          border-radius: 0px;
          text-align: center;
          font-size: 20px;
          
        `;

      default:
        return css``;
    }
  }}

`;
