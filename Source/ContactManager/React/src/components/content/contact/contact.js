import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: props.contact
        };
        this.state.contact.FullName = 'changed';
    }

    render() {
        return (
            <div>
                {this.state.contact.FullName}
            </div>
        );
    }
}

export default hot(module)(Contact);