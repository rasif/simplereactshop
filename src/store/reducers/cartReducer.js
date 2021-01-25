import * as cartTypes from '../types/cartTypes';

const initialState = {
	opened: false,
	items: []
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
		case cartTypes.ADD_ITEM:
			return {
				...state,
				items: [{...action.payload.item, quantity: 1}, ...state.items],
				opened: true
			};
		case cartTypes.DELETE_ITEM:
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload.item.id)
			};
		case cartTypes.INCREASE_ITEM:
			return {
				...state,
				items: state.items.map(item =>
					item.id === action.payload.item.id ? {...item, quantity: item.quantity + 1} : item
				),
				opened: true
			};
		case cartTypes.DECREASE_ITEM:
			return {
				...state,
				items: state.items.map(item =>
					item.id === action.payload.item.id ? {...item, quantity: item.quantity - 1} : item
				)
			};
		default:
			return state;
	}
};

export default cartReducer;
