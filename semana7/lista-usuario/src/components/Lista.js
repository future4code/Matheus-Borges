import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Detalhes from "./Detalhes";
import {baseUrl, axiosConfig} from '../Parametro';


const DivContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const DivBotaoEUsuario = styled.li`
    align-items: center;
    display: flex;
    padding: 10px;
    justify-content: space-between;
`
const PContainer = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ButtonContainer = styled.button`
    background-color: #6CBCE1;
    border: none;
    color: white;
    padding: 5px 8px;
    text-decoration: none;
    margin: 4px 15px;
    border-radius: 10px;
`
const TituloLista = styled.h2`
    color: #6CBCE1;
`


export default class Lista extends React.Component {

state = {
    pagina: 'listaUsuarios',
    usuarios: [],
    id: ''
}

componentDidMount() {
    this.getUsuarios()
}

//     getUsuarios = () => {
//         axios
//             .get(baseUrl, axiosConfig)
//             .then((res) => {
//                 this.setState({usuarios: res.data});
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
// };

    getUsuarios = async () => {
        try{
            const response = await axios.get(baseUrl, axiosConfig);
            this.setState({ usuarios: response.data })
        } catch (error) {
            console.log(error)
        }
    };

    deleteUsuarios = (idUsuario) => {
        if(window.confirm("Deseja mesmo deletar o usuário?")){
            axios
                .delete(`${baseUrl}/${idUsuario}`, axiosConfig)
                .then((res) => {
                    console.log(res)
                    this.getUsuarios()
                    alert('Usuário removido com sucesso!')
                })
                .catch((err) => {
                    console.log(err)
                    alert('Erro ao remover')
                });
            }
        };
    
    mudarPaginaId = (usuarioid) => {
        if (this.state.pagina === "listaUsuarios"){
            this.setState({ pagina: 'detalhes', id: usuarioid})
        } else {
            this.setState({pagina: "listaUsuarios", id: ''})
        }   console.log(this.state.pagina)
    };    
    


    render() {
        const listaUsuarios = this.state.usuarios.map((usuarios) => {
            return(
                <DivBotaoEUsuario onClick={() => this.mudarPaginaId(usuarios.id)} key={usuarios.id}>
                    <PContainer>{usuarios.name}</PContainer>
                    <ButtonContainer onClick={() => this.deleteUsuarios(usuarios.id)}>Deletar</ButtonContainer>
                </DivBotaoEUsuario>
            );
        });

        return (
            <div>

                <DivContainer>
                <TituloLista>Lista de Usuários</TituloLista>

                    {this.state.pagina === 'listaUsuarios' ? listaUsuarios : 
                    <Detalhes
                        id={this.state.id}
                        mudarPaginaId={this.mudarPaginaId}
                    />
                    }
                   

                </DivContainer>
            </div>
        );
    }
}
