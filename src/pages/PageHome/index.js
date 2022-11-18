import axios from "axios"
import { useContext, useEffect, useState } from "react"
import {
    Balance,
    Div,
    Conteiner,
    Top,
    Content,
    BottomButtons
} from "./styled"
import Add from "../../components/Add"
import Logout from "../../components/Logout"
import Remove from "../../components/Remove"
import UserContext from "../../contexts/UserContext"
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


    function balance() {

        let entry = 0, exit = 0;
        for (let j = 0; j < record.length; j++) {
            if (record[j].type === "entrada") {
                entry += Number(record[j].value)
            }
            if (record[j].type === "saida") {
                exit += Number(record[j].value)
            }
        }
        const total = entry - exit;
        return total.toFixed(2)

    }

    return (
        <>
            <Conteiner>
                <Top>
                    {user && (
                        <h1>Olá, {user.name}</h1>
                    )}
                    <Logout />
                </Top>

                <Content>
                    {!record ? (
                        <p> Não há registros de <br /> entrada ou saída</p>
                    ) :
                        <>
                            {record.map((obj, i) =>
                                <>
                                    <Div key={i} type={obj.type}>
                                        <div>
                                            <h2>{obj.date}</h2>
                                            <h3>{obj.description}</h3>
                                        </div>
                                        <h4>{obj.value}</h4>
                                    </Div>
                                    <Balance cor={balance()}>
                                        <h2>Saldo</h2>
                                        <h3>{balance()}</h3>
                                    </Balance>
                                </>
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

