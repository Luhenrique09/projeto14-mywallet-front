import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import {
    Conteiner,
    Titlle,
    Form,
    A
} from "./styled"

function SingUp() {
    const URL = "http://localhost:5000/sing-up"
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

        if (confir === password) {
            promise.then(() => {
                setIsLoading(false);
                navigate("/");
            });
            promise.catch((erro) => {
                console.log(erro)
                setIsLoading(false);

            });
        } else {
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

