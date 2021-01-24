import React from 'react';

import SizeItem from './SizeItem';

const SizeBox = () => {
	console.log('SizeBox');

	const sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

	const renderSizes = () => {
		const template = sizes.map((item, index) => <SizeItem key={index} item={item} />);

		template.push(<span key={1000} className='sizes__item sizes__item-filler'></span>);

		return template;
	};

	return (
		<div className='aside__block sizes'>
			<p className='sizes__name'>Sizes: </p>
			<div className='sizes__block'>{renderSizes()}</div>
		</div>
	);
};

export default SizeBox;
