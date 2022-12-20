import React, { useState } from "react";
import { Container, MinhaMensagem, Mensagem, Header, Footer, MandarMensagem, InputMensagem, Main, MainContainer, MensagemContainer, EscreverMensagem, InputUsuario } from "./css";
import logo from "../img/logo.jpg";

const CriarMensagem = () => {
  const [inputUser, setInputUser] = useState("");
  const [inputMensagem, setInputMensagem] = useState("");
  const [mensagem, setMensagem] = useState([]);

  const handleInputUser = (e) => {
    setInputUser(e.target.value);
  };
  const handleInputMessage = (e) => {
    setInputMensagem(e.target.value);
  };

  const mandarMensagemEnter = (e) => {
    if (e.key === "Enter") {
      return mandarMensagem(e);
    }
  };

  const mandarMensagem = (e) => {
    e.preventDefault();
    if (inputUser !== "" && inputMensagem !== "") {
      setMensagem([{ user: inputUser, mensagem: inputMensagem }, ...mensagem]);
      setInputMensagem("");
      setInputUser("");
    } else {
      alert("Preencha todos os campos");
    }
  };

  const mensagemGerada = mensagem.map((evento, index) => {
    const deletarMensagem = () => {
      const novasMensagens = [...mensagem];
      const deletar = novasMensagens.findIndex((mensagemExcluida) => {
        return mensagemExcluida === evento;
      });
      novasMensagens.splice(deletar, 1);
      setMensagem(novasMensagens);
    }

    if (evento.user === "eu") {
      return (
        <MinhaMensagem key={index} onDoubleClick={deletarMensagem}>
          {evento.mensagem}
        </MinhaMensagem>
      );
    } else {
      return (
        <Mensagem key={index} onDoubleClick={deletarMensagem}>
          <strong>{evento.user}</strong>
          <br />
          {evento.mensagem}
        </Mensagem>
      );
    }
  });

  return (
    <div>
      <Container>
        <Header>
          <img src={logo} alt="logo" />
          <h1>WhatsLab</h1>
        </Header>

        <Main>
          <MainContainer>
            <MensagemContainer>{mensagemGerada}</MensagemContainer>
            <EscreverMensagem onKeyPress={mandarMensagemEnter}>
              <InputUsuario
                placeholder="Usuário"
                onChange={handleInputUser}
                value={inputUser}
              />
              <InputMensagem
                placeholder="Mensagem"
                onChange={handleInputMessage}
                value={inputMensagem}
              />
              <MandarMensagem onClick={mandarMensagem} type="submit">
                Enviar
              </MandarMensagem>
            </EscreverMensagem>
          </MainContainer>
        </Main>

        <Footer>
          Gabriel Alisson 2022 - Todos os direitos reservados - WhatsLab
        </Footer>
      </Container>
    </div>
  );
};

export default CriarMensagem;