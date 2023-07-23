import { styled } from 'styled-components';

export const Container = styled.div`
    width: 400px;
    margin: auto;
    padding-top: 200px;
    position: relative;
    font-size: 14px;

`;

export const LoginHeader = styled.div`
margin-bottom: 3vh;

a {
    color: #ff6b00;
    display: block;
    width: 60%;
    text-decoration: none;
    
}

.Login-logo {
  width: 240px;
height: 34px;
margin: auto;

}

img{
  width: 100%;
  vertical-align: middle;
  overflow-clip-margin: content-box;
    overflow: clip;
  
}
`;

export const LoginContainer = styled.div`
width: 400px;

.forgotPw {
  margin-top: 20px;
  line-height: 1.8;
  color: #051619;
  text-decoration: underline;
  font-weight: 600;
}
& > Button {
margin-top: 20px;
}

.SignBtn {
  margin-top: 40px;
text-align: center;
font-weight: 600;
text-decoration: underline;

}
&:hover{
  cursor: pointer;
}
`;

export const LoginSocialDiv = styled.div`
border: 1px solid black;
padding: 5px;
border-radius: 8px;
background-color: white;
font-weight: 600;
width: 100%;
display: flex;

img{
    width: 24px;
    height: 24px;
    margin-right: 10px;
    margin-left: 10px;
    align-items: center;
}

button {
  padding: 10px;
  margin-left: -10px;
  display: flex;
  align-items: center;
}
`;

export const LoginDivider = styled.div`
    height: 2px;
    margin: 2rem auto;
    background: #051619;
    text-align: center;
    position: relative;
    z-index: 1;
`;

export const LoginInputContainer = styled.div`
margin-top: -20px;
`;

