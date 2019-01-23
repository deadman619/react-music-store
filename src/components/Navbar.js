import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';

export class Navbar extends Component {
	render() {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-dark">
				<Link to='/'>
					<img src={logo} alt="store" className='navbar-brand' width='30' />
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/" className='nav-link'>Albums</Link>
					</li>
				</ul>
				<Link to='/cart' className='ml-auto'>
					<ButtonContainer className='btn btn-outline-danger'><span className='text-cart'>My cart</span></ButtonContainer>
				</Link>
			</NavWrapper>
		);
	}
}

// npm install --save styled-components  -  Library that lets you make custom css styled components/tags like below

const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1em;
`;

const NavWrapper = styled.nav`
background:var(--mainDark);
.nav-link{
	color:var(--mainWhite) !important;
	font-size:1.3em;
	text-transform: capitalize;
}
`
