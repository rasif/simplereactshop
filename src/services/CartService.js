class CartService {
	static getTotalOfCart = items => {
		return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
	};
}

export default CartService;
