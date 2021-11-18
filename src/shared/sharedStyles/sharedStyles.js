import styled from "styled-components";

const SignUpOrLoginInputStyled = styled.input`
    width: 100%;
    height: 65px;
    margin-bottom: 13px;
    background-color: #FFF;
    border-radius: 6px;
    border: none;
    padding-left: 17px;
    font-family: 'Oswald', sans-serif;
    font-size: 27px;
    font-weight: 700;
    
    &::placeholder{
        color: #9F9F9F;
    }
`
const SignUpOrLoginButtonStyled = styled.button`
    background-color: #8C97EA;
    margin-top: 50px;
    height: 65px;
    border: none;
    border-radius: 6px;
    margin-bottom: 13px;
    width: 90%;
    font-size: 27px;
    font-weight: 700;
    color: white;
    &:hover{
        cursor: pointer;
        filter: brightness(1.5);
    }
    
`
const SwitchSignUpLoginLinkStyled = styled.p`
    text-align: center;
    margin-top: 15px;
    color: white;
`
export {
    SignUpOrLoginButtonStyled,
    SignUpOrLoginInputStyled,
    SwitchSignUpLoginLinkStyled
}