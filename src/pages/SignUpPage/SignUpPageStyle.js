import { styled } from 'styled-components';

export const Container = styled.div`
background-color: #E6E4DA;
margin: auto;
font-size: 12px;

.EmojiInputDiv{
  width: 40px;
  height: 10px;
  margin-top: 30px;
}

.abc {
  width: 500px;
  height: 600px;
  background-color: black;
}

`;

export const SignUpContainer = styled.div`
    max-width: 400px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 5rem 0 5rem;
    box-sizing: border-box;
    display: block;
    letter-spacing: -.0125rem;
   
`;

export const SignUpHeader = styled.div`
display: block;
width: 400px;


a {

    color: #ff6b00;
    display: block;
    width: 60%;
    margin: 0 auto 3rem;
    text-decoration: none;
}

.Sign-logo {
 height: 10px;

}

img{
  width: 100%;
  vertical-align: middle;
  overflow-clip-margin: content-box;
    overflow: clip;
}


`;
export const SignUpInputContainer = styled.form`
  display: block;
  margin: 0;
    padding: 0;
    display: block;
    padding-block-start: 0.35em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
  

.textfield {
    position: relative;
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

  .InputDiv {
    height: 260px;
    margin-bottom: 5vh
  }
}
`;

export const StyledDiv = styled.div`
margin: 0;

select {
  font-weight: 400;
  padding: 0;
  width: 100%;
  height: 45px;
  font-size: 14px;
  border: 1px solid black;
  padding: 10px 40px 11px 1rem;

  &:hover {
  cursor: pointer;
}
}

emoji {
font-size: 100px;
}


`;


export const SignUpTerms = styled.div`
    padding: 0 0 1rem;
    margin-top: 20px;
    transform: translateY(-10px);

.checkboxDiv {
  display: block;
    padding: 0.5rem 0;
    position: relative;

}

#check-all {
  margin-left: 0;
  margin-top: 7px;
  transform: translateY(5px);
  width: 15px;
  height: 15px;

}

.InputTitle {
  margin: 0.5vh;
  font-size: 15px;

}

.inputLink {
  font: 12px;
  text-decoration: underline;
  font-size: 13px;
  font-weight: 600;
  color: #051619;
  position: absolute;
  margin-top: 1vh;
  margin-left: 50px;
}
`;

export const SignUpButton = styled.div`

    padding: 20px 0;
    margin: auto;
  
.signUp-button {
  width: 100%;
  height: 40px;
  background-color: #ccc;
  color: #666;
  position: relative;
  border-radius: 8px;
  text-align: center;
  padding: 10px 1.5rem 11px;

}

.primary-button {
  background: #051619;
  padding: 10px 1.5rem 11px;
  position: relative;
  border-radius: 8px;
  color: #fff;
}

a {
  text-align: center;
}
`;


