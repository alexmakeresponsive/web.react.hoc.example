import React, { Component } from 'react';
import './index.styl';

import apiLocalhost from '../../redux/api/localhost';

import Post from '../Post/index.jsx';


class Postlist extends Component {
    constructor(props) {
        super(props);
        this.renderPosts();
        this.state = {
            postsIsAvailable: false
        }
    };

    localsStore = {
        posts: []
    };

    renderPosts() {
        console.log('run renderPosts');
        let promise = apiLocalhost.getPosts();

        promise
            .then((data) => {
                let result = data.map((post) => {
                    return (
                        <Post key={post._id} className="col-sm-6" data={post} />
                    );
                });
                return result;
            })
            .then((data)=>{
                if (this.localsStore.posts.length === 0) {
                    this.localsStore.posts = data;
                    // this.setState({
                    //     postsIsAvailable: true
                    // });
                    // console.log('run force update!');
                    // this.forceUpdate();
                }
            })
            .then(()=>{
                this.setState({
                    postsIsAvailable: true
                });
            });
    }

    render() {
        console.log('Render!');
        return (
            <div className="row">
                {this.localsStore.posts}
            </div>
        );
    }
}

export default Postlist;