import React, { Component } from 'react';
import './index.styl';


import Comment from '../Comment/index.jsx';
import ToggleOpen from '../../hoc/ToggleOpen.jsx';

//now we can use CommentList as staleless component, because state placed in hoc toggleOpen
class CommentList extends Component {
    static defaultProps = {
        data: []
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         commentIsVisible: false
    //     }
    // };
    //
    // toggleComments = () => {
    //     this.setState({
    //         commentIsVisible: !this.state.commentIsVisible
    //     });
    // };

    renderComments = () => {
        // console.log('run renderComments');
        // console.log('comments data = ', comments);

        // if (!this.state.commentIsVisible) {
        //     return null;
        // }

        if (!this.props.isOpen) {
            return null;
        }

        let comments = this.props.data;

        if (comments.length === 0) {
            return 'No comments yeat';
        }

        let result = comments.map((comment) => {
            return (
                <Comment key={comment.id} className="Comment" data={comment} />
            );
        });

        // console.log('comments result = ', result);

        return result;
    };

    render = () => {
        // let {commentIsVisible} = this.state;
        let {isOpen} = this.props;
        // console.log('commentIsVisible = ', commentIsVisible );

        return (
            <div className="">
                <button className="primary-2" onClick={this.props.toggleOpen}>
                    {/*{commentIsVisible ? 'Close comments' : 'Show comments'}*/}
                    {isOpen ? 'Close comments' : 'Show comments'}
                </button>
                <div className="commentsList">
                    {this.renderComments()}
                </div>
            </div>
        );
    };
};

export default ToggleOpen(CommentList);