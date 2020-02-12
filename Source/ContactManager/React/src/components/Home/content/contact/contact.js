import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './contact.css';
import ContactInfo from './contactInfo/contactInfo.js';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: props.contact
        };
        this.state.contact.visible = false;
    }

    render() {
        return (
            <div>
                <div className="MainCard" onClick={this.contactClicked.bind(this)}>
                    {this.state.contact.FullName}
                </div>
                <div className="InformationCardHost">
                    {this.state.contact.visible && <ContactInfo contact={this.state.contact}/>}
                </div>
            </div>
            
        );
    }

    contactClicked(e) {    
        this.state.contact.visible = !this.state.contact.visible;
        this.setState(this.state);
    }
}

export default hot(module)(Contact);