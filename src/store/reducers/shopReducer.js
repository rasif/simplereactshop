import * as shopTypes from '../types/shopTypes';

const initialState = {
	products: [],
	loading: true
};

const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case shopTypes.GET_PRODUCTS:
			return {
				...state,
				products: action.payload.products,
				loading: false
			};
		case shopTypes.SET_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};

export default shopReducer;
