import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.styl';


import PostList from '../PostList/index.jsx';

let App = () => {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="titleApp">Yakobchuk React App</h2>
                    </div>
                </div>
                <PostList />
            </div>
        </div>
    );
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

