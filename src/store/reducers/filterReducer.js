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
				orderFilter: action.payload.filter
			};
		case filterTypes.ADD_SIZE_FILTER:
			return {
				...state,
				sizeFilter: [...state.sizeFilter, action.payload.filter]
			};
		case filterTypes.REMOVE_SIZE_FILTER:
			return {
				...state,
				sizeFilter: state.sizeFilter.filter(filter => filter !== action.payload.filter)
			};
		default:
			return state;
	}
};

export default filterReducer;
