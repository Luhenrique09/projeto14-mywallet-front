import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { H1, Conteiner, Form } from "./styled"
import UserContext from "../../contexts/UserContext"

function PageAdd() {
    const navigate = useNavigate()
    const { token } = useContext(UserContext)
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const URL = "http://localhost:5000/records"
    const body = {
        value,
        description,
        type: "entrada"
    }
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        const promise = axios.post(URL, body, config)

        promise.then((res) => {
            navigate("/home");
        });
        promise.catch((erro) => {
            console.log(erro.response.data.message)


        });
    }

    return (
        <>
            <H1>Nova Entrada</H1>
            <Conteiner>

                <Form onSubmit={handleSubmit}>

                    <input
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        id="value"
                        placeholder="Valor"
                        name='value' type='number'
                        required></input>


                    <input
                        onChange={e => setDescription(e.target.value)}
                        value={description}

                        id="des"
                        placeholder="Descrição"
                        name='des' type='text'
                        required></input>

                    <button
                        type='submit'> Salvar entrada </button>

                </Form>
            </Conteiner>
        </>
    )
}

export default PageAdd

