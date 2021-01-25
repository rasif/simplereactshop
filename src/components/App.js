import React from 'react';

import Aside from './blocks/Aside';
import Main from './blocks/Main';
import CartBox from './blocks/CartBox';

const App = () => {
	console.log('App');

	return (
		<>
			<Aside />
			<Main />
			<CartBox />
		</>
	);
};

export default App;
