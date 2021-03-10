import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Matheus'}
          fotoUsuario={'https://picsum.photos/50/25'}
          fotoPost={'https://picsum.photos/200/100'}
        />

        <Post
          nomeUsuario={'Paisagem.23'}
          fotoUsuario={'https://picsum.photos/50/60'}
          fotoPost={'https://picsum.photos/200/200'}
        />
      </div>
    );
  }
}

export default App;
