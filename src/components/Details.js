import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{value =>{
					const {id, artist, img, info, price, title, inCart} = value.detailProduct;
					return (
						<div className='container py-2'>
							<div className='row'>
								<div className="col-10 mx-auto text-center text-slanted my-5">
									<h1>{artist}</h1>
								</div>
							</div>
							<div className="row">
								<div className="col-10 mx-auto col-md-6 my-3">
									<img src={img} className='img-fluid' alt="albumCover"/>	
								</div>
								<div className="col-10 mx-auto col-md-6 my-3 text-capitalize text-center">
									<h2>{title}</h2>
										{value.splitTracks(info)}
								</div>
							</div>
							<div className="row">
								<div className="col-10 mx-auto col-md6 mt-3 text-center">
									<h4>Price: {price}€</h4>
									<Link to='/cart'>
										{inCart? (
											<button disabled className='btn btn-outline-dark mx-2 mt-2'>In Cart</button>
											) : (
											<button className='btn btn-outline-danger mx-2 mt-2' onClick={() => {
										value.addToCart(id)}}>Buy Now</button>
											)}
									</Link>
									<Link to='/' className='btn btn-outline-dark mx-2 mt-2'>
										Return
									</Link>
								</div>
							</div>
						</div>
					)
				}}
			</ProductConsumer>
		);
	}
}

