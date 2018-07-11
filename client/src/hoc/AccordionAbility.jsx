import React, { Component as ReactComponent} from 'react';

export default (OriginalComponent) => class AccordionAbility extends ReactComponent {
    state = {
        openPostId: null,
    };

    toggleOpen = (postId) => {
        // console.log('Postlist toggleOpen');
        // console.log('postID from arguments = ', postId);
        this.setState({
            openPostId: (postId === this.state.openPostId) ? null : postId
        });

        // this.getPosts();
        // console.log('openPostId in state = ', this.state.openPostId);
    };


    render = () => {
        return (
            <OriginalComponent {...this.props} openPostId={this.state.openPostId} toggleOpen={this.toggleOpen} />
        );
    }
}