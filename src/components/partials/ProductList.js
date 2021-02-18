import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../store/actions/shopActions';
import {selectShopLoading, selectFilteredProducts} from '../../store/selectors';
import Pagination from './Pagination';
import Loading from './Loading';

import Product from './Product';

const ProductList = () => {
	console.log('ProductList');

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

	const handlePaginate = page => setCurrentPage(page);

	const renderProducts = () => {
		if (currentProducts && currentProducts.length) {
			let template = currentProducts.map(item => <Product key={item.id} product={item} />);

			template.push(<div key={9999} className='product product-filler'></div>);

			return template;
		}
	};

	return (
		<>
			<p className='main__count'>{countOfProducts} Product(s) found.</p>
			{loading && <Loading />}
			{!loading && (
				<>
					<div className='main__products'>{renderProducts()}</div>
					<Pagination
						handlePaginate={handlePaginate}
						currentPage={currentPage}
						countOfProducts={countOfProducts}
						postsPerPage={postsPerPage}
					/>
				</>
			)}
		</>
	);
};

export default ProductList;
