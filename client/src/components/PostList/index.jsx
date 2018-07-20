import React, { Component } from 'react';
import './index.styl';

import Post from '../Post/index.jsx';
import AccordionAbility from '../../hoc/AccordionAbility.jsx';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';



class Postlist extends Component {
    static propTypes = {

    };

    constructor(props) {
        super(props);
    };

    renderPosts = () => {
        let result = this.props.postsProp.map((post) => {
            // console.log('openPostId in map = ', post._id);
            // console.log('openPostId in state = ', this.state.openPostId);

            // console.log(this.props);

            return (
                <Post {...this.props}
                      key={post._id}
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


// const connectDecorator = connect( mapStateToProps );

function mapStateToProps(stateStore) {
    return {
        postsProp: stateStore.posts1
    }
}

export default connect(mapStateToProps)(AccordionAbility(Postlist));