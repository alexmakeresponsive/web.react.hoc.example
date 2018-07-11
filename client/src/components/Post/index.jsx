import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.styl';


import CommentList from '../CommentList/index.jsx';


class Post extends Component {
    // let {data, className} = this.props;
    static defaultProps = {
        data: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }),
        className: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            textIsVisible: false
        }
    };

    toggleText = () => {
        this.setState({
            textIsVisible: !this.state.textIsVisible
        });
    };

    getText = () => {
        let {data} = this.props;
        let {textIsVisible} = this.state;

        if (textIsVisible) {
            return (
                <div>
                    <p>{data.text}</p>
                    <CommentList data={data.comments} />
                </div>
            );
        }

        return null;
    };

    render = () => {
        let {data, className} = this.props;
        let {textIsVisible} = this.state;

        // console.log(data);

        return (
            <div className={className}>
                <div className="Post card">
                    <h3 className="title">{data.title}</h3>
                    <span>{data.dateCreatedAt}</span>
                    <button className="primary-1" onClick={this.toggleText}>
                        {textIsVisible ? 'Close text' : 'Show text'}
                    </button>
                    {this.getText()}
                </div>
            </div>
        );
    };
};

export default Post;

