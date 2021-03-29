import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../Parametros";
import Musicas from './Musicas'


const ButtonDeletarPlaylist = styled.button`
  background-color: #07C6FD;
  border: none;
  color: white;
  text-decoration: none;
  margin: 4px 2px;
  border-radius: 10px;
  background-color: #D643AD;
  background-image: linear-gradient(to left, #D643AD, #07C6FD);
  color: white;
  cursor: pointer;
  &:active {
      background: #D643AD;
      color: white;
    }
`;
const TituloListaPlaylist = styled.h2`
  color: white;
  padding: 5px 50px;
  text-align: center;
  width: 300px;
  background-color: #D643AD;
  background-image: linear-gradient(to left, #D643AD, #07C6FD);
  border-radius: 10px;
  margin-top: -50px;
  
`;
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
`;
const DivLista = styled.div`
    display: flex;
    justify-content: space-around;
    color: white;
    border-bottom: 2px solid #07C6FD;
    border-top: 2px solid #D643AD;
    border-radius: 20px;
`;
const NomePlaylist = styled.p`
  color: white;
  cursor: pointer;
`

export default class Lista extends React.Component {
  state = {
    playlist: [],
    id: '',
    pagina: 'lista'
  };

  componentDidMount() {
    this.pegarPlaylist();
  }

  pegarPlaylist = async () => {
    try {
      const resposta = await axios.get(baseUrl, axiosConfig);
      this.setState({ playlist: resposta.data.result.list });
    } catch (error) {
      console.log(error);
    }
  };

  deletarPlaylist = async (id) => {
    if (window.confirm("Deseja mesmo deletar o usuário?")) {
      axios
        .delete(`${baseUrl}/${id}`, axiosConfig)
        .then((res) => {
          this.pegarPlaylist();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  mudarPaginaMusica = (musicas) => {
    if(this.state.pagina === 'lista') {
      this.setState({pagina: 'musicas', id: musicas})
    }else{
      this.setState({pagina: 'lista', id:''})
    }
  }

  render() {
    const mapPlaylist = this.state.playlist.map((playlist) => {
      return (
        <DivLista key={playlist.id}>
          <NomePlaylist onClick={() => this.mudarPaginaMusica(playlist.id)}>{playlist.name}</NomePlaylist>
          <ButtonDeletarPlaylist onClick={() => this.deletarPlaylist(playlist.id)}>
            Deletar
          </ButtonDeletarPlaylist>
        </DivLista>
      );
    });
    return (
      <DivContainer>
        <TituloListaPlaylist>Playlists</TituloListaPlaylist>

        {this.state.pagina === 'lista' ? mapPlaylist : 
        <Musicas mudarPaginaMusica={this.mudarPaginaMusica} musicas={this.state.id}
        />}

      </DivContainer>
    );
  }
}
