import React, { Component } from 'react';
import './index.styl';

import apiLocalhost from '../../redux/api/localhost';

import Post from '../Post/index.jsx';
import AccordionAbility from '../../hoc/AccordionAbility.jsx';

import apiPosts from '../../redux/api/localhost.js';


class Postlist extends Component {
    constructor(props) {
        super(props);
    };

    renderPosts = () => {
        let result = apiPosts.map((post) => {
            // console.log('openPostId in map = ', post._id);
            // console.log('openPostId in state = ', this.state.openPostId);

            // console.log(this.props);

            return (
                <Post key={post._id}
                      className="col-sm-6"
                      data={post}
                      isOpen={post._id === this.props.openPostId}
                      toggleOpen={this.props.toggleOpen.bind(this, post._id)}
                />
            );
        });
        return result;
    };

    render = () => {
        // console.log('render PostList');
        return (
            <div className="row">
                {this.renderPosts()}
            </div>
        );
    }
}

export default AccordionAbility(Postlist);