import * as cartTypes from '../types/cartTypes';

export const openCart = () => ({type: cartTypes.OPEN_CART});

export const closeCart = () => ({type: cartTypes.CLOSE_CART});

export const addToCart = product => (dispatch, getState) => {
	const state = getState();

	if (state.cart.items.find(item => item.id === product.id)) {
		dispatch(increaseInCart(product));
	} else {
		product.quantity = 1;
		dispatch({type: cartTypes.ADD_TO_CART, payload: {item: product}});
	}
};

export const increaseInCart = product => dispatch => {
	product.quantity += 1;
	dispatch({type: cartTypes.UPDATE_CART, payload: {item: product, price: product.price}});
};

export const decreaseInCart = product => dispatch => {
	if (product.quantity > 1) {
		product.quantity -= 1;
		dispatch({type: cartTypes.UPDATE_CART, payload: {item: product, price: -product.price}});
	} else {
		dispatch({type: cartTypes.DELETE_FROM_CART, payload: {id: product.id, price: -product.price}});
	}
};

export const deleteFromCart = product => dispatch => {
	dispatch({type: cartTypes.DELETE_FROM_CART, payload: {id: product.id, price: -product.price * product.quantity}});
};
