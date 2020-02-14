import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './content.css';
import Contact from './contact/contact.js';
import About from './about/about.js';
import { Route, Link } from 'react-router-dom';
import ContactManager from './contact-page/ContactManager.js';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context
        }
    }

    render() {
        return (
            <div>

                <Route to="/home" render={() => <ContactManager context={this.state.context}/>}/>
            </div>
        );
    }
}

export default hot(module)(Content);