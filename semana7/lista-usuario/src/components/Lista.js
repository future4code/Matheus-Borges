import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DivContainer = styled.div `

`
const DivBotaoEUsuario = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
`
const UlContainer = styled.p`
    color: #6CBCE1;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ButtonContainer = styled.button`
    background-color: #6CBCE1;
    border: none;
    color: white;
    padding: 8px 14px;
    text-decoration: none;
    margin: 4px 2px;
    border-radius: 10px;
`

class Lista extends React.Component {

state = {
    usuarios: []
}

componentDidMount() {
    this.getUsuarios()
}

    getUsuarios = () => {
        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                {
                    headers: {
                        Authorization: 'matheus-borges-cruz'
                    }
                }
            )

    .then((res) => {
        this.setState({usuarios: res.data});
    })
};

    delUsuarios = (idUsuario) => {
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`,
                {
                    headers: {
                        Authorization: 'matheus-borges-cruz'
                    }
                }
            )
            .then((res) => {
                this.getUsuarios()
                alert('Usuário removido com sucesso!')
            })
            .catch((err) => {
                alert('Erro ao remover')
            })
        }
    


    render() {
        const listaUsuarios = this.state.usuarios.map((usuarios) => (
            <DivBotaoEUsuario>
                <p key={usuarios.id}>{usuarios.name}</p>
                <ButtonContainer onClick={() => this.delUsuarios(usuarios.id)}>Remover</ButtonContainer>
            </DivBotaoEUsuario>
        ));
        return (
            <DivContainer>
                <UlContainer>{listaUsuarios}</UlContainer>
            </DivContainer>
        );
    }
}

export default Lista