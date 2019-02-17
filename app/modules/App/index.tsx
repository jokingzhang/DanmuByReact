import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader'; // HMR

import App from './App';

import './style.scss';

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route component={App} />
            </BrowserRouter>
        );
    }
}

export default hot(module)(Root);
