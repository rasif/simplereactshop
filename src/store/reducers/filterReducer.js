import * as filterTypes from '../types/filterTypes';

const initialState = {
	orderFilter: 'Select',
	sizeFilter: []
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case filterTypes.SET_ORDER_FILTER:
			return {
				...state,
				orderFilter: action.payload.orderFilter
			};
		case filterTypes.ADD_SIZE_FILTER:
			return {
				...state,
				sizeFilter: [...state.sizeFilter, action.payload.sizeFilter]
			};
		case filterTypes.REMOVE_SIZE_FILTER:
			return {
				...state,
				sizeFilter: state.sizeFilter.filter(filter => filter !== action.payload.sizeFilter)
			};
		default:
			return state;
	}
};

export default filterReducer;
