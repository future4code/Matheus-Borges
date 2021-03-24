import React from "react";
import styled from "styled-components";
import Lista from "./components/Lista";
import CriarUsuario from "./components/CriarUsuario";


const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #6CBCE1;
  border-radius: 10px;
  width: 300px;
`
const BotaoPagina = styled.button`
  background-color: #6CBCE1;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  border-radius: 10px;
`
const Titulo = styled.h1`
  color: #6CBCE1;
`


export default class App extends React.Component { 

  state = {
    pagina: "criarUsuarios",
  };

  mudarPagina = () => {
    if(this.state.pagina === "criarUsuarios"){
      this.setState({pagina: "listaUsuarios"})
    } else if (this.state.pagina === "listaUsuarios"){
      this.setState({pagina:"criarUsuarios"})
    }
  };
  

  renderizaPagina = () => {
    switch(this.state.pagina) {
      case "criarUsuarios":
        return  <CriarUsuario /> 
      case "listaUsuarios":
        return  <Lista /> 
      default:
        return  <div></div>
    }
  }

  render() {
    return (
      <DivContainer>
        <Titulo>Labenusers</Titulo>

        <BotaoPagina onClick={this.mudarPagina}>Trocar Página</BotaoPagina>
          {this.renderizaPagina()}

      </DivContainer>
    );
  }
}