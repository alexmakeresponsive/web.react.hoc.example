import {createStore} from 'redux';
import combineReducer from './reducers/index';

const store = createStore(combineReducer);

//dev only
window.store = store;

export default store;