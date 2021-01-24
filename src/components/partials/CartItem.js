import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteFromCart, increaseInCart, decreaseInCart} from '../../store/actions/cartActions';

const CartItem = props => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteFromCart(props.item));
	};

	const handleIncrease = () => {
		dispatch(increaseInCart(props.item));
	};

	const handleDecrease = () => {
		dispatch(decreaseInCart(props.item));
	};

	return (
		<div className='cart__item item'>
			<i className='item__close fas fa-times' onClick={handleDelete}></i>
			<figure className='item__figure'>
				<img className='item__image' src={props.item.image} alt={props.item.name} />
			</figure>
			<div className='item__info'>
				<p className='item__text'>{props.item.name}</p>
				<p className='item__quantity'>Quantity: {props.item.quantity}</p>
			</div>
			<div className='item__buttons'>
				<span className='item__price'>$ {props.item.price * props.item.quantity}</span>
				<div className='item__buttonBlock'>
					<span className='item__minus' onClick={handleDecrease}>
						-
					</span>
					<span className='item__plus' onClick={handleIncrease}>
						+
					</span>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
