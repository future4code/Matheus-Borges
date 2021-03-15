import React from 'react';
import PerguntaAberta from './PerguntaAberta';


export default class Etapa1 extends React.Component {


    render(){
        return(
            <div>
                <h2>Etapa 1 - Dados Gerais</h2>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual a sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual o seu email?"} />
                <p>4. Qual a sua escolaridade?</p>
                <select className={"escolaridade"}>
                    <option value="">Ensino Médio Incompleto</option>
                    <option value="">Ensino Médio Completo</option>
                    <option value="">Ensino Superior Incompleto</option>
                    <option value="">Ensino Superior Completo</option>
                </select>
            </div>
        )
    }
}
