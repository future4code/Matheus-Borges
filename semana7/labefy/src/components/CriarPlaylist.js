import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../Parametros";
import Musicas from "./Musicas";


const CriarPlaylistContainer = styled.div`
  display: grid;
  margin-top: 60px;
`;
const DivInputButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
`;
const TituloCriarPlaylist = styled.h2`
  color: white;
  padding: 5px 70px;
  position: absolute;
  text-align: center;
  background-color: #D643AD;
  background-image: linear-gradient(to left, #D643AD, #07C6FD);
  margin-left: -40px;
  border-radius: 10px;
`;
const DivInput = styled.input`
    width: 70%;
    margin-left: 30px;
    margin-top: 10px;
    background-color: white;
    border-radius: 10px;
    border: none;
    border-bottom: 2px solid #D643AD;
    border-top: 2px solid #07C6FD;
`;
const BotaoCriarPlaylist = styled.button`
  background-color: #D643AD;
  border: none;
  color: white;
  padding: 8px 10px;
  text-decoration: none;
  margin: 20px 4px;
  border-radius: 10px;
  background-color: #D643AD;
  background-image: linear-gradient(to left, #D643AD, #07C6FD);
  width: 70px;
  margin-left: 65px;
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


export default class CriarPlaylist extends React.Component {
  state = {
    nomePlaylist: "",
  };

  handleNomePlaylist = (event) => {
    this.setState({ nomePlaylist: event.target.value });
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.nomePlaylist,
    };
    axios
      .post(baseUrl, body, axiosConfig)
      .then((res) => {
        console.log(res);
        alert("Playlist cadastrada com sucesso!");
        this.setState({ nomePlaylist: "" });
      })
      .catch((error) => {
        alert("Falha ao criar playlist!");
        console.log(error);
      });
  };


  render() {
    return (
      <CriarPlaylistContainer>
        <TituloCriarPlaylist>Criar Playlist</TituloCriarPlaylist>
        <DivInputButton>
          <DivInput
            onChange={this.handleNomePlaylist}
            value={this.state.nomePlaylist}
          />
          <BotaoCriarPlaylist onClick={this.criarPlaylist}>
            Criar
          </BotaoCriarPlaylist>

        </DivInputButton>
      </CriarPlaylistContainer>
    );
  }
}
