import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Agradecimento from './components/Agradecimento';

export default class App extends React.Component {


    state = {
      telaAtual: 1
  }

renderizaPagina = () => {
  switch (this.state.telaAtual){
    case 1:
      return <Etapa1 />;
    case 2:
      return <Etapa2/>;
    case 3:
      return <Etapa3/>;
    case 4:
      return <Agradecimento/>;
    default:
      return <Agradecimento/>;
  }
}

proximaPagina = () => {
  this.setState({telaAtual: this.state.telaAtual + 1});
}

  render() {
    return (
      <div className="App">
        {this.renderizaPagina()}
        <br />
        {this.state.telaAtual !== 4 && (
        <button onClick={this.proximaPagina}>Próxima etapa</button>
        )}
      </div>
    );
  }
}
