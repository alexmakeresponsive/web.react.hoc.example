import { createStore } from 'redux';
import reducer from '../reducer/index';

const store = createStore(reducer);

//dev
window.store = store;
window.SomeObj = {
  pr1: [1, 2 ,3]
};


export default store;
