import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getItems} from '../../store/actions/productActions';
import {openCart} from '../../store/actions/cartActions';
import FilterService from '../../services/FilterService';

import Loading from '../partials/Loading';
import SelectBox from '../partials/SelectBox';
import ProductList from '../partials/ProductList';

const ProductBox = () => {
	console.log('Main');

	let countOfProducts = 0;
	let filteredItems = [];

	const items = useSelector(state => state.product.items);
	const loading = useSelector(state => state.product.loading);
	const orderFilter = useSelector(state => state.filter.orderFilter);
	const sizeFilter = useSelector(state => state.filter.sizeFilter);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getItems());
	}, []);

	const handleOpen = () => dispatch(openCart());

	const render = () => {
		filteredItems = FilterService.filterItemsByOrder(items, orderFilter);
		filteredItems = FilterService.filterItemsBySizes(filteredItems, sizeFilter);

		countOfProducts = filteredItems.length;
	};

	render();

	return (
		<main className='main'>
			<div className='main__header'>
				<p className='main__count'>{countOfProducts} Product(s) found.</p>
				<div className='main__filter'>
					<i className='main__cart fas fa-shopping-cart' onClick={handleOpen}></i>
					<span>Order by</span>
					<SelectBox />
				</div>
			</div>
			{loading ? <Loading /> : <ProductList items={filteredItems} />}
		</main>
	);
};

export default ProductBox;
