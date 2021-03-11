import React from 'react';
import './CardPequeno.css'

const CardPequeno = (props) => {
    return (
        <div className="endereco-container">
            <p> { props.endereco } </p>
            <p> { props.email } </p>
            <p> { props.telefone } </p>
        </div>
    );
};

export default CardPequeno;