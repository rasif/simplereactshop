import * as cartTypes from '../types/cartTypes';

export const openCart = () => ({type: cartTypes.OPEN_CART});

export const closeCart = () => ({type: cartTypes.CLOSE_CART});

export const addItem = item => (dispatch, getState) => {
	const state = getState();

	if (state.cart.items.find(element => element.id === item.id)) {
		dispatch(increaseItem(item));
	} else {
		dispatch({type: cartTypes.ADD_ITEM, payload: {item}});
	}
};

export const increaseItem = item => ({type: cartTypes.INCREASE_ITEM, payload: {item}});

export const decreaseItem = item => dispatch => {
	if (item.quantity > 1) {
		dispatch({type: cartTypes.DECREASE_ITEM, payload: {item}});
	} else {
		dispatch(deleteItem(item));
	}
};

export const deleteItem = item => ({type: cartTypes.DELETE_ITEM, payload: {item}});
