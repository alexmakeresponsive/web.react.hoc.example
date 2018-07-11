import React, { Component } from 'react';
import './index.styl';


class Post extends Component {
    // let {data, className} = this.props;

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
        let textPost = textIsVisible ? <p>{data.text}</p>  : null;

        return textPost;
    };

    render = () => {
        let {data, className} = this.props;
        let {textIsVisible} = this.state;

        return (
            <div className={className}>
                <div className="Post card">
                    <h3 className="title">{data.title}</h3>
                    <span>{data.dateCreatedAt}</span>
                    <button className="primary" onClick={this.toggleText}>
                        {textIsVisible ? 'Close text' : 'Show text'}
                    </button>
                    {this.getText()}
                </div>
            </div>
        );
    };
};

export default Post;

