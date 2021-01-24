import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {closeCart} from '../../store/actions/cartActions';
import CartItem from './CartItem';

const CartBox = () => {
	console.log('Cart');

	const items = useSelector(state => state.cart.items);
	const isOpened = useSelector(state => state.cart.opened);
	const total = useSelector(state => state.cart.total);
	const opening = useRef(false);

	const dispatch = useDispatch();

	useEffect(() => {
		opening.current = isOpened;

		if (isOpened) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'overlay';
		}
	}, [isOpened]);

	useEffect(() => {
		document.addEventListener('click', e => {
			const canClose =
				opening.current &&
				!e.target.closest('.cart') &&
				!e.target.classList.contains('main__cart') &&
				!e.target.closest('.product') &&
				!e.target.classList.contains('item__close') &&
				!e.target.classList.contains('item__minus');

			if (canClose) {
				dispatch(closeCart());
			}
		});
	}, []);

	const handleClose = () => {
		dispatch(closeCart());
	};

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
					<p className='cart__total'>$ {total}</p>
				</div>
				<p className='cart__checkout'>Checkout</p>
			</div>
			<i className='cart__close fas fa-times' onClick={handleClose}></i>
		</div>
	);
};

export default CartBox;
