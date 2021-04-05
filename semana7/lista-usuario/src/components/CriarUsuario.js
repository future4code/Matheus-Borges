import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {baseUrl, axiosConfig} from '../Parametro';


const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 300px;
`
const InputContainer = styled.input`
    border: none;
    border-bottom: 2px solid #6CBCE1;
    padding: 12px 20px;
    margin: 8px 0;
    border-radius: 15px;
`
const ButtonContainer = styled.button`
    background-color: #6CBCE1;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    border-radius: 10px;
`
const TituloLista = styled.h2`
    color: #6CBCE1;
`


export default class CriarUsuario extends React.Component {

state = {
    inputName: '',
    inputEmail: ''
}

handleInputName = (event) => {
    this.setState({inputName: event.target.value});
}

handleInputEmail = (event) => {
    this.setState({inputEmail: event.target.value});
}

createUsuarios = () => {
    const body = {
        name: this.state.inputName,
        email: this.state.inputEmail
    }

    axios
        .post(baseUrl, body, axiosConfig)
        .then((res) => {
            console.log(res);
            alert('Cadastrado com sucesso!')
            this.setState({inputName: '', inputEmail: ''});
        })
        .catch((err) => {
            console.log(err);
            alert('Tente novamente')    
            this.setState({inputName: '', inputEmail: ''});
        });
};

    render() { 
        return (
            <DivContainer>
                <TituloLista>Cadastrar Usuário</TituloLista>
                
                <InputContainer
                onChange={this.handleInputName} 
                value={this.state.inputName}
                placeholder={'Apelido'}
                />

                <InputContainer
                onChange={this.handleInputEmail} 
                value={this.state.inputEmail}
                placeholder={'E-mail'}
                />

                <ButtonContainer onClick={this.createUsuarios}>Cadastrar</ButtonContainer>
            </DivContainer>
        );
    }
}
