import styled from "styled-components";

const Balance = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    left: 12px;
    right: 11px;
    h2{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }
    h3{
        font-family: 'Raleway';
        font-style: normal;
        font-size: 17px;
        line-height: 20px;
        text-align: right;
        color: ${props => props.cor < 0 ? 'red' : 'green'};
    }
`

const Div = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 11px 0 12px;


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
    color:${props => props.type === 'entrada' ? 'green' : 'red'};
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
    position: relative;
  
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

export {
    Balance,
    Div,
    Conteiner,
    Top,
    Content,
    BottomButtons
}