import products from './products.json';

class ProductService {
	static getItems = () => {
		return products;
	};
}

export default ProductService;
