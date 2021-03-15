import React from 'react';
import PerguntaAberta from './PerguntaAberta';


export default class Etapa3 extends React.Component {
    render(){
        return(
            <div>
                <h2>Etapa 2 - Informações do Ensino Superior</h2>
                <PerguntaAberta pergunta={"5. Por que não terminou um curso de graduação?"} />
                <PerguntaAberta pergunta={"6. Você fez algum curso complementar?"} />
                <select className="cursos">
                    <option value="">Nenhum</option>
                    <option value="">Curso Técnico</option>
                    <option value="">Curso Inglês</option>
                </select>
            </div>
        );
    }
}