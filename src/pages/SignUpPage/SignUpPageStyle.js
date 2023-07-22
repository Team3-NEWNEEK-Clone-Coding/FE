import { styled } from 'styled-components';

export const Container = styled.div`
background-color: #E6E4DA;
margin: auto;
font-size: 12px;

`;

export const SignUpContainer = styled.div`
border: 1px solid black;
max-width: 400px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 5rem 0 10rem;
    box-sizing: border-box;
    display: block;
    letter-spacing: -.0125rem;

<<<<<<< HEAD
    img {
      
    }

=======
>>>>>>> ec9b3e0 (feat: 회원가입 작업)
`;

export const SignUpHeader = styled.div`
border: 1px solid black;
display: block;


a {
  border: 1px solid black;
    color: #ff6b00;
    display: block;
    width: 60%;
    margin: 0 auto 3rem;
    text-decoration: none;
}

.img {
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
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
  
    

.textfield {
  margin: 1rem 0;
    position: relative;
    display: block;

  input {
    display: block;
    width: 100%;
    padding: 10px 40px 11px 1.5rem;
    border: 1px solid #051619;
    border-radius: 0;
    box-sizing: border-box;
    box-shadow: 0;
    font: inherit;
    color: #051619;
    transition: all .2s;
    outline: none;
    box-shadow: none;
    
  }
}
`;

export const SignUpTerms = styled.div`
    padding: 0 0 1rem;
    margin: 0;

.checkboxDiv {
  display: block;
    padding: 0.5rem 0;
    position: relative;
}

#check-all {
  margin-left: 1vh;
  margin-top: 5px
}

span {
  margin: 0.5vh;
}

.inputLink {
  font: 12px;
  text-decoration: underline;
  color: #051619;
  position: absolute;
  margin-top: 1vh;
  transform: translateX(320px);
  
}
`;

export const SignUpButton = styled.div`

    padding: 32px 0;
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
`;

