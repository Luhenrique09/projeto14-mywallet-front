import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import UserContext from "../UserContext"

function PageAdd() {
    const navigate = useNavigate()
    const {token} = useContext(UserContext)
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

const H1 = styled.div`
    width: 168px;
    height: 31px;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    margin: 25px 
`

const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px 50px 50px;
   
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