import React from "react";
import styled from "styled-components";
import CriarPlaylist from "./components/CriarPlaylist";
import Lista from "./components/Lista";
import AdicionarMusicas from "./components/AdicionarMusicas";


const DivContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #D643AD;
  background-image: linear-gradient(to right, #D643AD, #07C6FD);
`;
const TituloLabefy = styled.h1`
  color: white;
  margin-left: 20px;
  text-shadow: 2px 2px;
`;
const HeaderDiv = styled.header`
  display: flex;
  justify-content: space-between;
  height: 12vh;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const BotaoVerPlaylist = styled.button`
  background-color: #07C6FD;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 35px;
  transition-duration: 0.5s;
  cursor: pointer;
  border-radius: 15px;
  border-style: dotted dashed solid double;
  border-color: #D643AD;
  &:hover {
    background-color: #D643AD;
    color: white;
    font-size: 120%;
    border: 2px solid #07C6FD;
    border-style: dotted dashed solid double;
    &:active {
      background-color: black;
      color: white;
    }
  }
`;
const BodyContainer = styled.body`
  display: flex;
  flex-direction: column;
  height: 72.5vh;
  margin: 0;
  padding: 0;
  align-items: center;
`;
const FooterContainer = styled.footer`
  height: 12vh;
  margin: 0;
  padding: 0;
  text-align: center;
  text-shadow: 2.5px 2.5px;
`;
const BotaoAdicionarMusica = styled.button`
  background-color: #07C6FD;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 35px;
  margin-left: 750px;
  transition-duration: 0.5s;
  cursor: pointer;
  border-radius: 15px;
  border-style: dotted dashed solid double;
  border-color: #D643AD;
  &:hover {
    background-color: #D643AD;
    color: white;
    font-size: 120%;
    border: 2px solid #07C6FD;
    border-style: dotted dashed solid double;
    &:active {
      background-color: black;
      color: white;
    }
  }
`;

export default class App extends React.Component {
  state = {
    pagina: "criarPlaylist",
  };

  mudarPagina = () => {
    if (this.state.pagina === "criarPlaylist") {
      this.setState({ pagina: "lista" });
    } else if (this.state.pagina === "lista") {
      this.setState({ pagina: "criarPlaylist" });
    } else if(this.state.pagina === "adicionarMusica"){
      this.setState({ pagina: "criarPlaylist"})
    }
  };

  botaoAdicionarMusicas = () => {
    if (this.state.pagina === "criarPlaylist") {
      this.setState({ pagina: "adicionarMusica" });
    } 
  }

  renderizaPagina = () => {
    switch (this.state.pagina) {
      case "criarPlaylist":
        return <CriarPlaylist />;
      case "lista":
        return <Lista />;
      case 'adicionarMusica':
        return <AdicionarMusicas />;
      default:
        return <div></div>;
    }
  };

  botaoMudarPagina = () => {
    switch (this.state.pagina) {
      case "criarPlaylist":
        return <BotaoVerPlaylist onClick={this.mudarPagina}> Ver Playlists </BotaoVerPlaylist>
      case "lista":
        return <BotaoVerPlaylist onClick={this.mudarPagina}> Criar Playlists </BotaoVerPlaylist>
      case "adicionarMusica":
        return <BotaoVerPlaylist onClick={this.mudarPagina}> Criar Playlists </BotaoVerPlaylist>
    }
  };

  render() {
    return (
      <DivContainer>
        <HeaderDiv>
          <TituloLabefy>Labefy</TituloLabefy>
          <BotaoAdicionarMusica onClick={this.botaoAdicionarMusicas}> Adicionar Músicas </BotaoAdicionarMusica>
          {this.botaoMudarPagina()}
        </HeaderDiv>

        <BodyContainer>{this.renderizaPagina()}</BodyContainer>

        <FooterContainer>
          <h1>Seu site de músicas favorito!</h1>
        </FooterContainer>
      </DivContainer>
    );
  }
}
