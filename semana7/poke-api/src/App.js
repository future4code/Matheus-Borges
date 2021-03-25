import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {baseUrl} from './parametros'

const DivContainer = styled.div`
`
const Titulo = styled.h2`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content:center;
  flex-direction: column;
`


export default class App extends React.Component {

  state = {
    activity: {}
  }

  componentDidMount() {
    this.pegarAtividades();
  }


  pegarAtividades = () => {
  
    axios
    .get(baseUrl)
    .then((res) => {
      this.setState({activity: res.data});
      console.log(res.data)
    }).catch((err) => {
      console.log(err.data)
    })
    };


  render(){
    const {activity, price, type, participants} =
    this.state.activity

    return (
      <DivContainer>
        <Titulo>Entediado?</Titulo>
        <button onClick={this.pegarAtividades}>Botao</button>
        <p>Atividade: {activity}</p>
        <p>Preço: {price}</p>
      </DivContainer>
    );
  }
}


