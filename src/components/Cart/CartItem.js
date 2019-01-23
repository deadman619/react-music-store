import React from 'react';

export default function CartItem({item, value}) {
	const {id, title, img, price, total, count} = item;
	const {increment, decrement, removeItem} = value;
	return (
		<div className="row my-1 text-capitalize text-center">
			<div className='col-10 mx-auto col-lg-1 cartText'>
				<button type="button" className="close" aria-label="Close" onClick={()=>removeItem(id)}>
	  				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className='col-10 mx-auto col-lg-2'>
				<img style={{width:"13em", height:"13em"}} alt="albumCover" src={img} />
			</div>
			<div className='col-10 mx-auto col-lg-2 cartText'>
				<span className='d-lg-none'>Title: </span>
				{title}
			</div>
			<div className='col-10 mx-auto col-lg-2 cartText'>
				<span className='d-lg-none'>Price: </span>
				{price}€
			</div>
			<div className='col-10 mx-auto col-lg-2 cartText'>
				<div className='d-flex justify-content-center'>
					<span className="btn-black" onClick={()=>decrement(id)}>
						<i className="fas fa-angle-left quantity"></i>
					</span>
					<strong>{count}</strong>
					<span className="btn-black" onClick={()=>increment(id)}>
						<i className="fas fa-angle-right quantity"></i>
					</span>
				</div>
			</div>
			<div className='col-10 mx-auto col-lg-2 cartText'>
				<span className='d-lg-none'>Total: </span>
				{total}€
			</div>
		</div>
	)
}
