import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorComentario: '',
	}

	onChangeComentario = (event) => {
		this.setState({valorComentario: event.target.value})
	}

	handleValorComentario = (event) => {
		this.setState({valorComentario: event.target.value})
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
			{/* <p>{this.state.valorComentario}</p> */}
		</div>
		
	}
}
