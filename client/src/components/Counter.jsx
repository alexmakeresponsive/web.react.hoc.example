import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import incrementAction from '../redux/actionCreators/increment';

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number,
        incrementAction: PropTypes.func.isRequired
    };

    Increment = () => {
        console.log('+1');
        let {incrementAction} = this.props;
        incrementAction();
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

let mapStateToDispatch = { incrementAction };


export default connect(mapStateToProps, mapStateToDispatch)(Counter);

