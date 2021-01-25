import products from './products.json';

class ShopService {
	static fetchProducts = () => {
		return products;
	};
}

export default ShopService;
