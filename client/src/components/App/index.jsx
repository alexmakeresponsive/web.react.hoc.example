import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.styl';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../../redux/store/index';

import PostEditor from '../PostEditor/index.jsx';
import PostList from '../PostList/index.jsx';



import Counter from '../Counter.jsx';


let App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Counter />
                {/*{console.log('render App')}*/}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="titleComponent">Yakobchuk React App</h2>
                        </div>
                    </div>
                    <PostEditor />
                    <PostList />
                </div>
            </div>
        </Provider>
    );
};



ReactDOM.render(
    <App />,
    document.getElementById('root')
);
