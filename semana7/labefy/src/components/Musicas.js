import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../Parametros";


const BotaoVoltarLista = styled.button`
  background-color: #D643AD;
  border: none;
  color: white;
  padding: 8px 10px;
  text-decoration: none;
  margin: 15px 120px;
  border-radius: 10px;
  background-color: #D643AD;
  background-image: linear-gradient(to left, #D643AD, #07C6FD);
  width: 150px;
  cursor: pointer;
  &:hover{
    background-color: #07C6FD;
    color: white;
    font-size: 100%;
    &:active {
      background-color: black;
      color: black;
    }
  }
`;
const CriarPlaylistContainer = styled.div`
  display: grid;
  margin-top: 60px;
  align-items:center;
  text-align:center;
`;


export default class Musicas extends React.Component {


    
  render() {
    return (
      <CriarPlaylistContainer>
        {this.props.musicas}
        <BotaoVoltarLista onClick={this.props.mudarPaginaMusica}>Voltar para Lista</BotaoVoltarLista>
      </CriarPlaylistContainer>
    );
  }
}
