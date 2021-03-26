import React from 'react';
import styled from 'styled-components';
import PegarAtividades from './components/PegarAtividades'


const DivContainer = styled.div`

`
const Titulo = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content:center;
  flex-direction: column;
  color: #B328DC;
`
const Tituloh3 = styled.h3`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content:center;
  flex-direction: column;
  color: #D027DB;
`


export default class App extends React.Component {

  render(){

    return (
      <DivContainer>
        <Titulo>Entediado?</Titulo>
        <Tituloh3>Escolha uma atividade</Tituloh3>
        <PegarAtividades/>
      </DivContainer>
    );
  }
}


