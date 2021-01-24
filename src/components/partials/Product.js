import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/actions/cartActions';

const Product = props => {
	console.log('Product');

	const dispatch = useDispatch();

	const handleAdd = () => dispatch(addToCart(props.product));

	return (
		<div className='product' onClick={handleAdd}>
			<figure className='product__figure'>
				<img className='product__image' src={props.product.image} alt={props.product.name} />
			</figure>
			<p className='product__name'>{props.product.name}</p>
			<span className='product__line'></span>
			<p className='product__price'>$ {props.product.price}</p>
		</div>
	);
};

export default Product;
