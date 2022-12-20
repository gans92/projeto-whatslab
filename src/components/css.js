import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-wrap: wrap;
`;
export const MainContainer = styled.div`
border-radius: 10px;
height: 634px;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
align-items: flex-end;
width: 600px;
background-image: url(https://i.pinimg.com/564x/a7/4d/bd/a74dbd931dbb9a41f5d3bf45e8394927.jpg);
background-repeat: no-repeat;
background-position: center;
background-size: cover;
border: solid;
`;
export const Header = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 100%;
img {
  width: 80px;
}
`;
export const Main = styled.div`
width: 100%;
display: flex;
height: 100%;
justify-content: center;
align-items: center;
position: block;
background-color: black;
`;
export const MensagemContainer = styled.div`
width: 80vh;
height: 90vh;
margin-top: 19px;
margin-bottom: 10px;
display: flex;
flex-direction: column-reverse;
`;
export const InputUsuario = styled.input`
background-color: white;
border-radius: 5px;
border: 1px solid;
margin: 3px 8px;
width: 80px;
`;
export const InputMensagem = styled.input`
background-color: white;
border-radius: 5px;
border: 1px solid;
margin: 3px 0px 3px 3px;
`;
export const MandarMensagem = styled.button`
background-color: #00bcd4;
border-radius: 5px;
border: none;
margin-left: 10px;
color: white;
font-weight: bold;
font-size: 16px;
`;
export const Footer = styled.p`
background-color: grey;
width: 100%;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
margin: 0;
`;
export const EscreverMensagem = styled.div`
margin-bottom: 10px;
align-self: center;
`;
export const Mensagem = styled.p`
background-color: white;
margin: 3px;
width: 30%;
padding: 12px 15px;
border-radius: 6px;
border: 1px solid lightgray;
`;
export const MinhaMensagem = styled.div`
align-self: flex-end;
background-color: #dcf8c6;
margin: 10px;
padding: 12px 15px;
text-align: left;
width: 30%;
border-radius: 5px;
border: 1px solid lightgray;
`;