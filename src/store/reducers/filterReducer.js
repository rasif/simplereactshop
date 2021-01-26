import * as filterTypes from '../types/filterTypes';

const initialState = {
	sortFilter: 'Select',
	sizeFilter: []
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case filterTypes.SET_SORT_FILTER:
			return {
				...state,
				sortFilter: action.payload.filter
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
