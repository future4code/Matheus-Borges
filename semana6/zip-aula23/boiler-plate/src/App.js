import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const ButtonsContainer = styled.button`
  display: flex
`


class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem("Lista", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    if (localStorage.getItem("Lista")){
    const listaString = localStorage.getItem("Lista");
    const listaObjeto = JSON.parse(listaString)
    this.setState({tarefas: listaObjeto});
  }
}

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    };
    const copiaDoEstado = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas: copiaDoEstado})
    this.setState({inputValue: ""})
  }

  apagaTarefa = (event) => {
    const novaListaDeTarefas = this.state.tarefas.filter((tarefa) => {
      return event !== tarefa.id
    })
    this.setState({novaTarefa: novaListaDeTarefas})
  }

  selectTarefa = (id) => {
    const tarefaAlterada = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id){
        const outraTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return outraTarefa
      } else {
        return tarefa
      }
    })
    this.setState({tarefas: tarefaAlterada})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
