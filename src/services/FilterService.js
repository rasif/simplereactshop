class FilterService {
	static filterProductsByOrder = (products, filter) => {
		if (filter === 'Highest to lowest') {
			return products.sort((a, b) => (a.price < b.price ? 1 : -1));
		} else if (filter === 'Lowest to highest') {
			return products.sort((a, b) => (a.price > b.price ? 1 : -1));
		} else {
			return products;
		}
	};

	static filterProductsBySizes = (products, filter) => {
		if (!filter.length) {
			return products;
		}

		return products.filter(product => product.sizes.some(size => filter.includes(size)));
	};

	static filterProducts = (products, sizeFilter, orderFilter) => {
		let filtered = [...products];

		filtered = this.filterProductsBySizes(filtered, sizeFilter);
		filtered = this.filterProductsByOrder(filtered, orderFilter);

		return filtered;
	};
}

export default FilterService;
