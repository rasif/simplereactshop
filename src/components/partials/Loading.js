import React from 'react';

const Loading = () => {
	console.log('Loading');

	return (
		<div className='loading'>
			<span className='loading__circle'></span>
			<span className='loading__circle'></span>
		</div>
	);
};

export default Loading;
