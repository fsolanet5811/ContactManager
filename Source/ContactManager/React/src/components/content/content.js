import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './content.css';
import Manager from './manager/manager.js';
import Contact from './contact/contact.js';
import { Route, Link } from 'react-router-dom';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grabbedEditContact: null,
            grabbedContactList: []
        }
    }

    render() {
        return (
            <div>
                <Route path="/" exact render={(props) => <Manager contacts={this.state.grabbedContactList} grabContacts={this.grabContacts.bind(this)} />}/>
                <Route path="/contact/" render={(props) => <Contact contact={this.state.grabbedEditContact} />} />
            </div>
        );
    }

    grabContacts(editContact, contactList) {
        this.state.grabbedEditContact = editContact;
        this.state.grabbedContactList = contactList;
    }
}

export default hot(module)(Content);