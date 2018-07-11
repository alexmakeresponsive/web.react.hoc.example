import React, { Component } from 'react';
import './index.styl';

import apiLocalhost from '../../redux/api/localhost';

import Post from '../Post/index.jsx';


class Postlist extends Component {
    constructor(props) {
        super(props);
        this.renderPosts();
        this.state = {
            postsIsAvailable: false,
            openPostId: null,
        }
    };

    localsStore = {
        posts: [],
    };

    toggleOpen = (postId) => {
        // console.log('Postlist toggleOpen');
        // console.log('postID from arguments = ', postId);
        if (postId === this.state.openPostId) {
            this.setState({
                openPostId: null
            });
        } else {
            this.setState({
                openPostId: postId
            });
        }


        this.renderPosts();
        // console.log('openPostId in state = ', this.state.openPostId);
    };

    renderPosts() {
        console.log('run renderPosts');

        let promise = apiLocalhost.getPosts();
        promise
            .then((data) => {
                let result = data.map((post) => {
                    // console.log('openPostId in map = ', post._id);
                    // console.log('openPostId in state = ', this.state.openPostId);

                    return (
                        <Post key={post._id}
                              className="col-sm-6"
                              data={post}
                              isOpen={post._id === this.state.openPostId}
                              toggleOpen={this.toggleOpen.bind(this, post._id)}
                        />
                    );
                });
                return result;
            })
            .then((data) => {
                this.localsStore.posts = data;
            })
            .then(() => {
                this.setState({
                    postsIsAvailable: true
                });
            });
    }

    render = () => {
        console.log('Render!');
        return (
            <div className="row">
                {this.localsStore.posts}
            </div>
        );
    }
}

export default Postlist;