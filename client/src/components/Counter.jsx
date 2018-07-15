import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number
    };

    Increment = () => {
        console.log('+1');
        this.props.dispatch({
            type:'INCREMENT'
        })
    };

    render = () => {
        return (
            <div className="text-center">
                <h2>Counter component</h2>
                <p>
                    This props counter: {this.props.counter}
                </p>
                <div>
                    <button onClick={this.Increment} className="inverse">+1</button>
                </div>
            </div>
        );
    };
};


let mapStateToProps = (state) => {
    return {
        counter: state.count
    }
};

const decorator = connect(mapStateToProps);


export default decorator(Counter);

