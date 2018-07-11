import React from 'react';
import ReactDOM from 'react-dom';
import './index.styl';

import App from './src/components/App/index.jsx';

let Index = () => {
    return (
        <div className="content">
            <App />
        </div>
    );
};


ReactDOM.render(
    <Index />,
    document.getElementById('root')
);

