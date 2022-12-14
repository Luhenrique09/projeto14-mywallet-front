import styled from "styled-components";

const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 50px 50px 50px;
    
`
const Titlle = styled.h1`
  
    margin-bottom: 24px;
    font-family: 'Saira Stencil One';
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-items: center;
    
    input{
    margin-bottom: 13px ;
    width: 100%;
    height: 58px;
    border-radius: 5px;
    border: none;
    ::placeholder{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: black;
       
        }
    }

    button{
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        color: white;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
    }
`
const A = styled.p`
    margin-top: 36px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-decoration-line: underline;
    text-decoration: none;
    color:white;
  
`

export {
    Conteiner,
    Titlle,
    Form,
    A
}