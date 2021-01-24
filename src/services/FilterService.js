class FilterService {
	static filterItemsByOrder = (items, filter) => {
		const filteredItems = [...items];

		if (filter === 'Highest to lowest') {
			return filteredItems.sort((a, b) => (a.price < b.price ? 1 : -1));
		} else if (filter === 'Lowest to highest') {
			return filteredItems.sort((a, b) => (a.price > b.price ? 1 : -1));
		} else {
			return filteredItems;
		}
	};

	static filterItemsBySizes = (items, filter) => {
		if (!filter.length) {
			return items;
		}

		return items.filter(item => item.sizes.some(size => filter.includes(size)));
	};
}

export default FilterService;
