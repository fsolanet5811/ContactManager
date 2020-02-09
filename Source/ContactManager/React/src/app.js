import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './app.css';
import Content from './components/content/content.js';
import Header from './components/header/header.js';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <span className="App">
                    <Header />
                    <Content />
                </span>
            </Router>
        );
    }
}

export default hot(module)(App);