import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.styl';


import PostEditor from '../PostEditor/index.jsx';
import PostList from '../PostList/index.jsx';

let App = () => {
    return (
        <div className="App">
            {console.log('render App')}
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
    );
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

