import * as productTypes from '../types/productTypes';

import ProductService from '../../services/ProductService';

export const getItems = () => dispatch => {
	dispatch({type: productTypes.SET_LOADING});

	setTimeout(() => {
		const items = ProductService.getItems();

		dispatch({type: productTypes.GET_ITEMS, payload: {items}});
	}, 1000);
};
