import React from 'react';

import Aside from './partials/Aside';
import Main from './partials/Main';
import CartBox from './partials/CartBox';

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
