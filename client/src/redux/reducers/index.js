import counter from './counter';
import posts from './posts';
import {combineReducers} from 'redux';

export default combineReducers({
    counter: counter,
    posts1: posts
});
