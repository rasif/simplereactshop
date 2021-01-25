import FilterService from '../../services/FilterService';

export const selectProducts = (products, filter) => {
	return FilterService.filterItems(products, filter.sizeFilter, filter.orderFilter);
};

export const selectLoading = state => state.shop.loading;
