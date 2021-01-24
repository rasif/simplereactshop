import * as productTypes from '../types/productTypes';

const initialState = {
	items: [],
	loading: true
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case productTypes.GET_ITEMS:
			return {
				...state,
				items: action.payload.items,
				loading: false
			};
		case productTypes.SET_LOADING:
			return {
				...state,
				loading: true
			};
		case productTypes.RESET_LOADING:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
};

export default productReducer;
