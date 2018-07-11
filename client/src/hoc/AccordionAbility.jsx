import React, { Component as ReactComponent} from 'react';

export default (OriginalComponent) => class AccordionAbility extends ReactComponent {
    state = {
        isOpen: false
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render = () => {
        return (
            <OriginalComponent {...this.props} isOpen={this.state.isOpen} toggleOpen={this.toggleOpen} />
        );
    }
}