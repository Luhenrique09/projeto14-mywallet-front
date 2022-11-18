import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import vector from "../assets/Vector.png"
import UserContext from "../contexts/UserContext"

function Logout() {
    const navigate = useNavigate();
    const { token } = useContext(UserContext);
    const URL = "http://localhost:5000/sessions"
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    function logout() {
        const promise = axios.delete(URL, config)
        promise.then(() => {
            localStorage.setItem('token', '')
            navigate('/')

        })

        promise.catch((error) => console.log(error.response.data))
    }

    return (
        <img alt="logout" src={vector} onClick={logout}></img>
    )
}

export default Logout