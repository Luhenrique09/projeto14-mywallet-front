import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
    Conteiner,
    Titlle,
    Form,
    A
} from "./styled"
import UserContext from "../../contexts/UserContext"

function Login() {
    const navigate = useNavigate()
    const URL = "http://localhost:5000/sing-in"
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const body = {
        email,
        password,
    }
    const { setAndPersistToken } = useContext(UserContext);

    function handleSubmit(e) {
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

