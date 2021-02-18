import React from 'react';
import {useDispatch} from 'react-redux';
import {openCart} from '../../store/actions/cartActions';
import SelectBox from '../partials/SelectBox';
import ProductList from '../partials/ProductList';
import Search from '../partials/Search';

const Main = () => {
	console.log('Main');

	const dispatch = useDispatch();

	const handleOpen = () => dispatch(openCart());

	return (
		<main className='main'>
			<div className='main__header'>
				<Search />
				<div className='main__filter'>
					<i className='main__cart fas fa-shopping-cart' onClick={handleOpen}></i>
					<span>Order by</span>
					<SelectBox />
				</div>
			</div>
			<ProductList />
		</main>
	);
};

export default Main;
