import * as filterTypes from '../types/filterTypes';

export const setSortFilter = filter => ({type: filterTypes.SET_SORT_FILTER, payload: {filter}});
export const addSizeFilter = filter => ({type: filterTypes.ADD_SIZE_FILTER, payload: {filter}});
export const removeSizeFilter = filter => ({type: filterTypes.REMOVE_SIZE_FILTER, payload: {filter}});
