import FilterService from '../../services/FilterService';

export default (items, filter) => {
	return FilterService.filterItems(items, filter.sizeFilter, filter.orderFilter);
};
