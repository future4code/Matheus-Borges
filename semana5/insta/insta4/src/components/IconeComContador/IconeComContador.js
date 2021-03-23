import React from 'react';
import './IconeComContador.css';
import styled from 'styled-components';

export class IconeComContador extends React.Component {
	render() {
		return( <div className={'icon-container'}>
		<img alt={'Icone'} src={this.props.icone} onClick={this.props.onClickIcone}/>
		<p>{this.props.valorContador}</p>
	</div>
		)	
	}
}

