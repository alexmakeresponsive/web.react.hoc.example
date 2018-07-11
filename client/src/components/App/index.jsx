import React, { Component } from 'react';
import './index.styl';

import apiLocalhost from '../../redux/api/localhost';


class App extends Component {
    constructor(props) {
        super(props);
        this.renderPosts();
        this.state = {
            postsIsAvailable: false
        }
    };

    renderPosts() {
        console.log('run renderPosts');
        let promise = apiLocalhost.getPosts();

        promise
            .then((data) => {
                let result = data.map((post, index) => {
                    return (
                        <div key={post._id} className="col-sm-3  card">
                            <div className="Post">
                                <div>
                                    <h3 className="title">{post.title}</h3>
                                    <span>{post.dateCreatedAt}</span>
                                    <p>{post.text}</p>
                                </div>
                            </div>
                        </div>
                    );
                });

                return result;
            })
            .then((data)=>{
                if (this.localsStore.posts.length === 0) {
                    this.localsStore.posts = data;
                    this.state.postsIsAvailable = true;
                    console.log('run force update!');
                    this.forceUpdate();
                }
            });
    }

    localsStore = {
        posts: []
    };

    render() {
        console.log('Render!');
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="titleComponent">Yakobchuk React App</h2>
                        </div>
                    </div>
                    <div className="row">
                        {this.localsStore.posts}
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
