import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Navbar' ;
import {detailProduct} from '../data';

export class Details extends Component {
	splitTracks(string) {
		let tracks = string.split(',');
		let trackList = [];
		tracks.map((track) => {
			console.log(track);
			let singleTrack = <h5 className='text-title text-uppercase text-muted mt-3 mb-2'>{track}</h5>;
			trackList.push(singleTrack);
		})
		return trackList;
	}
	render() {
		return (
			<ProductConsumer>
				{(value) =>{
					const {id, artist, img, info, price, title, inCart} = value.detailProduct;
					return (
						<div className='container py-5'>
							<div className='row'>
								<div className="col-10 mx-auto text-center text-slanted my-5">
									<h1>{title}</h1>
								</div>
							</div>
							<div className="row">
								<div className="col-10 mx-auto col-md-6 my-3">
									<img src={img} className='img-fluid' alt="product"/>	
								</div>
								<div className="col-10 mx-auto col-md-6 my-3 text-capitalize text-center">
									<h2>Artist: {artist}</h2>
										{this.splitTracks(info)}
								</div>
							</div>
						</div>
					)
				}}
			</ProductConsumer>
		);
	}
}
