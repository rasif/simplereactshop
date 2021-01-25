import React from 'react';

import Product from './Product';

const ProductList = ({items}) => {
	console.log('ProductList');

	const renderProducts = () => {
		if (items && items.length) {
			let template = items.map(item => <Product key={item.id} product={item} />);

			template.push(<div key={9999} className='product product-filler'></div>);

			return template;
		} else {
			return <p>Store is empty</p>;
		}
	};

	return <div className='main__products'>{renderProducts()}</div>;
};

export default ProductList;
