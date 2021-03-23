import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';


class App extends React.Component {

  state = {
    post: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/200",  
    },

    {
      nomeUsuario: "Matheus",
      fotoUsuario: "./Matheus.jpg",
      fotoPost: "Matheus.jpg",
    },
    
    {
      nomeUsuario: "Lunala",
      fotoUsuario: "./Lunala.jpg",
      fotoPost: "Lunala-details.jpg",
    }
  ]
}

  render() {
    const listaDePosts = this.state.post.map((posts) => {
      return <Post nomeUsuario={posts.nomeUsuario} fotoUsuario={posts.fotoUsuario} fotoPost={posts.fotoPost} />
    })
    return (
      <div className={'app-container'}>
        {listaDePosts} 
      </div>
      // <div className={'app-container'}>
      //   <Post
      //     nomeUsuario={'paulinha'}
      //     fotoUsuario={'https://picsum.photos/50/50'}
      //     fotoPost={'https://picsum.photos/200/150'}
      //   />

      //   <Post
      //     nomeUsuario={'Matheus'}
      //     fotoUsuario={'https://picsum.photos/50/25'}
      //     fotoPost={'https://picsum.photos/200/100'}
      //   />

      //   <Post
      //     nomeUsuario={'Paisagem.23'}
      //     fotoUsuario={'https://picsum.photos/50/60'}
      //     fotoPost={'https://picsum.photos/200/200'}
      //   />
      // </div>
    );
  }
}

export default App;
