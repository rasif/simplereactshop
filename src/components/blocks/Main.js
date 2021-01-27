import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../store/actions/shopActions';
import {openCart} from '../../store/actions/cartActions';
import {selectShopLoading, selectFilteredProducts} from '../../store/selectors';
import Loading from '../partials/Loading';
import SelectBox from '../partials/SelectBox';
import ProductList from '../partials/ProductList';
import Pagination from '../partials/Pagination';

const Main = () => {
	console.log('Main');

	const loading = useSelector(selectShopLoading);
	const products = useSelector(selectFilteredProducts);

	const [currentPage, setCurrentPage] = useState(1);

	const postsPerPage = 4;
	const indexOfLastProduct = currentPage * postsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
	const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
	const countOfProducts = products.length;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	useEffect(() => {
		setCurrentPage(1);
	}, [products]);

	const handleOpen = () => dispatch(openCart());

	const handlePaginate = page => setCurrentPage(page);

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
			{loading ? <Loading /> : <ProductList items={currentProducts} />}
			{!loading && (
				<Pagination
					handlePaginate={handlePaginate}
					currentPage={currentPage}
					countOfProducts={countOfProducts}
					postsPerPage={postsPerPage}
				/>
			)}
		</main>
	);
};

export default Main;
