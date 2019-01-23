import React, { Component } from 'react';
import Title from './Title';

export class Default extends Component {
	render() {
		return (
			<div className="container py-5 text-center">
				<h1>404</h1>
				<h1 className='text-danger'>{this.props.location.pathname}</h1>
				<Title name="not" title="found"></Title>
			</div>
		);
	}
}
