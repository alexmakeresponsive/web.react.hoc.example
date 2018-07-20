import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.styl';


import PostEditor from '../PostEditor/index.jsx';
import PostList from '../PostList/index.jsx';

import store from '../../redux/store';

import {Provider} from 'react-redux';

let App = () => {
    return (
        <Provider store={store}>
            <div className="App">
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

