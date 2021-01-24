import React from 'react';
import {useDispatch} from 'react-redux';
import {openCart} from '../../store/actions/cartActions';

import ProductBox from './ProductBox';
import SelectBox from './SelectBox';

const Main = () => {
	console.log('Main');

	const dispatch = useDispatch();

	const handleOpen = () => dispatch(openCart());

	return (
		<main className='main'>
			<div className='main__header'>
				<p className='main__count'>{0} Product(s) found.</p>
				<div className='main__filter'>
					<i className='main__cart fas fa-shopping-cart' onClick={handleOpen}></i>
					<span>Order by</span>
					<SelectBox />
				</div>
			</div>
			<ProductBox />
		</main>
	);
};

export default Main;
