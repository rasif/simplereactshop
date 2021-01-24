import * as cartTypes from '../types/cartTypes';

const initialState = {
	opened: false,
	items: [],
	total: 0
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case cartTypes.OPEN_CART:
			return {
				...state,
				opened: true
			};
		case cartTypes.CLOSE_CART:
			return {
				...state,
				opened: false
			};
		case cartTypes.ADD_TO_CART:
			return {
				...state,
				items: [action.payload.item, ...state.items],
				opened: true,
				total: state.total + action.payload.item.price
			};
		case cartTypes.DELETE_FROM_CART:
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload.id),
				opened: true,
				total: state.total + action.payload.price
			};
		case cartTypes.UPDATE_CART:
			const items = [...state.items];

			const index = items.findIndex(item => item.id === action.payload.item.id);

			items[index].quantity = action.payload.item.quantity;

			return {
				...state,
				opened: true,
				items,
				total: state.total + action.payload.price
			};
		default:
			return state;
	}
};

export default cartReducer;
