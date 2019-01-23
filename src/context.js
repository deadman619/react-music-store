
//CONTEXT API FILE, IMPORTANT FOR PROGRAM OPTIMIZATION
//PUT IT IN index.js ------ LETS EVERY COMPONENT IN THE APPLICATION GET THE DATA, INSTEAD OF NEEDING TO PASS THROUGH CHILDREN
//STILL NEED TO IMPORT ProductConsumer from ../context TO FILES WHERE YOU WANT TO USE IT

import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
	state ={
		products: [],
		detailProduct: detailProduct,
		cart: []
		//Call example: this.state.products[0].title
	};

	//To not corrupt our data.js, we need to seperate the data from the front-end so we need to copy it instead of referencing it directly
	//componentDidMount means that everything in it is called after the page loads correctly
	componentDidMount() {
		this.setProducts();
	}

	//Takes all the data from storeProducts in data.js, loops through and assigns it to the temp array which we then return
	setProducts = () =>{
		let tempProducts = [];
		storeProducts.forEach(item =>{
			const singleItem = {...item};
			tempProducts = [...tempProducts, singleItem];
		})
		this.setState(()=>{
			return {products:tempProducts};
		});
	};
	getItem = id =>{
		const product = this.state.products.find(item => item.id === id);
		return product;
	}
	handleDetail = id =>{
		const product = this.getItem(id);
		this.setState(()=>{
			return {detailProduct:product};
		})
	};
	addToCart = (id) =>{
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		this.setState(()=>{
			return {products:tempProducts, cart:[...this.state.cart, product]};
		});
	};
	splitTracks(string) {
		let tracks = string.split(',');
		let trackList = [];
		tracks.map((track) => {
			let singleTrack = <h5 className='text-title text-uppercase text-muted mt-3 mb-2'>{track}</h5>;
			trackList.push(singleTrack);
		})
		return trackList;
	}
	render() {	
		return (
			<ProductContext.Provider value={{
				...this.state,
				handleDetail:this.handleDetail,
				addToCart:this.addToCart,
				splitTracks:this.splitTracks
			}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};