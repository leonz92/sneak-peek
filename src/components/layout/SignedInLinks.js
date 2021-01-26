import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
	return (
		<ul className='right'>
			<li>
				<NavLink to='/'>Collection</NavLink>
			</li>
			<li>
				<NavLink to='/'>Logout</NavLink>
			</li>
			<li>
				<NavLink to='/' className='btn btn-floating red'>LZ</NavLink>
			</li>
		</ul>
	);
};

export default SignedInLinks;
