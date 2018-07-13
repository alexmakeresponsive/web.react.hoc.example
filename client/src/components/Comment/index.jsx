import React, { Component } from 'react';
import './index.styl';


let Comment = (props) => {

    let {comment, user} = props.data;
    let {className} = props;

    // console.log(props);

    return (
        <div className={className}>
            {console.log('render Comment')}
            <div className="imgWr">
                <img className="img" src="/assets/img/placeholder.png" alt="userProfilePhoto"/>
            </div>
            <div>
                <p className="comment">{comment}</p>
                <span className="username">{user}</span>
            </div>
        </div>
    );
};

export default Comment;

