import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import UserContext from "../UserContext"

function Login() {
    const navigate = useNavigate()
    const URL = "http://localhost:5000/sign-in"
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const body = {
        email,
        password,
    }
    const { setAndPersistToken } = useContext(UserContext);
    
    function handleSubmit (e){
        e.preventDefault();
        
        setIsLoading(true);

        const promise = axios.post(URL, body)
        
            promise.then((res) => {
                setAndPersistToken(res.data)
                setIsLoading(true);
                navigate("/home");               
            });
            promise.catch((erro) => {
                console.log(erro.response.data.message)
                setIsLoading(false);
                
            });
    }
    
    return (

        <>
            <Conteiner>
                <Titlle>MyWallet</Titlle>
                <Form onSubmit={handleSubmit}> 

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
                        id="pass"
                        placeholder="Senha"
                        name='pass' type='password'
                        required></input>

                    <button
                        type='submit'> Entrar </button>

                </Form>
                <Link to="/sign-up">
                    <A>Primeira vez? Cadastre-se!</A>
                </Link>


            </Conteiner>
        </>
    )
}

export default Login

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