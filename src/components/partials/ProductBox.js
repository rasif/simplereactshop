import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getItems} from '../../store/actions/productActions';
import FilterService from '../../services/FilterService';

import Loading from './Loading';
import Product from './Product';

const ProductBox = () => {
	console.log('Product Container');
	let [count, setCount] = React.useState(0);
	let filteredItems = [];

	const items = useSelector(state => state.product.items);
	const loading = useSelector(state => state.product.loading);
	const orderFilter = useSelector(state => state.filter.orderFilter);
	const sizeFilter = useSelector(state => state.filter.sizeFilter);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getItems());
	}, []);

	const render = () => {
		filteredItems = FilterService.filterItemsByOrder(items, orderFilter);
		filteredItems = FilterService.filterItemsBySizes(filteredItems, sizeFilter);

		console.log('Render products');

		if (filteredItems && filteredItems.length) {
			let template = filteredItems.map(item => <Product key={item.id} product={item} />);

			template.push(<div key={9999} className='product product-filler'></div>);

			return template;
		} else {
			return <p>Store is empty</p>;
		}
	};

	return (
		<>
			<div className='main__products'>
				{!loading && render()}
				{loading && <Loading />}
			</div>
		</>
	);
};

export default ProductBox;
