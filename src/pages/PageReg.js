import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

function SingUp() {
    const URL = "http://localhost:5000/sign-up"
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confir, setConfir] = useState('')
    const body = {
        name,
        email,
        password,
    }
 
      function handleSubmit(e) {
        e.preventDefault();
        
        setIsLoading(true);

        const promise = axios.post(URL, body)

        if(confir===password){          
            promise.then(() => {
                setIsLoading(false);
                navigate("/");
            });
            promise.catch((erro) => {
                console.log(erro)
                setIsLoading(false);
                
            });
        }else {
            alert("Digite a mesma senha para confirmar!")
            setIsLoading(false)
        }

        
    }

    return (
        <>
            <Conteiner>
                <Titlle>MyWallet</Titlle>
                <Form onSubmit={handleSubmit}>

                    <input
                        onChange={e => setName(e.target.value)}
                        value={name}
                        disabled={isLoading}
                        id="nome"
                        placeholder="Nome"
                        name='none' type='text'
                        required></input>


                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        disabled={isLoading}
                        id="email"
                        placeholder="E-mail"
                        name='email' type='email'
                        required></input>

                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        disabled={isLoading}
                        id="senha"
                        placeholder="Senha"
                        name='senha' type='password'
                        required></input>

                    <input
                        onChange={e => setConfir(e.target.value)}
                        value={confir}
                        disabled={isLoading}
                        id="confirm"
                        placeholder="Confirme a senha"
                        name='confirm' type='password'
                        required></input>

                    <button 
                        type='submit'> Cadastrar </button>

                </Form>

                <Link to="/">
                    <A>Já tem uma conta? Entre agora!</A>
                </Link>

            </Conteiner>
        </>
    )
}

export default SingUp

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