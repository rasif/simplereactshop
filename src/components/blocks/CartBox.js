import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectItems, selectIsOpened} from '../../store/selectors/cartSelectors';
import {closeCart} from '../../store/actions/cartActions';
import CartService from '../../services/CartService';

import CartItem from '../partials/CartItem';

const CartBox = () => {
	console.log('Cart');

	const items = useSelector(state => selectItems(state));
	const isOpened = useSelector(state => selectIsOpened(state));

	const clickOutsideRef = useRef();

	const dispatch = useDispatch();

	clickOutsideRef.current = e => {
		const canClose =
			isOpened &&
			!e.target.closest('.cart') &&
			!e.target.classList.contains('main__cart') &&
			!e.target.closest('.product') &&
			!e.target.classList.contains('item__close') &&
			!e.target.classList.contains('item__minus');

		if (canClose) {
			dispatch(closeCart());
		}
	};

	const handleClickOutside = e => {
		clickOutsideRef.current(e);
	};

	const handleClose = () => {
		dispatch(closeCart());
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);

		return () => document.removeEventListener('click', handleClickOutside);
	}, []);

	useEffect(() => {
		if (isOpened) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'overlay';
		}
	}, [isOpened]);

	const renderItems = () => {
		if (items && items.length) {
			return items.map(item => <CartItem key={item.id} item={item} />);
		}
	};

	return (
		<div className={`cart ${isOpened && 'cart-opened'}`}>
			<p className='cart__title'>Cart</p>
			<div className='cart__items'>{renderItems()}</div>
			<div className='cart__fixed'>
				<div className='cart__footer'>
					<p className='cart__subtotal'>Subtotal</p>
					<p className='cart__total'>$ {CartService.getTotalOfCart(items)}</p>
				</div>
				<p className='cart__checkout'>Checkout</p>
			</div>
			<i className='cart__close fas fa-times' onClick={handleClose}></i>
		</div>
	);
};

export default CartBox;
