// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import App from './App/index.jsx';
// import store from '../redux/store/index';
// import { Provider } from 'react-redux';
//
// class Index extends Component {
//     static propTypes = {
//
//     };
//
//     render = () => {
//         return (
//             <div>
//                 <App {...this.props}/>
//             </div>
//         );
//     };
// };
//
//
//
// ReactDOM.render(
//     <Index />,
//     document.getElementById('root')
// );


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import store from '../redux/store/index';
import { Provider } from 'react-redux';
import App from './App/index.jsx';


let Index = (props) => {
    return (
        <Provider store={store}>
            <div className="Index">
                <App {...props}/>
            </div>
        </Provider>
    );
};


ReactDOM.render(
    <Index />,
    document.getElementById('root')
);

