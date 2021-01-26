import {createSelector} from 'reselect';
import FilterService from '../../services/FilterService';

export const selectCartItems = state => state.cart.items;
export const selectIsCartOpened = state => state.cart.opened;

export const selectSizeFilter = state => state.filter.sizeFilter;
export const selectSortFilter = state => state.filter.sortFilter;

export const selectProducts = state => state.shop.products;
export const selectShopLoading = state => state.shop.loading;

export const selectFilteredProducts = createSelector(
	[selectProducts, selectSizeFilter, selectSortFilter],
	(products, sizeFilter, sortFilter) => {
		return FilterService.filterProducts(products, sizeFilter, sortFilter);
	}
);
