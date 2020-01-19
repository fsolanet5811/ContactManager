import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './content.css';
import Manager from './manager/manager.js';
import Contact from './contact/contact.js';


const ViewMode = {
    Manager: 0,
    Contact: 1
};

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMode: ViewMode.Manager,
        }
    }

    render() {
        var content = 'No page to show :(';
        if (this.state.viewMode == ViewMode.Manager) {
            content = (<Manager showContactPage={this.showContactPage.bind(this)} />);
        }
        if (this.state.viewMode == ViewMode.Contact) {
            content = (<Contact />);
        }

        return (
            <div className="Content">
                {content}
            </div>
        );
    }

    showContactPage() {
        this.state.viewMode = ViewMode.Contact;
        this.setState(this.state);
    }
}

export default hot(module)(Content);