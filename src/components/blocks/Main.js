import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../store/actions/shopActions';
import {openCart} from '../../store/actions/cartActions';
import {selectShopLoading, selectFilteredProducts} from '../../store/selectors';
import Loading from '../partials/Loading';
import SelectBox from '../partials/SelectBox';
import ProductList from '../partials/ProductList';

const Main = () => {
	console.log('Main');

	const loading = useSelector(state => selectShopLoading(state));
	const products = useSelector(state => selectFilteredProducts(state));

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	const handleOpen = () => dispatch(openCart());

	return (
		<main className='main'>
			<div className='main__header'>
				<p className='main__count'>{products.length} Product(s) found.</p>
				<div className='main__filter'>
					<i className='main__cart fas fa-shopping-cart' onClick={handleOpen}></i>
					<span>Order by</span>
					<SelectBox />
				</div>
			</div>
			{loading ? <Loading /> : <ProductList items={products} />}
		</main>
	);
};

export default Main;
