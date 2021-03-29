import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../Parametros";

const AdicionarMusicaContainer = styled.div`
    display:flex;
    flex-direction: column;
  margin-top: 60px;
`;
const DivInput = styled.input`
    width: 60%;
    margin-left: 65px;
    margin-top: 10px;
    background-color: white;
    border-radius: 10px;
    border: none;
    border-bottom: 2px solid #D643AD;
    border-top: 2px solid #07C6FD;
`;
const BotaoAdicionarMusica = styled.button`
  background-color: #D643AD;
  border: none;
  color: white;
  padding: 8px 10px;
  text-decoration: none;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #D643AD;
  background-image: linear-gradient(to left, #D643AD, #07C6FD);
  width: 90px;
  margin-left: 125px;
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
const TituloAdicionarMusica = styled.h2`
  color: white;
  padding: 5px 70px;
  text-align: center;
  background-color: #D643AD;
  background-image: linear-gradient(to left, #D643AD, #07C6FD);
  border-radius: 10px;
`;
const Label = styled.label`
  background-image: linear-gradient(to left, #D643AD, #07C6FD);
  border-radius: 10px;
  padding: 4px;
  color: white;
  margin-top: 10px;
  text-align: center;
  width: 230px;
  margin-left: 50px;
`


export default class AdicionarMusicas extends React.Component {

state = {
    nomeMusica: '',
    nomeArtista: '',
    urlMusica: ''
}


handleNomeMusica = (event) => {
    this.setState({ nomeMusica: event.target.value });
  };

handleNomeArtista = (event) => {
    this.setState({ nomeArtista: event.target.value });
};
handleUrlMusica = (event) => {
    this.setState({ urlMusica: event.target.value });
};

criarMusica = (id) => {
    const body = {
        name: this.state.nomeMusica,
        artist: this.state.nomeArtista,
        url: this.state.urlMusica
    };
    axios
        .post(`${baseUrl}/${id}/tracks`, body, axiosConfig)
        .then((res) => {
            console.log(res);
            alert('Música adicionada com sucesso!');
            this.setState({nomeMusica: '', nomeArtista: '', urlMusica: ''})
        })
        .catch ((err) => {
            alert('Falha ao criar música!')
            console.log(err)
        })
    }


    render(){
        return(
            <AdicionarMusicaContainer>
                <TituloAdicionarMusica>Adicionar Música</TituloAdicionarMusica>

                <Label>Música</Label>
                <DivInput
                    onChange={this.handleNomeMusica}
                    value={this.state.nomeMusica}
                />

                <Label>Artísta</Label>
                <DivInput
                    onChange={this.handleNomeArtista}
                    value={this.state.nomeArtista}
                />

                <Label>Url</Label>
                <DivInput
                    onChange={this.handleUrlMusica}
                    value={this.state.urlMusica}
                />

                <BotaoAdicionarMusica onClick={this.criarMusica}>
                    Adicionar
                </BotaoAdicionarMusica>

            </AdicionarMusicaContainer>
        );
    }
}