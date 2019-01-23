import React from 'react';
import {Link} from 'react-router-dom';

export default function CartColums({value}) {
	const{cartTotal, clearCart} = value;
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-10 mt-5 mx-auto col-lg-2 text-capitalize text-right text-sm-center">
						<Link to='/'>
							<button className='btn btn-outline-danger text-uppercase mb-3 px-5' type='button' onClick={()=>clearCart()}>Checkout {cartTotal}€</button>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
