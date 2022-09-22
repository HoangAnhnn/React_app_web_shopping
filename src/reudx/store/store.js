import showProduct from '../reduces/showProduct';
import notify from '../reduces/notify';
import cart from '../reduces/cart';
import router from '../reduces/router';
import showSearch from '../reduces/showSearch';

import { createStore } from 'redux';
import { combineReducers } from 'redux';

const store = createStore(combineReducers({ showProduct, notify, cart, router, showSearch }));
// console.log(store.getState());

export default store;
