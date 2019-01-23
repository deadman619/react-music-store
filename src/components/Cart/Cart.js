//To mark this as the 'main' component of the folder, you have to make a package.json with 'main':'filename' in curly brackets
import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export class Cart extends Component {
	render() {
		return (
			<section className='py-2'>
				<ProductConsumer>
					{value => {
						const {cart} = value;
						if(cart.length > 0) {
							return(
								<React.Fragment>
									<div className="container">
										<Title name='your' title='cart'></Title>
									</div>
									<CartColumns />
									<CartList value={value} />
									<CartTotals value={value} />
								</React.Fragment>
							)
						} else {
							return <EmptyCart />
						}
					}}
				</ProductConsumer>
			</section>
		);
	}
}
