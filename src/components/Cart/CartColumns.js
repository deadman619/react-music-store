import React from 'react';

export default function CartColums() {
	return (
		<div className='container-fluid text-center d-none d-lg-block'>
			<div className="row">
				<div className="col-10 mx-auto col-lg-1">
					<strong>Remove</strong>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<strong>Album</strong>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<strong>Title</strong>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<strong>Price</strong>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<strong>Quantity</strong>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<strong>Total</strong>
				</div>
			</div>
		</div>
	)
}
