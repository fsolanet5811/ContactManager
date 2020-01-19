import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './app.css';
import Content from './components/content/content.js';
import Header from './components/header/header.js';

const ViewMode = {
    Manager: 0,
    Contact: 1
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMode: ViewMode.Manager,
        }
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Content />
            </div>
        );
    }
}

export default hot(module)(App);