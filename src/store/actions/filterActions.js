import * as filterTypes from '../types/filterTypes';

export const setOrderFilter = filter => ({type: filterTypes.SET_ORDER_FILTER, payload: {filter}});
export const addSizeFilter = filter => ({type: filterTypes.ADD_SIZE_FILTER, payload: {filter}});
export const removeSizeFilter = filter => ({type: filterTypes.REMOVE_SIZE_FILTER, payload: {filter}});
