import {combineReducers} from 'redux';

import shopReducer from './shopReducer';
import filterReducer from './filterReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
	shop: shopReducer,
	filter: filterReducer,
	cart: cartReducer
});

export default rootReducer;
