import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import vector from "../assets/Vector.png"
import Add from "../components/Add"
import Remove from "../components/Remove"
import UserContext from "../UserContext"
function Home() {
    const [user, setUser] = useState();
    const [record, setRecord] = useState();
    const { token } = useContext(UserContext)
    const URL = "http://localhost:5000/records"
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    useEffect(() => {

        const promise = axios.get(URL, config)
        promise.then((resp) => {
            setUser(resp.data.user)
            setRecord(resp.data.record)


        })

        promise.catch((error) => console.log(error.response.data))

    }, [])
   
    return (
        <>
            <Conteiner>
                <Top>
                    {user && (
                        <h1>Olá, {user.name}</h1>
                    )}
                    <img alt="logout" src={vector}></img>
                </Top>

                <Content>
                    {!record ? (
                        <p> Não há registros de <br /> entrada ou saida</p>
                    ) : 
                    <>
                        {record.map((obj, i) => 
                        <Div key={i}>
                            <div>
                            <h2>{obj.date}</h2>
                            <h3>{obj.description}</h3>
                            </div>
                            <h4>{obj.value}</h4>
                        </Div>
                        )}
                    </>
                    
                    }


                </Content>

                <BottomButtons>
                    <Add />
                    <Remove />
                </BottomButtons>
            </Conteiner>
        </>
    )
}

export default Home

const Div = styled.div`
display: flex;
justify-content: space-between;
padding: 23px 11px 10px 12px;

div{
    display: flex;
}
 h2{
    color:#C6C6C6;   
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-right: 10px;
 }
 h3{
    color:black;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
 }
 h4{
    color:green;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
 }

`

const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 25px 25px 25px;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    margin-bottom: 22px;
    img{
        height: 24px;
        width: 23px;
    }
`

const Content = styled.div`
    width: 100%;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    p{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #868686;
        text-align: center;
        margin-top: 180px;
    }
`

const BottomButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 13px ;
`