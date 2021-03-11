import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="photo-perfil.jpg" 
          nome="Matheus Borges" 
          descricao="Olá, eu sou o Matheus. Sou estudante, aluno da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais..."
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="mcdonalds.png" 
          nome="McDonald's" 
          descricao="Auxiliar de Restaurante." 
        />
        
        <CardGrande 
          imagem="AMERICANAS.PNG" 
          nome="Lojas Americanas" 
          descricao="Ajudante de Loja." 
        />
      </div>

      <div className="page-section-container">
        <h2>Endereços</h2>
        <CardPequeno
          telefone="Tel: (11)949864821"
          endereco="Rua Olívia Coelho Martins"
          email="matheus-borges@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook"
          email="Matheus-Borges" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
          email="Matheus.Borges"
        />        
      </div>
    </div>
  );
}

export default App;
