import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.styl';



let Post = (props) => {
    let {data} = props;

    return (
        <div className="Post card">
            <div>
                <h3 className="title">{data.title}</h3>
                <span>{data.dateCreatedAt}</span>
                <p>{data.text}</p>
            </div>
        </div>
    );
};

export default Post;

