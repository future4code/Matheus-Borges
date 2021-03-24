import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Lista from './Lista'


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
const InputContainer = styled.input`
    border: none;
    border-bottom: 2px solid #6CBCE1;
    padding: 12px 20px;
    margin: 8px 0;
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

class Home extends React.Component {

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
        .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
            headers: {
                Authorization: 'matheus-borges-cruz'
            }
        }
    )
    .then((res) => {
        this.setState({inputName: '', inputEmail: ''});
        alert('Cadastrado com sucesso!')
    })
    .catch((err) => {
        this.setState({inputName: '', inputEmail: ''});
        alert('Tente novamente mais tarde')    
    })
}

    render() { 
        return (
            <DivContainer>

                <InputContainer
                placeholder={'Apelido'}
                value={this.state.inputName}
                onChange={this.handleInputName} 
                />

                <InputContainer 
                placeholder={'E-mail'}
                value={this.state.inputEmail}
                onChange={this.handleInputEmail} 
                />

                <ButtonContainer onClick={this.createUsuarios}>Enviar</ButtonContainer>


            </DivContainer>
        );
    }
}

export default Home