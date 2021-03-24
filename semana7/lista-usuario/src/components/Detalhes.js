import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {baseUrl, axiosConfig} from '../Parametro';


const DivContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ButtonContainer = styled.button`
    background-color: #6CBCE1;
    border: none;
    color: white;
    padding: 5px 8px;
    text-decoration: none;
    margin: 4px 8px;
    border-radius: 10px;
`



export default class Detalhes extends React.Component {

    state = {
        pagina: 'detalhes'
    }
    
    voltarPagina = () => {
        if (this.state.pagina === 'detalhes'){
            this.setState({ pagina: 'listaUsuarios'})
        } else {
            this.setState({pagina: 'detalhes'})
        }   console.log(this.state.pagina)
    }; 
    

    render(){
        return(
            <DivContainer>
                <p>{this.props.id}</p>
                <ButtonContainer onClick={() => this.voltarPagina}>Voltar</ButtonContainer>
            </DivContainer>
        );
    }
}