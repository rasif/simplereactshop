import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
