import React from 'react';
import './ImagemButton.css'

const ImagemButton = (props) => {
    return (
        <div className="image-button-container">
            <img src={ props.imagem }/>
            <p><b>{ props.texto }</b></p>
            <p>{ props.email }</p>
        </div>

    )
}

export default ImagemButton;