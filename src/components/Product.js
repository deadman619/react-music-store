import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";
//PropTypes to set up what kind of data to expect for the object and throws an error if the wrong type was received
import PropTypes from 'prop-types';

export class Product extends Component {
	render() {
		const {id, title, img, price, inCart} = this.props.product;
		return (
			<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
				<div className='card'>
					<ProductConsumer>
						{value => (
							<div className="img-container p-5" onClick={() => value.handleDetail(id)}>
								<Link to="/details">
									<img src={img} alt="albumCover" className='card-img-top' />
								</Link>
								<button className={inCart ? 'inCart-btn' : 'cart-btn'} disabled={inCart ? true : false} onClick={() =>{
									value.addToCart(id);
								}}>
								{inCart ? (
									<p className='text-capitalize mb-0'>In Cart</p>
									) : (
									<i className='fas fa-cart-plus' />
								)}
								</button>			
							</div>
						)}
					</ProductConsumer>
					<div className="card-footer d-flex justify-content-between">
						<p className='align-self-center mb-0'>
							{title}
						</p>
						<h5 className='font-italic mb-0'>
							{price}<span className='ml-1'>€</span>
						</h5>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

// Expected datatype for the object, throws out an error if the received data types aren't accurate
Product.propTypes = {
	product:PropTypes.shape({
		id:PropTypes.number,
		img:PropTypes.string,
		title:PropTypes.string,
		price:PropTypes.number,
		inCart:PropTypes.bool
	}).isRequired
}

const ProductWrapper = styled.div`

{/* Style for the actual card and hovers for it */}

.card{
	border-color: transparent;
	transition: all 1s linear;
}
.card-footer{
	height: 50px;
	@media screen and (min-width: 768px) and (max-width: 1199px) {
		height: 85px;
	}
	@media screen and (max-width: 767px) {
		height: auto;
		font-size: 0.8em;	
	}
	background: transparent;
	border-top: transparent;
	transition: all 1s linear;
}
&:hover{
	.card{
		border: 0.05em solid rgba(0,0,0,0.2);
		box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
	}
	.card-footer{
		background: rgba(247,247,247);
	}
}

{/* Style for the image and cart button */}

.img-container{
	position: relative;
	overflow: hidden;
}
.card-img-top{
	transition: all 1s linear;
}
.img-container:hover .card-img-top{
	transform: scale(1.2);
}
.cart-btn, .inCart-btn{
	position: absolute;
	bottom: 0;
	right: 0;
	padding: 0.2em 0.4em;
	background:var(--mainRed);
	border: none;
	color:var(--mainWhite);
	font-size: 1.4em;
	border-radius: 0.2em 0 0 0;
	opacity: 0;
	transition: all 1s linear;
}
.img-container:hover .cart-btn, .inCart-btn{
	opacity: 1;
}
.cart-btn:hover{
	cursor: pointer;
	color:var(--mainDark);
}
.inCart-btn:hover{
	color: #fff;
}
`