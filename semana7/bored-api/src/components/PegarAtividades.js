import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {baseUrl} from '../parametros'


const DivButton = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content:center;
`
const Button = styled.button`
  background-color: white;
  color: #E527DB;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.5s;
  border: 3px solid #E527DB;
  cursor: pointer;
  border-radius: 16px;
  border-style: dotted dashed solid double;
  &:hover {
  background-color: #E527DB;
  color: white;
  font-size:150%;
  &:active {
  background-color: #B328DC;
  color: #B328DC;
  }
}
`
const DivAtividades = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content:center;
  flex-direction: column;
`
const SelectContainer = styled.select`
  padding-left: 1em;
  border: 2px solid #F527DB;
  font-size: 1rem;
  color:#F527DB;
  border-radius: 10px;
  margin-top:15px;
  border-style: dotted dashed solid double;
  cursor: pointer;
  &:hover {
  color: #B328DC;
}
`
const OptionContainerAtividade = styled.option`
  color: #B328DC;
`


export default class PegarAtividades extends React.Component {

    state = {
      activity: {}
    }
  
    componentDidMount() {
      this.pegarAtividades();
    }
  
  
    pegarAtividades = async () => {
      try{
        const response = await axios.get(baseUrl)
        this.setState({activity: response.data})
        console.log(response.data)
        } catch (error) {
          console.log(error.data)
        }
      }
  
    render(){
      const {activity, price, type, participants, accessibility} =
      this.state.activity
  
      return (
          <DivAtividades>
            <DivButton>
                < Button onClick={this.pegarAtividades}>Procurar Atividade</Button>
            </DivButton>
            <SelectContainer>
                <OptionContainerAtividade>Atividade: {activity}</OptionContainerAtividade>
                <OptionContainerAtividade onClick>Tipo: {type}</OptionContainerAtividade>
                <OptionContainerAtividade>Preço: R${price}</OptionContainerAtividade>
                <OptionContainerAtividade>Pariticipantes: {participants}</OptionContainerAtividade>
                <OptionContainerAtividade>Acessibilidade: {accessibility}</OptionContainerAtividade>
            </SelectContainer>
          </DivAtividades>
      );
    }
  }