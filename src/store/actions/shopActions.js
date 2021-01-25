import * as shopTypes from '../types/shopTypes';

import ShopService from '../../services/ShopService';

export const getProducts = () => dispatch => {
	setTimeout(() => {
		const products = ShopService.fetchProducts();

		dispatch({type: shopTypes.GET_PRODUCTS, payload: {products}});
	}, 1000);
};
