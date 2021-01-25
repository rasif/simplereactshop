class FilterService {
	static filterItemsByOrder = (items, filter) => {
		if (filter === 'Highest to lowest') {
			return items.sort((a, b) => (a.price < b.price ? 1 : -1));
		} else if (filter === 'Lowest to highest') {
			return items.sort((a, b) => (a.price > b.price ? 1 : -1));
		} else {
			return [...items];
		}
	};

	static filterItemsBySizes = (items, filter) => {
		if (!filter.length) {
			return items;
		}

		return items.filter(item => item.sizes.some(size => filter.includes(size)));
	};

	static filterItems = (items, sizeFilter, orderFilter) => {
		let filtered = this.filterItemsBySizes(items, sizeFilter);

		return this.filterItemsByOrder(filtered, orderFilter);
	};
}

export default FilterService;
