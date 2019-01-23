
//CONTEXT API FILE, IMPORTANT FOR PROGRAM OPTIMIZATION
//PUT IT IN index.js ------ LETS EVERY COMPONENT IN THE APPLICATION GET THE DATA, INSTEAD OF NEEDING TO PASS THROUGH CHILDREN
//STILL NEED TO IMPORT ProductConsumer from ../context TO FILES WHERE YOU WANT TO USE IT

import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state ={
		products: [],
		detailProduct: detailProduct,
		cart: [],
		cartTotal: 0
	};

	componentDidMount() {
		this.setProducts();
	};

	setProducts = () => {
		let tempProducts = [];
		storeProducts.forEach(item =>{
			const singleItem = {...item};
			tempProducts = [...tempProducts, singleItem];
		});
		this.setState({products : tempProducts});
	};

	increment = id => {
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find(item => item.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count + 1;
		product.total = parseFloat((product.count * product.price).toFixed(2));
		this.setState({cart : [...tempCart]});
		this.addTotals();
	};

	decrement = id => {
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find(item=>item.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count - 1;
		if (product.count === 0) {
			this.removeItem(id)
		} else {
			product.total = parseFloat((product.count * product.price).toFixed(2));
			this.setState({cart : [...tempCart]});
			this.addTotals();
		}
	};

	addTotals = () => {
		let total = 0;
		this.state.cart.map(item => total += item.total);
		this.setState({cartTotal : parseFloat(total.toFixed(2))});
	};

	clearCart = () => {
		this.setState({cart : []});
		this.setProducts();
		this.addTotals();
	};

	removeItem = id => {
		let tempProducts = [...this.state.products];
		let tempCart = [...this.state.cart];
		tempCart = tempCart.filter(item => item.id !== id);
		const index = tempProducts.indexOf(this.getItem(id));
		let removedProduct = tempProducts[index];
		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0;
		this.setState({
			cart : [...tempCart],
			products : [...tempProducts]
		});
		this.addTotals();
	};

	getItem = id => {
		const product = this.state.products.find(item => item.id === id);
		return product;
	};

	handleDetail = id => {
		const product = this.getItem(id);
		this.setState({detailProduct : product});
	};

	addToCart = id => {
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		product.total = product.price;
		this.setState({
			products : tempProducts, 
			cart : [...this.state.cart, product]
		}, () => this.addTotals());
	};

	splitTracks(string) {
		let tracks = string.split(',');
		let trackList = [];
		tracks.forEach(track => {
			let singleTrack = <h5 key={track} className='text-title text-uppercase text-muted mt-3 mb-2'>{track}</h5>;
			trackList = [...trackList, singleTrack];
		});
		return trackList;
	};

	render() {	
		return (
			<ProductContext.Provider value={{
				...this.state,
				handleDetail : this.handleDetail,
				addToCart : this.addToCart,
				clearCart : this.clearCart,
				splitTracks : this.splitTracks,
				increment : this.increment,
				decrement : this.decrement,
				removeItem : this.removeItem,
			}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	};
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};