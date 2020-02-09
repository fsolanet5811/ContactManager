import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './content.css';
import Manager from './manager/manager.js';
import Contact from './contact/contact.js';
import About from './about/about.js';
import { Route, Link } from 'react-router-dom';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grabbedSearch: '',
            searched: false
        }
    }

    render() {
        return (
            <div>
                <Route path="/" exact render={(props) => <Manager search={this.state.grabbedSearch} searched={this.state.searched} grabSearch={this.grabSearch.bind(this)} />}/>
                <Route path="/contact/" render={(props) => <div style={{padding: '50px'}}><Contact contact={this.state.grabbedEditContact} /></div>} />
                <Route path="/about/" component={About} />
            </div>
        );
    }

    grabSearch(search, searched) {
        this.state.grabbedSearch = search;
        this.state.searched = searched;
    } 
}

export default hot(module)(Content);