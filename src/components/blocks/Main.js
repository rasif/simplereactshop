import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getItems} from '../../store/actions/productActions';
import {openCart} from '../../store/actions/cartActions';
import filteredItemsSelector from '../../store/selectors/filteredItemsSelector';

import Loading from '../partials/Loading';
import SelectBox from '../partials/SelectBox';
import ProductList from '../partials/ProductList';

const Main = () => {
	console.log('Main');

	const loading = useSelector(state => state.product.loading);
	const filter = useSelector(state => state.filter);
	let items = useSelector(state => state.product.items);

	// let items = useSelector(state => filteredItemsSelector(state));
	// так лишний раз вызывается рендерится

	items = filteredItemsSelector(items, filter);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getItems());
	}, []);

	const handleOpen = () => dispatch(openCart());

	return (
		<main className='main'>
			<div className='main__header'>
				<p className='main__count'>{items.length} Product(s) found.</p>
				<div className='main__filter'>
					<i className='main__cart fas fa-shopping-cart' onClick={handleOpen}></i>
					<span>Order by</span>
					<SelectBox />
				</div>
			</div>
			{loading ? <Loading /> : <ProductList items={items} />}
		</main>
	);
};

export default Main;
