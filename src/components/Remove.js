import { Link } from "react-router-dom"
import styled from "styled-components"

function Remove() {
    return (
        <>
            <Link to="/remove">
                <Buttton>
                    <p>-</p>
                    <p>Nova<br />saída</p>
                </Buttton>
            </Link>
        </>
    )
}

export default Remove
const Buttton = styled.div`
        width: 155px;
        height: 114px;
        border-radius: 5px;
        background-color: #A328d6;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 10px 9px 9px 10px;

        p{
            font-family: 'Raleway';
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
           color: white;
        }
`