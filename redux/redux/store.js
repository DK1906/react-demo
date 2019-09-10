import {createStore, applyMiddleware} from 'redux';
import {reducers} from './reducers';


import thunk from "redux-thunk"
import promise from "redux-promise";

// 整个应用只能有一个 Store
const store = createStore(reducers,applyMiddleware(thunk,promise));

const state = store.getState(); // 对store  快照  得到state 
export default store;
