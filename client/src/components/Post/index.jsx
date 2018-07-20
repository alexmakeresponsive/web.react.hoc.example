import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.styl';


import CommentList from '../CommentList/index.jsx';
// import ToggleOpen from '../../hoc/ToggleOpen.jsx';
import {actionDeletePostCreator} from '../../redux/action/creators/post/index';

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



    getText = () => {
        let {data} = this.props;
        // let {textIsVisible} = this.state;
        let {isOpen} = this.props;

        // if (textIsVisible) {
        if (isOpen) {
            return (
                <div>
                    <p>{data.text}</p>
                    <CommentList data={data.comments} />
                </div>
            );
        }

        return null;
    };

    deletePost = () => {
        console.info(this.props);
        let id = this.props.data._id;
        this.props.dispatch(actionDeletePostCreator(id));
    };

    render = () => {
        let {data, className} = this.props;
        // let {textIsVisible} = this.state;
        let {isOpen} = this.props;

        // console.log('Post isOpen = ', isOpen);

        return (
            <div className={className}>
                {/*{console.log('render Post')}*/}
                <div className="Post card">
                    <h3 className="title">{data.title}</h3>
                    <button className="secondary" onClick={this.deletePost}>
                        DELETE
                    </button>
                    <span>{data.dateCreatedAt}</span>
                    <button className="primary-1" onClick={this.props.toggleOpen}>
                        {isOpen ? 'Close text' : 'Show text'}
                    </button>
                    {this.getText()}
                </div>
            </div>
        );
    };
};

export default Post;

