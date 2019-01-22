
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
		detailProduct: detailProduct
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
			return {products:tempProducts}
		});
	};
	handleDetail = () =>{
		console.log("hello from brazil");
	};
	addToCart = () =>{
		console.log("hello vietnam");
	};
	render() {	
		return (
			<ProductContext.Provider value={{
				...this.state,
				handleDetail:this.handleDetail,
				addToCart:this.addToCart
			}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};