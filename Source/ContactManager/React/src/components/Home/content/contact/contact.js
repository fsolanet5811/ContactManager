import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './contact.css';
import ContactInfo from './contactInfo/contactInfo.js';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context,
            contact: props.contact,
            isOpen: false
        };
    }

    render() {
        if(this.state.contact.isDeleted) {
            return null;
        }
        
        const arrowImageSource = this.state.isOpen ? "React/images/upArrow.png" : "React/images/downArrow.png";

        return (
            <div>
                <div className="MainCard" onClick={this.contactClicked.bind(this)}>
                    {this.state.contact.FullName}
                    <img className="DownArrow" src={arrowImageSource}/>
                </div>
                <div className="InformationCardHost">
                    <ContactInfo isOpen={this.state.isOpen} contact={this.state.contact} contactDeleted={this.contactDeleted.bind(this)} context={this.state.context}/>
                </div>
            </div>
            
        );
    }

    contactClicked(e) {    
        this.state.isOpen = !this.state.isOpen;
        this.setState(this.state);
    }

    contactDeleted() {
        // Just forcing a refresh here. The caller will set the deleted flag on the contact.
        this.setState(this.state);
    }
}

export default hot(module)(Contact);