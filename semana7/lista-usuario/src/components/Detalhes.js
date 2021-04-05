import React from 'react';
import styled from 'styled-components';


const DivContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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


    render(){
        return(
            <DivContainer>
                <p>{this.props.id}</p>
                <ButtonContainer onClick={this.props.mudarPaginaId}>Voltar para lista</ButtonContainer>
            </DivContainer>
        );
    }
}